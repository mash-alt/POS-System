// filepath: c:\Users\zach\Documents\Midterm Datastruct\POS System\schema\product.js
const mongoose = require('mongoose');

// Define Product Schema
const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  barcode: {
    type: String,
    required: [true, 'Barcode is required'],
    unique: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;