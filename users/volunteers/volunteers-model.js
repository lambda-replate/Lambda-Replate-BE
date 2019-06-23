const db = require('../../data/dbConfig')

module.exports = {
    find,
    findByUsername
}

function find() {
    return db('volunteers')
}

function findByUsername(username) {
    return db('volunteers')
    .where({username})
    .first()
}