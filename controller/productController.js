const Product = require('../schema/product');

// Get a product by barcode
exports.getProductByBarcode = async (req, res) => {
  try {
    const barcode = req.params.barcode;
    
    const product = await Product.findOne({ barcode });
    
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Additional controller methods can be added here
// For example: createProduct, updateProduct, deleteProduct, getAllProducts, etc.
