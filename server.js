const express = require('express');
const helmet = require('helmet');
const businessRouter = require('./users/businesses/business-router');
const volunteerRouter = require('./users/volunteers/volunteers-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', () => {
    res.status(200).json("It's working! anakin.gif")
})

server.use('/api/users/businesses', businessRouter)
server.use('/api/users/volunteers', volunteerRouter)


module.exports = server