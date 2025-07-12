const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // prettier-ignore
    const authHeader = req.header('Authorization');
    const token = authHeader ? authHeader.split(' ')[1] : null;


    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = verifyToken;