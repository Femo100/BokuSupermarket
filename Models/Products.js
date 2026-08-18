const mongoose = require('mongoose'); // Import the mongoose library to interact with MongoDB
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        //required: true
    },
    
},
    {timestamps: true} // This option adds createdAt and updatedAt fields to the schema
);
//Create Model from the schema
const Product = mongoose.model('Product', productSchema); // Create a Mongoose model named 'Product' using the defined schema

module.exports = Product; //export the Product model so it can be used in other parts of the application
