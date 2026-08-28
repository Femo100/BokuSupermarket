const express = require('express'); // Import the Express library to create a web server and handle routing
//import authentication middleware
const { protect } = require('../Middleware/Auth');
const upload = require('../Middleware/upload');

//import authorization middleware
const { authorize } = require('../Middleware/role');

const router = express.Router(); // Create a new router instance to define product-related routes

//import the product controller
const productController = require('../Controllers/ProductController');

//define the routes
router.post('/createProduct', protect, productController.createProduct);

router.post('/createProductWithImage', protect, productController.createProductWithImage);

router.put('/updateProduct/:id', protect, authorize('storekeeper'), productController.updateProduct);
router.get('/getProductById/:id', protect, productController.getProductById);
router.get('/getAllProducts', protect, productController.getAllProducts);

//export the router to be used in other files
module.exports = router;




// const express = require('express'); // Import the Express library to create a web server and handle routing

// const { protect } = require('../Middleware/Auth'); // Import the protect middleware to secure routes
// // const Product = require('../Models/Products'); // Import the Product model to interact with the products collection in the database

// const upload = require('../Middleware/upload'); // Import the upload middleware to handle file uploads (e.g., product images)

// // import authorization middleware to check if the user has the required role to access a specific route
// const { authorizeRole } = require('../Middleware/role');

// // Import the product controller
// const productController = require('../Controllers/ProductController');

// const router = express.Router(); // Create a new router instance to define product-related routes


// // Define routes for product operations
// router.post('/createProduct', protect, authorizeRole('superadmin'), productController.createProduct);

// router.post('/createProductWithImage', protect, authorizeRole('superadmin'), upload.single('image'), productController.createProductWithImage);

// router.put('/updateProduct/:id', protect, authorizeRole('superadmin'), productController.updateProduct);

// router.get('/getProductById/:id', protect, productController.getProductById); 

// router.get('/getAllProducts', protect, productController.getAllProducts);

// router.get('/searchProductsByName', protect, productController.searchProductsByName);

// router.get('/searchProductsBySize', protect, productController.searchProductsBySize);

// router.delete('/deleteProduct/:id', protect, authorizeRole('superadmin'), productController.deleteProduct);   

// // Export the router to be used in the main application
// module.exports = router; 