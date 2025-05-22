const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// GET product by barcode
router.get('/:barcode', productController.getProductByBarcode);

// Additional routes can be added here
// For example:
// router.post('/', productController.createProduct);
// router.put('/:id', productController.updateProduct);
// router.delete('/:id', productController.deleteProduct);
// router.get('/', productController.getAllProducts);

module.exports = router;
