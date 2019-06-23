const db = require('../../data/dbConfig')

module.exports = {
    find,
    findByUsername,
    add
}

function find() {
    return db('volunteers')
}

function findByUsername(username) {
    return db('volunteers')
    .where({username})
    .first()
}

function add(user) {
    return db('volunteers')
    .insert(user, 'id')
    .then(([id]) => {
        return db('volunteers')
        .where({id})
        .first()
    })
}