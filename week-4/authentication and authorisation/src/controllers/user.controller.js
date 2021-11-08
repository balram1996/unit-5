const jwt = require("jsonwebtoken")
const User = require("../models/user.model");

const newToken = (user)=>{
    return jwt.sign({ user: user }, );
}

const register = async(req,res)=>{
    
    try{
    //first check if the user is exist?
      let user = await User.find({email:req.body.email}).lean().exac();
    //if user exist throw an error
        if(user){
            return res.status(400).json({status:error, message:"User already exist"})
        }
    //otherwise, create an user and then hash the password
        user = await User.create(req.body);

    //create a token, 
       const token = newToken(user)
    //there is two method of authentication one is statefull(server has memory who is the
    // user and store the data into session), second, stateless(memory less , token based every time it will check the user)
 

    //then we need to return the token and the user information to the frontend 
    } catch(err){

    }
    
    
}

const login =(req,res)=>{
    return res.send("login")
}

module.exports = {register,login};