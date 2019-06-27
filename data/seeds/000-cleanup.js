const cleaner = require('knex-cleaner');

exports.seed = knex => {
    return cleaner.clean(knex);
};