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
    Age: {
        type: Number,
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
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    hasAtmCard: {
        type: Boolean,
        default: false
    },
    timestamps: true // This option adds createdAt and updatedAt fields to the schema

});

//Create Model from the schema
const User = mongoose.model('User', userSchema);