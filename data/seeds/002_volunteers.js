
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id: 1, username: 'Helping Hand', address: '1234 Somewhere Place, New York, NY 12345', email: "wecare@helpinghandcharity.com", phone: 5555555555, password: "password1"},
        {id: 2, username: 'Nonprofit New York', address: '135 W 36th St 15th Floor, New York, NY 10018', email: "hi@nonprofitnewyork.com", phone: 2125129384, password: "help"},
        {id: 3, username: 'Breakthrough', address: '123 William St 4th Floor', email: "hello@breaktrhoughnewyorkinc.com", phone: 4234939581, password: "itsfine!"}
      ]);
    });
};
