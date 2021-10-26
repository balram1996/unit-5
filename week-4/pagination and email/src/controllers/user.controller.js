const express = require("express");
const router = express.Router();

router.post("/", async(req,res)=>{
    try{
        const user = User.create(req.body);

        return res.status(200).json({user:user})
    }catch(err){
       return res.status(400).send(err.message)
    }
    
});

router.get("/",async(req,res)=>{
    try{
      const users = await User.find().lean().exac();
      return res.status(200).json({user:user});
    }catch(err){
       return res.status(400).json({status:"failed",message:err.message})
    }
})

module.exports = router;