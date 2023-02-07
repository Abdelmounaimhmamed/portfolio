const express = require("express");
const router = express.Router();


router.get("/Project" , (req,res) => {
    res.render("projects.ejs");
})




module.exports = router;