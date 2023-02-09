const express = require("express");
const router = express.Router();

var Projects = [
    {
        id : 1 ,
        projectName : "IRIC ARCHIVE",
        projectsubTitleName : "web Development ",
        link : "https://github.com/Abdelmounaimhmamed/IRIC-archive",
        imagesrc : "https://esmartech.ae/webroot/front/images/Node-Js.png"
    },
    {
        id : 1 ,
        projectName : "Electron App",
        projectsubTitleName : "Desktop development ",
        link : "https://github.com/Abdelmounaimhmamed/electron-desktop-app-",
        imagesrc : "https://res.cloudinary.com/practicaldev/image/fetch/s--03FhpCOu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l8ro3v0chfxaxgsseb1a.png"
    },
    {
        id : 1 ,
        projectName : "Php App",
        projectsubTitleName : "Web Application",
        link : "https://github.com/Abdelmounaimhmamed/php-student-management-html-css-php-mysql-",
        imagesrc : "https://www.interviewbit.com/blog/wp-content/uploads/2021/12/PHP-Projects-1160x653.png"
    }
]

router.get("/Project" , (req,res) => {
    res.render("projects.ejs" , {projects : Projects});
})




module.exports = router;