const Token = require('../models/token');
const User = require('../models/user');
const otp=require('../models/otp')
const crypto = import('crypto');
const sendEmail = require('../utils/email');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const bcrypt = require('bcryptjs');

router.post('/reset', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }) 
    if(!user) return res.status(400).json({msg:'email doesnt exist'})
     
    const otpCode=Math.floor((Math.random()*10000)+1)
     const otpData=new otp({
      email:req.body.email,
      code:otpCode,
      expireIn:new Date().getTime()+ 300*1000
     })
     await otpData.save()
    if(user)
    await sendEmail(user.email, 'reset password', String(otpCode));

    res.status(200).json({msg:'code has been sent to your email'});
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

router.post('/update', async (req, res) => {
    try {
      const data = await otp.findOne({ email: req.body.email,code:req.body.code })
      if(!data) return res.status(400).json({msg:'invalid email or otp'})
  
      if (data){
        const currentTime= new Date().getTime()
        const diff=data.expireIn-currentTime
        if(diff<0){
          res.status(400).json({msg:'token exired'})
        }
      }
        //hash password
        const user=await User.findOne({email:req.body.email}) 
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      if(user){
        user.password=hashPassword
        await user.save()
      }
       res.status(200).json({msg:'password changed successfully'})
       const otpId=data._id
       await otp.findByIdAndRemove(otpId);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  });

module.exports = router;
