const app=require('express').Router()
const orderCtl=require("../controller/order.control")
const{}=require("../validation/auth.validate")
const {validate}=require("../services/validate.service")
const{authorizeUser,authorizeAdmin}=require("../services/authenticate.service")
app.post("/add-order",authorizeUser,orderCtl.addOrder)
app.get("/all-order",authorizeUser,orderCtl.getAllOrder)
module.exports=app