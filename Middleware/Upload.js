const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require('../Config/cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "bokusupermarket",
        allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
        transformation: [{ width: 500, height: 500, crop: "limit" }]
    }
});

const upload = multer({ storage: storage });

module.exports = upload;    


// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// const cloudinary = require("../Config/Cloudinary");

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,

//     params: {
//         folder: "bokusupermarket",
//         allowed_formats: ["jpg", "jpeg", "png", "gif", "bmp"],
//         transformation: [{
//                 width: 500,
//                 height: 500,
//                 crop: "limit"
//             }]
//     }
// });

// const upload = multer({
//     storage: storage
// });

// module.exports = upload; 