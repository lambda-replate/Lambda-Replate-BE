const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', () => {
    res.status(200).json("It's working! anakin.gif")
})

module.exports = server