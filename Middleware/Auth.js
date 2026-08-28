//middleware to verify the token

const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library to handle JWT operations
exports.protect = (req, res, next) => {

    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; //get the token from the header
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};