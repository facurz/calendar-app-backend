const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {
    // x-token headers
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'No token provided',
        });
    }
    try {
        const {name, uid} = jwt.verify(token, process.env.SECRET_JWT);
        req.name = name;
        req.uid = uid;
        
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            message: 'Invalid token',
        });
    }
    next();
};

module.exports = { validarJWT };
