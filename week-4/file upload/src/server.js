//const mongoose = require("mongoose");
const express = require("express");
const connect = require("./configs/db.js");
const productController = require("./controllers/product.controller")

const app = express();
app.use(express.json());
app.use("/products",productController)

app.listen(2345, async function(){
    await connect()
    console.log("listning on the port 2345")
});
