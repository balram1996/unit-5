const express = require("express");
const connect = require("./configs/db")
const app = express();

app.listen(2345, async function(){
    await connect()
    console.log("listning on the port 2345")
});