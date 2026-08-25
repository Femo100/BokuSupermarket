const mongoose = require('mongoose'); // Import the mongoose library to interact with MongoDB
const productSchema = new mongoose.Schema({
    name: {
        type: String,   
        required: true
    },
    size: {
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
    IsAvailable: {
        type: Boolean,
        default: true
    },
    
        color: {
            type: String,
            

    },
    image: {
        type: String,
        required: false
    }
    
},
{timestamps: true} // Date created and updated at

);  

//create model from schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product; //export the model to be used in other files