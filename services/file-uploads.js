const multer=require('multer')
const path=require('path')
const {v4 : uuidv4} =require("uuid")
const storeStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/store");
    },
    filename: function (req, file, cb) {
      if(file){
          let fileExt = path.extname(file.originalname)
          cb(null ,uuidv4() + fileExt )
      }else{
          cb(null ,false)
      }
    },
  });
  
  const imageUpload= multer({
      storage: storeStorage,
      fileFilter:function (req,file , cb){
          const fileTypes = /jpeg|jpg|png|gif|svg/
          let validFile =  fileTypes.test(path.extname(file.originalname))
  
          if(file.mimetype.startsWith("image") &&validFile){
              cb(null , true)
         }else{
              cb("Unsupported file format ", false)
         }
      },
      limits:{fileSize : 1024* 1024* 5}
  })
  
  module.exports = { imageUpload}