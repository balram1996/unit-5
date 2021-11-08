const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true}
},
{
    versionKey:false,
    timestamps:true
})

userSchema.pre("save" , (next)=>{ //this save happens in two condition when we updating and when we creating
if(!this.isModified("password")){
    return next();
}
const hash = bcrypt.hashSync('this.password', 8);
this.password = hash;
return next();
})
module.exports = mongoose.model("user", userSchema);