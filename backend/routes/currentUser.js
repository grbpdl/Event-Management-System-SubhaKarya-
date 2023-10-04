const express = require('express');
const router = express.Router();
const User=require('../models/user')
//logout user and clear session
router.get('/',async(req,res)=>{
    const { token } = req.cookies;
if(token){
    res.send(true)
    return
}
    res.send(false)
})


module.exports = router;

