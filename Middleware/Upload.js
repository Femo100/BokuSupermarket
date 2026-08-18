const multer = require('multer'); // Import the Multer library for handling file uploads
const  {cloudinaryStorage}  = require('multer-storage-cloudinary'); // Import the Cloudinary storage engine for Multer
const cloudinary = require('../Config/Cloudinary'); // Import the configured Cloudinary instance

const storage = cloudinaryStorage({
    cloudinary: cloudinary, // Use the configured Cloudinary instance
    params: {
        folder: 'bokusupermarket', // Specify the folder in Cloudinary where files will be stored
        allowedFormats: ['jpg', 'jpeg', 'png'], // Specify allowed file formats for uploads
        transformation: [{ width: 500, height: 500, crop: 'limit' }] // Optional transformation to limit image size
    }
});    