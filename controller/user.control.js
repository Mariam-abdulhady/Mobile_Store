const asyncHandler=require("express-async-handler")
const User = require("../models/user.model")
const userControl={
    getUserData:asyncHandler(async(req,res)=>{
   let data=await User.findById(req.user._id).populate("store")
   res.send(data)
    }),
    getAllUsers:asyncHandler(async(req,res)=>{
        
        let users=await User.find()
        res.send(users)
    }),
    deleteUser:asyncHandler(async(req,res)=>{
    let id=req.params.id
    
    await User.findByIdAndDelete(id)
    res.send()
    }),
    updateUser:asyncHandler(async(req,res)=>{
        let user=req.body
         let newData= await User.findByIdAndUpdate(user._id,req.body,{new:true})
res.send(newData)
    }),
    addUser:asyncHandler(async(req,res)=>{
        let user=new User(req.body)
        await user.save()
        res.send()
    })
}

module.exports=userControl