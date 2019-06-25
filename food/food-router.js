const express = require('express');
const Food = require('./food-model');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')
const checkFoodData = require('../middleware/checkFoodData')
// const checkFoodUpdateInfo = require('../middleware/checkFoodUpdateInfo')

const router = express.Router();

router.get('/', (req, res) => {
    Food.find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

router.get('/business', (req, res) => {
    let token = req.headers.authorization
    let decoded = jwt.verify(token, secrets.jwtSecret)
    console.log(decoded)
    Food.findByBId(decoded.subject)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

router.get('/volunteer', (req, res) => {
    let token = req.headers.authorization
    let decoded = jwt.verify(token, secrets.jwtSecret)
    console.log(decoded)
    Food.findByVId(decoded.subject)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

router.post('/', checkFoodData, (req, res) => {
    let token = req.headers.authorization
    let decoded = jwt.verify(token, secrets.jwtSecret)
    let food = req.body
    food.business_id = decoded.subject
    Food.add(food)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Server Error", error: error})
    })
})

router.put('/claim/:id', (req, res) => {
    let token = req.headers.authorization
    let decoded = jwt.verify(token, secrets.jwtSecret)
    let food = req.body
    food.id = req.params.id

    if (food.is_claimed === 1 ) {
        food.volunteer_id = decoded.subject
    }
    else {
        food.volunteer_id = null
    }

    Food.claim(food.id, food)
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Server Error", error: error})
    })
})

router.put('/:id', (req, res) => {
    Food.update(req.params.id, req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({message: "Server Error", err: error})
    })
})

router.delete('/:id', (req, res) => {
    Food.remove(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({message: "Server Error", err: error})
    })
})

module.exports = router
