const cloudinary = require('cloudinary').v2; // Import the Cloudinary library and use version 2 of the API

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary; // Export the configured Cloudinary instance so it can be used in other parts of the application