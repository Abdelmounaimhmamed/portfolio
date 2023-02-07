const express = require("express");
const router = express.Router();


router.get("/Inpiration" , (req,res) => {
    res.render("inspiration.ejs");
})




module.exports = router;