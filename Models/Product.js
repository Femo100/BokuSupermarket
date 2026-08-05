const mongoose = require('mongoose');
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
    timestamps: true // This option adds createdAt and updatedAt fields to the schema
});

//Create Model from the schema
const Product = mongoose.model('Product', productSchema);
