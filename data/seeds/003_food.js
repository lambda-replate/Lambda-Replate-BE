
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {id: 1, name: 'meatballs', business_id: 1, volunteer_id: 2, pickup_date: 123456},
        {id: 2, name: 'pizza', business_id: 1, volunteer_id: 3, pickup_date: 223456},
        {id: 3, name: 'soup', business_id: 3, volunteer_id: 1, pickup_date: 333456},
      ]);
    });
};
