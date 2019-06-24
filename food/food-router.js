const express = require('express');
const Food = require('./food-model');

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

module.exports = router
