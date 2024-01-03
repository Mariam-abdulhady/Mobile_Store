const authController={
register:(req,res)=>{
    res.send(req.body)
    console.log(req.body);
}
}
module.exports=authController