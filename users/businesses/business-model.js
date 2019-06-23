const db = require('../../data/dbConfig')

module.exports = {
    find,
    findByUsername,
    add
}

function find() {
    return db('businesses')
}

function findByUsername(username) {
    return db('businesses')
    .where({username})
    .first()
}

function add(user) {
    return db('businesses')
    .insert(user, 'id')
    .then(([id]) => {
        return db('businesses')
        .where({id})
        .first()
    })
}