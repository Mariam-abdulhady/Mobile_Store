
const app=require('express').Router()
const productCtl=require("../controller/product.control")
const{}=require("../validation/auth.validate")
const {validate}=require("../services/validate.service")
const{authorizeUser,authorizeAdmin}=require("../services/authenticate.service")
app.post("/add-product",authorizeAdmin,productCtl.addProduct)
app.get("/all=product",authorizeUser,productCtl.getAllProduct)
module.exports=app