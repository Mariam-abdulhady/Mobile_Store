const app=require('express').Router()
const userSchema=require('../models/store.model')
const storeCtl=require('../controller/store.controle')
const{authorizeAdmin}=require('../services/authenticate.service')
const {imageUpload}=require("../services/file-uploads")
const {validate, validateParamsId}=require("../services/validate.service")
const{addStore}=require("../validation/store.validate")
app.post("/add-store",imageUpload.single("logo"),authorizeAdmin,validate(addStore),storeCtl.addStore)
app.delete("/:id",authorizeAdmin,validateParamsId,storeCtl.deleteStore)
module.exports=app