const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const businessRouter = require('./users/businesses/business-router');
const volunteerRouter = require('./users/volunteers/volunteers-router');
const volunteerAuthRouter = require('./auth/auth-volunteer-router')
const businessAuthRouter = require('./auth/auth-business-router')
const restricted = require('./middleware/restricted')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors())

server.use('/api/auth/volunteer', volunteerAuthRouter)
server.use('/api/auth/business', businessAuthRouter)
server.use('/api/users/businesses', restricted, businessRouter)
server.use('/api/users/volunteers', restricted, volunteerRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "It's working! anakin.gif"})
})

module.exports = server