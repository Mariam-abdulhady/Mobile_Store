const mongoose=require('mongoose')

const Schema=mongoose.Schema
const fs= require('fs')
const orderSchema=new Schema({
user:{type:mongoose.Types.ObjectId,required:true,ref:"User"},
product:{type:mongoose.Types.ObjectId,required:true,ref:"product"},
})

const order= mongoose.model("Order",orderSchema)
module.exports=order