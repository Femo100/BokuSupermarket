// Create authorization middleware to check if the user has the required role to access a specific route
exports.authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) { // Check if the user's role matches the required role
            return res.status(403).json({ message: 'Access denied: You do not have permission to perform this action' });
        }   
        next(); // If the user's role matches, proceed to the next middleware or route handler
    }   
};