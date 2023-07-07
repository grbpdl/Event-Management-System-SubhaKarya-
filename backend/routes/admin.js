
const express = require('express');
const router = express.Router();
require('dotenv').config();




router.post('/login', async (req, res) => {
    const { email,password } = req.body;
    //checking email exists
    if (process.env.ADMIN_EMAIL!=email || process.env.ADMIN_PASS!=password) return res.status(400).json({msg:'invalid email or password'});
  
   else return res.status(200).json({msg:'sucessful login by admin'});
  
   
  });
  

  

module.exports = router;
