const joi=require('joi')
module.exports={
   addStore:joi.object().keys({
       name:joi.string().min(3).max(30).required().messages({
            "String.required":"Name is required",
           
        }),
     
        address:joi.string().min(3).max(30).required().messages({
            "any.required":" address is required"
        }),
      
        phone:joi.string().regex(/^01\d{9}$/).min(10).max(12).required().messages({
            "any.required":"phone is required",
           
        }),
     
    }),
    
     
    }

