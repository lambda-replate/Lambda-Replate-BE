
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {username: 'Chopped', address: '1234 Wayword Way, New York, NY 12345', email: "hello@choppedrestaurant.com", phone: 55, password: "password1"},
        {username: 'Per Se', address: '10 Columbus Cir, New York, NY  10011', email: "info@perserestauraunt.com", phone: 43, password: "secure"},
        {username: 'Blue Hill', address: '75 Washington Pl, New York, NY 10011', email: "hi@bluehillrestauraunt.com", phone: 234, password: "itsfine!"}
      ]);
    });
};
