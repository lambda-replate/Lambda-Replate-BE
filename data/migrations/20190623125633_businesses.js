
exports.up = function (knex, Promise) {
    return knex.schema.createTable('businesses', function (business) {
        business.increments()
        business
            .string('username', 128)
            .notNullable()
            .unique()
        business
            .string('password', 128)
            .notNullable()
        business
            .string('organization-name')
            .notNullable()
        business
            .string('address', 128)
            .notNullable()
        business
            .string('email', 128)
            .notNullable()
        business
            .string('phone', 128)
            .notNullable()
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('businesses')
};
