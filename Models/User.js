const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true                  
    },
    email: {
        type: String,   
        required: true,
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
    phoneNumber: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    hasadminAccess: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['superadmin', 'storemanager', 'storekeeper'],// Define the allowed roles
        default: 'user'
    }

},
   {timestamps: true} // This option adds createdAt and updatedAt fields to the schema
);

//Create Model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model so it can be used in other parts of the application
module.exports = User;