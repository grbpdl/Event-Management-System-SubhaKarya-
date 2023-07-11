const cloudinaryModule=require('cloudinary')
const cloudinary=cloudinaryModule.v2
require('dotenv').config()


cloudinary.config({ 
    cloud_name: "dazmdsylh", 
    api_key: "977257839637222", 
    api_secret:"EP-ivwvMLGrFeHFjulIl-OHOf9g"
  });

module.exports=cloudinary

