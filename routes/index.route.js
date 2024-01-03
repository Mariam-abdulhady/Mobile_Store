const authRoutes=require("./auth.route")
const app=require("express").Router()
app.use("/auth",authRoutes)
module.exports=app