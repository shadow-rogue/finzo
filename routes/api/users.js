const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");

const { check, validationResult} = require("express-validator/check");

const User = require("../../models/User");

//@route  POST api/users
//@desc   Register users

router.post("/", [
    check("name", "Name is required")
    .not().
    isEmpty(),
    check("email", "Please include a valid email")
    .isEmail(),
    check("password", "Please enter a password with 6 or more characters")
    .isLength({min: 6})
], 
  async (req,res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne( {email} );

        if(user) {
            return res.status(400).json( { errors: [{msg:"User already exists"}] });
        }

        user = new User( {
            name,
            email, 
            password
        })

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get("jwtSecret"),
            { expiresIn: 36000},
            (err, token)=> {
                if(err) throw err;
                res.json({token});
            }
            );

    } catch(err) {
        console.log(err.message);
        res.status(500).send("Server Error");

    }

});

//@route  GETapi/profile/me
//@desc   Get all users profile
//@access Admins

router.get("/", auth, async (req,res)=> {
    try {

        
        const admin =await User.findById(req.user.id).select("-password");

        console.log(admin.isAdmin);

        if(admin.isAdmin)
        {
            const users = await User.find().populate("user",["name","email"]);
            res.json(users);
        }
        else
           res.status(400).send("Bad Request");
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});



module.exports = router; 