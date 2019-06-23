const express = require('express');
const helmet = require('helmet');
const businessRouter = require('./users/businesses/business-router');
const volunteerRouter = require('./users/volunteers/volunteers-router');
const volunteerAuthRouter = require('./auth/auth-volunteer-router')
const businessAuthRouter = require('./auth/auth-business-router')


const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', () => {
    res.status(200).json("It's working! anakin.gif")
})

server.use('/api/auth/volunteer', volunteerAuthRouter)
server.use('/api/auth/business', businessAuthRouter)
server.use('/api/users/businesses', businessRouter)
server.use('/api/users/volunteers', volunteerRouter)


module.exports = server