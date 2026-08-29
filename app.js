const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file


app.use(express.json()); //middleware to parse JSON request bodies

const productRoute = require('./Routes/ProductRoute');
const userRoute = require('./Routes/UserRoute');


app.use('/products', productRoute); //use the product route for all requests starting with /products
app.use('/users', userRoute); //use the user route for all requests starting with /users



const connectDB = require('./Config/databaseConfig'); // Import the database connection function from the configuration file
connectDB(); // Connect to MongoDB

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


// const express = require('express'); // Import the Express library to create a web server and handle routing
// const app = express();

// const dotenv = require('dotenv'); // Import the dotenv library to load environment variables from a .env file
// const connectDB = require('./Config/databaseconfig'); // Import the database connection function from the configuration file

// app.use(express.json()); // Middleware to parse JSON request bodies

// // const multer = require('multer'); // Import multer for handling file uploads

// // Load environment variables from .env file
// dotenv.config();

// connectDB(); // Connect to the database using the imported function

// // const multer = require('multer'); // Import multer for handling file uploads
// // app.use(express.json()); // Middleware to parse JSON request bodies

// const Productroute = require('./Routes/ProductRoute'); // Import the product routes to handle product-related API endpoints
// const Userroute = require('./Routes/UserRoute'); // Import the user routes to handle user-related API endpoints

// app.use('/product', Productroute); // Use the product routes for any requests to /product
// app.use('/user', Userroute); // Use the user routes for any requests to /user

// // Start the server and listen on the specified port (from environment variables or default to 8000)
// app.listen(process.env.PORT || 8000, () => { 
// console.log(`Server is running on port ${process.env.PORT || 8000}`);
// });
