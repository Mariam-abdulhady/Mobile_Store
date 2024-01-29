const mongoose=require('mongoose')
const Schema=mongoose.Schema
const fs= require('fs')
const productSchema=new Schema({
name:{type:String,required:true,tirme:true},
category:{type:String,required:true,tirme:true},
price:{type:Number,required:true,tirme:true},


})

const  product =mongoose.model("product",productSchema)
module.exports= product