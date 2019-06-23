const express = require('express');

const Volunteers = require('../users/volunteers/volunteers-model');

const router = express.Router()

router.post('/register', (req, res) => {
    let user = req.body;

    Volunteers.add(user)
    .then(user => {
        res.status(200).json({user})
    })
    .catch(error => {
        res.status(500).json('Server Error')
    })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Volunteers.findByUsername(username)
    .then(user => {
        res.status(200).json({user})
    })
    .catch(error => {
        res.status(500).json('Server Error')
    })
})


module.exports = router
