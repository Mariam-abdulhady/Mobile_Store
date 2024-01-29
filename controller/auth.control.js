const User = require("../models/user.model")
const UserModel=require("../models/user.model")
const asyncHandler=require("express-async-handler")
const generateToken=require('../services/jwt.service')
const authController={
register:asyncHandler(async(req,res)=>{
    const existUser=await User.findOne({email:req.body.email})
    if(existUser){
        return res.status(409).send({message:"Email is already Taken"})
    }
    let newUser=new User(req.body)
    await  newUser.save()
    res.status(201).send({message:"Acount Created !!"})  
}),
login:asyncHandler(async(req,res)=>{
    // console.log(req.body);
    const data= req.body
    let user=await User.findOne({email:data.email})
    if(!user){
    return  res.status(400).send({message:"Invalied Email or Password"})  
    }
 let validPass = await user.comparePassword(data.password)
 if(!validPass){
    return  res.status(400).send({message:"Invalied Email or Password"})
 }
// console.log(validPass);
let token=generateToken(user._id)
const cookiesOptions={
    expire:new Date(
        Date.now()+7*24*60*60*10000
    )
}
res.cookie("access-token",`Barear ${token}` ,cookiesOptions)
    res.send({token})
})

}
module.exports=authController