const mongoose=require('mongoose')
const Schema=mongoose.Schema
const fs= require('fs')
const storeSchema=new Schema({
name:{type:String,required:true,tirme:true},
address:{type:String,required:true,tirme:true},
phone:{type:String,required:true,tirme:true},
logo:{type:String,tirme:true,default:"/api/images/store/default.png"},

})
storeSchema.pre("findOneAndDelete",async function(next){
    const document =await this.model.findOne(this.getQuery())
      
        if(document&&document.logo){
            const logo=document.logo
            const imgName=logo.split("/")[4]
            fs.unlink("./uploads/store"+imgName,(err)=>{
if(err){
    console.log(err.message);
}else{
    console.log("image Deleted");
}
            })
    }
next()

})
const Store=mongoose.model("Store",storeSchema)
module.exports=Store