
exports.up = function (knex, Promise) {
    return knex.schema.createTable('businesses', function (business) {
        business.increments()
        business
            .string('username')
            .notNullable()
            .unique()
        business
            .string('password')
            .notNullable()
        business
            .string('address')
            .notNullable()
        business
            .string('email')
            .notNullable()
        business
            .integer('phone')
            .notNullable()
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('businesses')
};
