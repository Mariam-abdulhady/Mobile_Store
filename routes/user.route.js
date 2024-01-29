const app=require('express').Router()
const{authorizeUser,authorizeAdmin}=require("../services/authenticate.service")
const userControl=require("../controller/user.control")
const {validate, validateParamsId}=require("../services/validate.service")
app.get("/data",authorizeUser,userControl.getUserData)
app.get("/data/all",authorizeAdmin,userControl.getAllUsers)
app.delete("/:id",authorizeAdmin,validateParamsId,userControl.deleteUser)
app.patch("/",authorizeUser,userControl.updateUser)
app.post("/new-user",authorizeAdmin,userControl.addUser)



module.exports=app