const express = require('express');
const Businesses = require('./business-model');

const router = express.Router();

router.get('/', (req, res) => {
    Businesses.find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

module.exports = router
