
const { Router } = require("express");
const express = require("express");
const router = express.Router();

//@route GETapi/posts
//@desc test

router.get("/", (req,res ) => {
    res.send("Posts Route");
})


module.exports = router; 