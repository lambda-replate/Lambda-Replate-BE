const db = require('../../data/dbConfig')

module.exports = {
    find,
    findByUsername
}

function find() {
    return db('businesses')
}

function findByUsername(username) {
    return db('businesses')
    .where({username})
    .first()
}