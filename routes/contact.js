const express = require("express");
const Contact = require("../models/contact");
const router = express.Router();


router.get("/contact" , (req,res) => {
    res.render("contact.ejs");
})

router.post("/contact" , async (req,res) => {
    const contactUs = new Contact({
        Firstname : req.body.Firstname ,
        Lastname : req.body.Lastname,
        email : req.body.email,
        own : req.body.own
    })
    try {
        await contactUs.save();
        res.redirect("/contact")
    } catch (error) {
        console.log(error.message);
    }
})



module.exports = router;