const express = require('express');
const router = express.Router();
const User=require('../models/user')
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
//logout user and clear session
router.get('/',async(req,res)=>{
    const { token } = req.cookies;
    if (!token) {
        res.send(false)
      }
      else{
      const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
    
      req.user = await User.findById(decodedData.id);
      res.send(req.user.role)

    }
})


module.exports = router;

