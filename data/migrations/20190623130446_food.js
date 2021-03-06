
exports.up = function (knex, Promise) {
    return knex.schema.createTable('food', function (food) {
        food.increments()
        food
            .string('name', 128)
            .notNullable()
            .unique()
        food
            .string('pickup_date', 128)
            .notNullable()
        food
            .string('time', 128)
        food
            .string('description', 255)
        food
            .integer('is_claimed')
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
        food
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('food')
};
