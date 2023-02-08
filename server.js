const express = require("express");
const dotenv = require("dotenv");
const Port = process.env.PORT || 5000 ;
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const ContactSend = require("./routes/contact");
dotenv.config();

// getting routes : 
const HomeRoute = require("./routes/home");
const AboutRoute = require("./routes/about");
const ContactRoute = require("./routes/contact");
const InspirationRoute = require("./routes/inspiration");
const ProjectRoute = require("./routes/projects");

// connection to mongodb 

mongoose.connect(process.env.DB_URL).then( () => {
    console.log("connected to db");
}).catch(err => {
    console.log(err.message)
})

// setup middleware : 
app.use(express.json()) ;
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.use(express.static("./public/"));

// use routes : 
app.use("/" , HomeRoute);
app.use("/" , AboutRoute);
app.use("/",ContactRoute);
app.use("/",InspirationRoute);
app.use("/",ProjectRoute);

app.get("/" , (req,res) =>{
    res.render("home.ejs");
} )


app.listen(Port , () => {
    console.log(`- Start listining on Port ${Port}`);
})