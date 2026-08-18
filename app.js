const express = require('express'); // Import the Express library to create a web server and handle routing
const app = express();

const dotenv = require('dotenv'); // Import the dotenv library to load environment variables from a .env file
const connectDB = require('./Config/databaseconfig'); // Import the database connection function from the configuration file

const Productroute = require('./Routes/ProductRoute'); // Import the product routes to handle product-related API endpoints
const Userroute = require('./Routes/UserRoute'); // Import the user routes to handle user-related API endpoints

// Load environment variables from .env file
dotenv.config();

connectDB(); // Connect to the database

app.use(express.json()); // Middleware to parse JSON request bodies

app.use('/product', Productroute); // Use the product routes for any requests to /product
app.use('/user', Userroute); // Use the user routes for any requests to /user

// Start the server and listen on the specified port (from environment variables or default to 8000)
app.listen(process.env.PORT || 8000, () => { 
console.log(`Server is running on port ${process.env.PORT || 8000}`);
});