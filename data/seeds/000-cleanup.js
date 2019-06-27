// const cleaner = require('knex-cleaner');

// exports.seed = knex => {
//     return cleaner.clean(knex, {
//         ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
//         mode: 'truncate'
//     });
// };

exports.seed = knex => {
    return knex('food').truncate().then(function() {
        return knex('volunteers').truncate().then(function() {
            return knex('businesses').truncate()
        })
    })
}