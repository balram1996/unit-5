const express = require("express");
const mogoose = require("mongoose");
const connect = require("./configs/db.js");

const userController = require("./controllers/user.controller");

const app = express();
app.use(express.json());

app.use("/users",userController)

app.listen(8000, async function(){
    await connect()
   console.log("listning of port 8000");
});



