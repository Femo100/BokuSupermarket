const express = require('express'); // Import the Express library to create a router for handling user-related routes
const router = express.Router(); // Create a new router instance to define user-related route

//import the user controller
const userController = require('../Controllers/UserController');

//define the routes
router.post('/createuser', userController.createUser);
router.post('/loginuser', userController.loginUser);

//export the router to be used in other files
module.exports = router;