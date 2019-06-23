const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
            if (err) {
                res.status(401).json("Invalid Credentials")
            }
            else {
                next()
            }
        })
    }
    else {
        res.status(400).json('No token provided')
    }
}