const asyncHandler=require('express-async-handler')
const Order=require('../models/order.model')
const mongoose=require("mongoose")
const OrderControle={
addOrder:asyncHandler(async(req,res)=>{
    let data=req.body
    if(!mongoose.isValidObjectId(data.product)){
return res.status(400).send({
    message:"user id and product id must be valied objectid"
})
    }
    let newOrder= new Order({data,user:req.user._id})
await newOrder.save()
    res.send({message:"order Created !!"})
}),
getAllOrder:asyncHandler(async(req,res)=>{
    let data=await Order.find().populate("user").populate("product")
res.send(data)


})
}
module.exports=OrderControle