const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  availaible: {
    type: Boolean,
    required: true,
    default:true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
