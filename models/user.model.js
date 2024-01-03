const mongoose=require("mongoose")
const Schema=mongoose.Schema
const UserSchema=new Schema({
    name:{type:String,required:true,trim:true},
   email:{type:String,required:true,trim:true},
   password:{type:String,required:true,trim:true},
   address:{type:String,required:true,trim:true},
  nationalId:{type:String,required:true,trim:true},
  phone:{type:String,required:true,trim:true}
})
const User=mongoose.model('user',UserSchema)
module.exports=User