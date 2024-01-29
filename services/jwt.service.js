const jwt=require('jsonwebtoken')
const generateToken=(payload)=>{
 return jwt.sign({id:payload},process.env.SECRET_TOKEN,{
    expiresIn:"7d"
 })
}
module.exports=generateToken