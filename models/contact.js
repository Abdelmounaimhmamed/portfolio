const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    Firstname : {
        type : String ,
        required : true 
    },Lastname : {
        type : String ,
        required : true
    },
    email : {
        type :String ,
        required : true  
    },
    own : {
        type : String ,
        required : true
    }
},{
    timestamps : true
});

module.exports = mongoose.model("contact" , schema);