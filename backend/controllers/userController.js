const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/user");
const Kyc = require("../models/kyc");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary"); 





// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});



// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});




// Get all users(admin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get single user (admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});



// Delete User --Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  
  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});


//add into todolist
exports.updateTodo = catchAsyncErrors(async (req, res, next) => {
  
  const user = await User.findById(req.user.id);


  res.status(200).json({
    success: true,
  });
});

//delete todolist
exports.deleteTodo = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  //pop ith element as provided by req.params.id
  list=user.todolist.splice(req.params.id-1,1)

  

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  
  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

//savekyc
exports.createKyc = catchAsyncErrors(async (req, res, next) => {

  if(req.user.kycverified===true)
  {
    res.status(200).json({
      success: true,
      message: " Already Verified",
    });
  }



  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];
  
  
  for (let i = 0; i < images.length; i++) {
   
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "kyc",
    });
 
    if(result.public_id && result.secure_url)
    {
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
    
  }
  }


  req.body.images = imagesLinks;
req.body.user=req.user._id;
const role=req.user.role;


  const kyc = await Kyc.create(req.body);
  res.status(200).json({
    success: true,
    role,
    message: " KYC Submitted Successfully",
  });
 
});

//get alll kyc

exports.getAllKyc = catchAsyncErrors(async (req, res, next) => {
  const kycs = await Kyc.find({verified:false});

  res.status(200).json({
    success: true,
    kycs,
  });

});

//verify kyc
exports.verifyKyc = catchAsyncErrors(async (req, res, next) => {

  const user = await User.findOne({ _id: req.body.userid });
  const kyc = await Kyc.findOne({ _id: req.body.kycid });

  if(user && kyc ){
  
    await user.updateOne({ _id:user._id, kycverified:true });
    await kyc.updateOne({ _id:kyc._id, verified:true });


  res.status(200).json({
    success: true,
    message:"verified sucessfully"
  });
}
else{
  res.status(404).json({
    success: false,
    message:"KYC NOT FOUND"
  });
}

});

