const express = require("express");
const uploadFile = require("../middleware/fileupload");
const User = require("../models/user.model");
const router = express.Router();
const app = express();
const bcrypt = require("bcrypt")

//, uploadFile.any("userImage") ,
// const filePath = req.files.map((file)=>file.path);

//register user
router.post("/register" ,uploadFile.any("userImage") , async function(req,res){
    const filePath = req.files.map((file)=>file.path);
    try{

        // generate password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
            profile_photo_url:req.path.filePath
        });
        return res.status(200).send(user)
    } catch(err){
        return res.status(500).send("something wentn wrong")
    }
});

//login user
router.post("/login" , async function(req,res){
    try{
        const user = await User.findOne({
            email:req.body.email,
           
        });
        if(!user){
            return res.status(403).send("user not found")
        } 

        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!validPassword){
            return res.status(400).send("invalid password")
        }
        return res.status(200).send(user)
    } catch(err){
        return res.status(500).send("something went wrong")
    }
});

module.exports = router;