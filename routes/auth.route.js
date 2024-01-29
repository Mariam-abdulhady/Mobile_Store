
const app=require('express').Router()
const authControl=require("../controller/auth.control")
const{registerationSchema,loginSchema}=require("../validation/auth.validate")
const {validate}=require("../services/validate.service")
app.post("/register",validate(registerationSchema),authControl.register)
app.post("/login",validate(loginSchema),authControl.login)
module.exports=app