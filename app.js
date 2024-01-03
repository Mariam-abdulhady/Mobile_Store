const { error } = require('console')
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose=require('mongoose')
const routes=require('./routes/index.route')
const morgan=require('morgan')
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
app.use(morgan("dev"))
app.use(express.json())
app.use("/api",routes)
app.all("*",(req,res)=>{
    res.status(404).send({message:"Invalid Route"})
})



// app.get('/', (req, res) => res.send('Hello World!'))

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.json({ success: true })
// })
const PORT =process.env.PORT|| 3000

app.listen(PORT, dbconnection(),() => console.log(`server is running ${PORT}`))