const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Not authorized, no token' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); 

        const user = await User.findById(decoded.id).select('-password');
        if (!user) return res.status(401).json({ error: 'User not found' });

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error.message); 
        res.status(401).json({ error: 'Not authorized, token failed' });
    }
};

module.exports = { protect };
