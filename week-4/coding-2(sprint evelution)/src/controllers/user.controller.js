const express = require("express");
const uploadFile = require("../middleware/fileupload");
const User = require("../models/user.model");
const router = express.Router();
const app = express();

router.post("/user" , uploadFile.any("userImage") , async function(req,res){
    const filePath = req.files.map((file)=>file.path);

    try{
        const user = await User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profile_photo_url:req.file.path
        });
        return res.status(200).send(user)
    } catch(err){
        return res.status(500).send("something wentn wrong")
    }
});

module.exports = router;