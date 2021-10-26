const express = require("express");
const router = express.Router();

router.post("/single",function(req,res){
   
    return res.status(200).send("single")
});

router.post("/multiple",function(req,res){
   
    return res.status(200).send("multiple")
});

module.exports = router;