// filepath: c:\Users\zach\Documents\Midterm Datastruct\POS System\test\populateProducts.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../schema/product');

// Load environment variables
dotenv.config({ path: '../.env' });

// Sample product data
const sampleProducts = [
  {
    productname: 'Apple iPhone 15',
    price: 999.99,
    barcode: '123456789101'
  },
  {
    productname: 'Samsung Galaxy S24',
    price: 899.99,
    barcode: '123456789102'
  },
  {
    productname: 'Sony PlayStation 5',
    price: 499.99,
    barcode: '123456789103'
  },
  {
    productname: 'MacBook Pro 16"',
    price: 2499.99,
    barcode: '123456789104'
  },
  {
    productname: 'Bose QuietComfort Headphones',
    price: 349.99,
    barcode: '123456789105'
  },
  {
    productname: 'Nintendo Switch',
    price: 299.99,
    barcode: '123456789106'
  },
  {
    productname: 'iPad Pro 12.9"',
    price: 1099.99,
    barcode: '123456789107'
  },
  {
    productname: 'Canon EOS R5',
    price: 3899.99,
    barcode: '123456789108'
  },
  {
    productname: 'Dyson V15 Vacuum',
    price: 699.99,
    barcode: '123456789109'
  },
  {
    productname: 'LG 65" OLED TV',
    price: 1999.99,
    barcode: '123456789110'
  }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pos_system')
  .then(async () => {
    console.log('MongoDB Connected...');
    
    try {
      // Delete existing products
      await Product.deleteMany({});
      console.log('Existing products deleted');
      
      // Insert new products
      const products = await Product.insertMany(sampleProducts);
      console.log(`${products.length} products inserted successfully`);
      
      // Display the inserted products
      console.log('Products inserted:');
      products.forEach(product => {
        console.log(`- ${product.productname} (${product.barcode}) - $${product.price}`);
      });
      
      console.log('Database seeding completed!');
    } catch (error) {
      console.error('Error seeding database:', error.message);
    } finally {
      // Close the database connection
      mongoose.connection.close();
      console.log('Database connection closed');
    }
  })
  .catch(err => {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  });