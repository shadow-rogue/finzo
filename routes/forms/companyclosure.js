const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Basic_info = require("../../models/Basic_info");
const Turnover = require("../../models/Turnover");


//POST basic info data into database
router.post("/submit",auth, async (req,res) => {

    const {companyName, incDate, pendingDate, turnover, status, gstn} = req.body;

    try {

    const info = new Basic_info({
            user: req.user.id,
            company_name: companyName,
            inc_date: incDate,
            pending_date: pendingDate,
            gstn_status: status,
            gstn: gstn
        });

        await info.save();
        var currentYear = (new Date()).getFullYear();

        console.log(info.id);

        for(var i=0;i<(currentYear-parseInt(incDate));i++)
        {
            const comp_turnover= new Turnover({
                user: req.user.id,
                year: (parseInt(incDate) + i),
                amount: turnover[i]
            });

            await comp_turnover.save();
        }

        res.send(info);
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
});

//GET Basic info data from database

router.get("/basicinfo",auth, async (req, res) => {
    try {
        const infos = await Basic_info.findOne({ user:req.user.id} ).populate("user",
        ["name", "avatar"]);

        if(!infos) {
            return res.status(400).json( {msg: "There is no profile for this user"} );
        }

        res.json(infos);
    } catch(err)
    {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})



module.exports = router;