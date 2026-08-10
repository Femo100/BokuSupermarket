const express = require('express');
const app = express();

const dotenv = require('dotenv');
const connectDB = require('./Config/databaseconfig');

const Productroute = require('./Routes/ProductRoute');
const Userroute = require('./Routes/UserRoute');

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

app.use(express.json()); // Middleware to parse JSON request bodies


app.use('/product', Productroute); // Use the product routes for any requests to /product
app.use('/user', Userroute); // Use the user routes for any requests to /user

// Start the server and listen on port 8000
app.listen(process.env.PORT || 8000, () => {
console.log(`Server is running on port ${process.env.PORT || 8000}`);
});