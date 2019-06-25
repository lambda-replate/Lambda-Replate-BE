const bcrypt = require('bcryptjs')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {username: 'helpinghand', address: '1234 Somewhere Place, New York, NY 12345', email: "wecare@helpinghandcharity.com", phone: 23, password: bcrypt.hashSync('pass', 8), organization_name: 'Helping Hand LLC'},
        {username: 'Nonprofit New York', address: '135 W 36th St 15th Floor, New York, NY 10018', email: "hi@nonprofitnewyork.com", phone: 13, password: bcrypt.hashSync('pass', 8), organization_name: 'Nonprofit New York Inc'},
        {username: 'breakthrough', address: '123 William St 4th Floor', email: "hello@breaktrhoughnewyorkinc.com", phone: 43, password: bcrypt.hashSync('pass', 8), organization_name: 'Breakthrough LLC'}
      ]);
    });
};
