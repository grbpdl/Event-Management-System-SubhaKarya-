const express = require('express')
const router=express.Router()
const Product=require('../models/product')
const cloudinary=require('../utils/cloudinary')
const {multerUploads,dataUri} = require('../middleware/multer')

router.post('/add',multerUploads,async (req,res)=>{
    const {name,availaible,category,location,description,price}=req.body
    try{
        if(req.file){
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            const dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            //console.log(dataURI)
           const uploadres= await cloudinary.uploader.upload(dataURI,{
                upload_preset:"product"
            })
            if(uploadres){
         const product = new Product({
            name,
            availaible,
            category,
            location,
            description,
            price,
            image:uploadres
         })
         const savedProduct=await product.save()
         res.status(200).send(savedProduct)
            }
        }
    }
    catch(err){
        res.status(500).json({msg:err})
    }
})

router.get('/get',async (req,res)=>{
    try{
        const product=await Product.find()
        res.status(200).send(product)
    }catch(err){
        res.status(500).json({msg:err})
    }
})

module.exports=router