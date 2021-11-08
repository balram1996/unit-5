const mongoose = require("mongoose");
const connect = require("./configs/db");
const express = require("express");
const UserContrller = require("./controllers/user.controller");
const app = express();

app.use("/user" , UserContrller);

app.listen(2345, async function(){
    await connect()
    console.log("Listning on post 2345")
});
