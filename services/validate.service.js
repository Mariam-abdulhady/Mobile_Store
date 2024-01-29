const mongoose=require('mongoose')
const validate=(schema)=>{
return(req,res,next)=>{
    // console.log(req.body);
    // res.send()
    const{error}=schema.validate(req.body,{abortEarly:false})
if(error){
let errMasg=error.details.map((err)=>{
   return{message:err.message,path:err.path} 
})
 return res.status(400).send({errMasg})
}
next()
    console.log(error);
}
}
const validateParamsId=(req,res,next)=>{
let id =req.params.id
if(!id||mongoose.isValidObjectId(id)){
return res.status(400).send({
    message:"Object Id is required"
})
}
next()
}

module.exports={validate,validateParamsId}