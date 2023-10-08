const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default:'user',
    required: true,
  },
  kycverified: {
    type: Boolean,
    default: false,
  },
  todolist: [{
    type: String,
  
}],
  

});

const user = mongoose.model('user', userSchema);

module.exports = user;
