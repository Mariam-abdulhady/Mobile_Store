const asyncHandler=require('express-async-handler')
const Store=require('../models/store.model')
const storeControle={
addStore:asyncHandler(async(req,res)=>{
    let newStore= new Store(req.body)
    let file=req.file
if(file){
    let  fileName="/api/images/store"+file.filename
    newStore.logo=fileName
}
await newStore.save()
    res.send({message:"Store Created !!"})
}),
deleteStore :asyncHandler(async(req,res)=>{
    await Store.findByIdAndDelete(req.params.id)
    res.send({messsage :"Store Deleted !!"})
})
}
module.exports=storeControle