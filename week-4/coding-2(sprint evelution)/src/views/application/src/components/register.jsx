import React from 'react'
import "./style.css";
const axios = require("axios");

export default function Register() {

 axios.get("http://localhost:2345/users")
 .then(function(res){
     const data = res.users;
 })
 .catch(function(err){
     const error = err;
 })
 const handleLogin = async(req,res,data)=>{
     const user = await data.findOne({req.param.email})
 }
    return (
        <>
        <div className="container">
            
            <h1>Registration form</h1>
            <input placeholder="Enter email id"></input>
            <hr/>  
            <input placeholder="Password"></input>
            <hr/>
            <button onClick={handleLogin}>Login</button>
        </div>
        </>
    )
}
