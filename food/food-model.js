const db = require('../data/dbConfig')

module.exports = {
    find,
    findByBId,
    findByVId,
    add,
    claim,
    remove,
    update
}

function find() {
    return db('food')
}

function findByBId(business_id) {
    return db('food')
    .where({business_id: business_id})
}

function findByVId(volunteer_id) {
    return db('food')
    .where({volunteer_id: volunteer_id})
}

function add(food) {
    return db('food')
    .insert(food, 'id')
    .then(([id]) => {
        return db('food')
        .where({id})
        .first()
    })
}

function claim(food_id, food) {
    return db('food')
    .where({id: food_id})
    .update(food)
}

function update(id, food) {
    return db('food')
    .where({id})
    .update(food)
}

function remove(id) {
    return db('food')
    .where({id})
    .del()
}