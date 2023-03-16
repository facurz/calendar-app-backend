const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ uid, name }, process.env.SECRET_JWT, { expiresIn: '2h' },
            (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
    });
};

module.exports = { generarJWT };
