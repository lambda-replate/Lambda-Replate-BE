const jwt = require('jsonwebtoken');
const secrets = require('./secrets');

module.exports = generateToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1h'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}