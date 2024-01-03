
const app=require('express').Router()
const authControl=require("../controller/auth.control")
app.post("/register",authControl.register)
module.exports=app