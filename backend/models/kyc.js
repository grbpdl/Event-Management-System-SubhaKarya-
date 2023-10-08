const mongoose = require("mongoose");

const kycSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please enter first Name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please Enter last name"],
  },
  dateOfBirth: {
    type: Date,
    required:true,
  },
  streetAddress: {
    type: String,
    required: [true, "Please Enter adress"],
  },
  city: {
    type: String,
    required: [true, "Please Enter city"],
  },
  state: {
    type: String,
    required: [true, "Please Enter state"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ], 
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  submitedAt: {
    type: Date,
    default: Date.now,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

 const Kyc= mongoose.model("Kyc", kycSchema);
 module.exports= Kyc;
