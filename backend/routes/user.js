const sendEmail = require('../utils/email');
const Token = require('../models/token');
const Service = require('../models/service');
const User=require('../models/user');
const crypto = import('crypto');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const verify = require('../middleware/verifyToken');
// const { session } = require('passport');

router.post('/register', async (req, res) => {
  try {
    const serviceData = await Service.findOne({ email: req.body.email });
    const userData = await User.findOne({ email: req.body.email });
    if(serviceData){
      return res.status(400).json({msg:'Service Provider with given email already exist!'});
    }
    if (userData && userData.verified == true)
      return res.status(400).json({msg:'User with given email already exist!'});

    if (userData && userData.verified== false)
      return res
        .status(400)
        .json({msg:'verification email has been already sent to your email'});

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

   const user = await new User({
      username:req.body.username,
      email: req.body.email,
      password: hashPassword,
    }).save();

    let token = await new Token({
      userId: user._id,
      token: (await crypto).randomBytes(32).toString('hex'),
      expireIn:new Date().getTime()+ 300*1000
    }).save();
    await sendEmail(user.email, `<a href='${process.env.BASE_URL}/user/verify/${user.id}/${token.token}'>verify here</a>`);

    res.status(200).json({msg:'An Email sent to your account please verify'});
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/verify/:id/:token', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).json({msg:'Invalid link'});

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).json({msg:'Invalid link'});
    if (token){
      const currentTime= new Date().getTime()
      const diff=token.expireIn-currentTime
      if(diff<0){
        res.status(400).json({msg:'link expired register again'})
        await User.findByIdAndRemove(user._id);

      }
    }

    await user.updateOne({ _id:user._id, verified:true });
    await Token.findByIdAndRemove(token._id);
    
     res.status(200).json({msg:'email verified sucessfully'});
    // res.redirect('http://localhost:5173/loginuser')
  } catch (error) {
  
    res.status(400).json({msg:'An error occured'});
  }
});

router.post('/login', async (req, res) => {
    //checking email exists
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json({msg:' doesnot exist please sign in'});
  
    //check verified user or not
    if (user && user.verified == false)
      return res.status(400).json({msg:'verify before login!'});
  
    //password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({msg:'invalid email or password'});
  
    //create and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  
  //   res.cookie('token', token,{
  //     maxAge: 1000 * 60 * 60 * 24* 7, // would expire after 1 week5
  //     httpOnly: true, // The cookie only accessible by the web server
  //     sameSite:'none',
  //     secure:true
  // });
  res.send({token,role:user.role});
  });
  
  router.get('/home', verify, (req, res) => {
    res.send(req.user);
  });

module.exports = router;
