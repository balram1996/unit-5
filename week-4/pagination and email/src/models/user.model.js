//1. creating the schema;
//2. model from the schema;

const mongoose = require("mongoose");

const userSchmema = new mongoose.Schema({
    first_name:{type:String , required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
    mobile:{type:Number,required:false}
},
{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("user", userSchmema)