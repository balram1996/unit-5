const User = require("../models/user.model");
const express = require("express");
const router = express.Router();
const app = express();


router.post("/" , async function(req,res){
    try{
        const user = await User.create({
            title:req.body.name,
            instructor :req.body.instructor,
            batch:req.body.batch,
            
        });
        return res.status(200).send(user)
    } catch(err){
        return res.status(500).send("something went wrong")
    }
});


module.exports = router;