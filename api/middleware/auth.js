const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; 

        if (!token) {
            return res.status(403).json({ message: "Authentication failed. No token provided." });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decodedToken;

        next();
    } catch (error) {
        res.status(401).json({ message: "Authentication failed." });
    }
};
