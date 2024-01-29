const { required } = require("joi")
const User=require("../models/user.model")
const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const authenticate= asyncHandler(async (req,res,next)=>{
   let  token=req?.cookies["access-token"]
   if(!token){
      return res.status(401).send({
         message:"Token is required"
      })
   }
   token=token?.split(" ")[1]
   let secretKey=process.env.SECRET_TOKEN
   let decode=jwt.verify(token,secretKey)
   if(!decode){
      return res.status(401).send({
         message:"Token is required"
      })
   }
   let user=await User.findById(decode.id)
   //console.log(user);
   req.user=user
   next()

   })

const adminAuth=(req,res,next)=>{
authenticate(req,res,()=>{
   let user = req.user
   if(!user.isAdmin){
       return res.status(401).send({
           message:"Route is only for admins !!"
       })
   }else{
      next()
   }
   console.log("Admin",user);
})
}
module.exports={
   authorizeUser :authenticate,
   authorizeAdmin:adminAuth
}