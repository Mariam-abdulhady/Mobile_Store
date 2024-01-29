const { error } = require('console')
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose=require('mongoose')
const routes=require('./routes/index.route')
const morgan=require('morgan')//جزئية الloggin
const cookieParser=require('cookie-parser')
//database connection
function dbconnection(){
    const url=process.env.DB_URL
    mongoose.connect(url).then(()=>{
        console.log("DB connected !!");
    }).catch((error)=>{
        console.log(error)
        console.log("db not connected")
    })
}
// const crypto=require('crypto')
// function generateAccessToken(){
// let secret=crypto.randomBytes(32).toString("hex")
// console.log(secret);

// }
// console.log(SECRET_TOKEN);
// generateAccessToken()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use("/api",routes)
app.use("/api/images",express.static("./uploads"))
app.all("*",(req,res)=>{
    res.status(404).send({message:"Invalid Route"})
})

const PORT =process.env.PORT|| 3000

app.listen(PORT, dbconnection(),() => console.log(`server is running ${PORT}`))