const express = require("express");
const router = express.Router();

var Projects = [
    {
        id : 1 ,
        projectName : "IRIC ARCHIVE",
        projectsubTitleName : "webDevelopment ",
        link : "/home",
        imagesrc : "https://esmartech.ae/webroot/front/images/Node-Js.png"
    },
    {
        id : 1 ,
        projectName : "Electron App",
        projectsubTitleName : "Desktop development ",
        link : "/home",
        imagesrc : "https://res.cloudinary.com/practicaldev/image/fetch/s--03FhpCOu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l8ro3v0chfxaxgsseb1a.png"
    },
    {
        id : 1 ,
        projectName : "PhP App",
        projectsubTitleName : "Webapplication ",
        link : "/home",
        imagesrc : "https://www.interviewbit.com/blog/wp-content/uploads/2021/12/PHP-Projects-1160x653.png"
    }
]

router.get("/Project" , (req,res) => {
    res.render("projects.ejs" , {projects : Projects});
})




module.exports = router;