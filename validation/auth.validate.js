const joi=require('joi')
const passwordExp=/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/
module.exports={
    registerationSchema:joi.object().keys({
        name:joi.string().min(3).max(30).required().messages({
            "String.required":"Name is required",
           
        }),
        email:joi.string().email().min(3).max(30).required().messages({
            "any.required":"email is required",
            "string.email":"Invalid Email"
        }),
       password:joi.string().regex(passwordExp).required().messages({
            "any.required":"password is required"
        }),
        address:joi.string().min(3).max(30).required().messages({
            "any.required":" address is required"
        }),
        nationalId:joi.number().integer().min(10000000000000).max(99999999999999).required().messages({
            "any.required":"nationalId is required",
           "number.min":"National ID must be equal 14 digit",
           "number.max":"National ID must be equal 14 digit",
        }),
        phone:joi.string().regex(/^01\d{9}$/).min(10).max(12).required().messages({
            "any.required":"phone is required",
           
        }),
        store:joi.string().required().messages({
            "any.required":"store is required"
        }),
     
    }),
    loginSchema:joi.object().keys({
        email:joi.string().email().min(3).max(30).required().messages({
            "any.required":"email is required",
            "string.email":"Invalid Email"
        }),
       password:joi.string().required().messages({
            "any.required":"password is required"
        }),
    })

}