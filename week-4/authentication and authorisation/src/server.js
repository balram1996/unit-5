const express = require("express");
const connect = require("./configs/db.js");
const {register,login}  = require("./controllers/user.controller");

const app = express();
app.use(express.json());

app.post("/register",register)
app.post("/login",login)

app.listen(2345, async function(){
    await connect()
    console.log("listning on the port 2345")
});