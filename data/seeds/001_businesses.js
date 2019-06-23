
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {id: 1, username: 'Chopped', address: '1234 Wayword Way, New York, NY 12345', email: "hello@choppedrestaurant.com", phone: 5555555555, password: "password1"},
        {id: 2, username: 'Per Se', address: '10 Columbus Cir, New York, NY  10011', email: "info@perserestauraunt.com", phone: 2128239335, password: "secure"},
        {id: 3, username: 'Blue Hill', address: '75 Washington Pl, New York, NY 10011', email: "hi@bluehillrestauraunt.com", phone: 2125391776, password: "itsfine!"}
      ]);
    });
};
