
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {name: 'meatballs', business_id: 1, volunteer_id: 2, pickup_date: 123456},
        {name: 'pizza', business_id: 1, volunteer_id: 3, pickup_date: 223456},
        {name: 'soup', business_id: 3, volunteer_id: 1, pickup_date: 333456},
        // {name: 'meatballs', pickup_date: 123456},
        // {name: 'pizza', pickup_date: 223456},
        // {name: 'soup', pickup_date: 333456},
      ]);
    });
};
