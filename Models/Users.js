const mongoose = require('mongoose'); // Import the mongoose library to interact with MongoDB
const bcrypt = require('bcryptjs'); // Import the bcryptjs library to handle password hashing

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    HasAdminAccess: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true  
    },
    role: {
        type: String,
        enum: ['superadmin', 'storekeeper', 'salesperson'], // Define the allowed roles for users
        default: 'salesperson'
    },
    
    
},
{timestamps: true} // Date created and updated at
);

//create model from schema
const User = mongoose.model('User', userSchema);

module.exports = User; //export the model to be used in other files

