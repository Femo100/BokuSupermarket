// Middleware/Auth.js 
const jwt = require('jsonwebtoken');

// Middleware function to authenticate requests using JWT
exports.protect = (req, res, next) => {
    //
    const authHeader = req.header('Authorization');

    if (!authHeader) { // Check if the Authorization header is present
        return res.status(401).json({ 
            message: 'No token provided, authorization denied'
        });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from the Authorization header (assuming the format is "Bearer <token>")

    if (!token) {
        return res.status(401).json({
            message: 'No token provided, authorization denied'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Token is not valid'
        });
    }
};