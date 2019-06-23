
exports.up = function (knex, Promise) {
    return knex.schema.createTable('food', function (food) {
        food.increments()
        food
            .string('name', 128)
            .notNullable()
            .unique()
        food
            .integer('pickup_date')
            .notNullable()
        food
            .integer('business_id')
            .unsigned()
            .references('id')
            .inTable('businesses')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        food
            .integer('volunteer_id')
            .unsigned()
            .references('id')
            .inTable('volunteers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('food')
};
