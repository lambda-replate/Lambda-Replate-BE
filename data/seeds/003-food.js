
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {name: 'meatballs', time: 12345, description: 'This is a description for meatballs. Come pick them up whenever.', is_claimed: 1, business_id: 1, volunteer_id: 2, pickup_date: 123456},
        {name: 'pizza', time: 12345, description: 'This is a description for our pizza. Come pick it up whenever.', is_claimed: 1, business_id: 1, volunteer_id: 3, pickup_date: 223456},
        {name: 'soup', time: 12345, description: 'We have a ton of soup!', is_claimed: 1, business_id: 3, volunteer_id: 1, pickup_date: 333456},
      ]);
    });
};
