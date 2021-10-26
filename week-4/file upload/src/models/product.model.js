const express = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name:{type:String,required:true},
    price:{type:Number,required:true},
    image_url:[{type:String,required:true}]
},
{
    versionkey:false,
    timestamp:true,
})

module.exports = mongoose.model("products",productSchema)