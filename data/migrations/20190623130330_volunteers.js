
exports.up = function (knex, Promise) {
    return knex.schema.createTable('volunteers', function (volunteer) {
        volunteer.increments()
        volunteer
            .string('username', 128)
            .notNullable()
            .unique()
        volunteer
            .string('password', 128)
            .notNullable()
        volunteer
            .string('organization-name')
            .notNullable()
        volunteer
            .string('address', 128)
            .notNullable()
        volunteer
            .string('email', 128)
            .notNullable()
        volunteer
            .string('phone', 128)
            .notNullable()
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('volunteers')
};
