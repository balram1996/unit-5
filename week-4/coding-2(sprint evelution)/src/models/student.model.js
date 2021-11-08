const express = require("express");
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    roll_number:{type:Number , required:true},
    userId :{type:Number , required:true},
    batch:{type:String , required:true},
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("users" , StudentSchema);