
exports.seed = function(knex, Promise) {
      return knex('food').insert([
        {name: 'meatballs', time: '10:05', description: 'This is a description for meatballs. Come pick them up whenever.', is_claimed: 1, business_id: 1, volunteer_id: 2, pickup_date: '2019-06-28'},
        {name: 'pizza', time: '9:30', description: 'This is a description for our pizza. Come pick it up whenever.', is_claimed: 1, business_id: 1, volunteer_id: 3, pickup_date: '2019-06-27'},
        {name: 'soup', time: '6:00', description: 'We have a ton of soup!', is_claimed: 1, business_id: 3, volunteer_id: 1, pickup_date: '2019-06-28'},
      ]);
};
