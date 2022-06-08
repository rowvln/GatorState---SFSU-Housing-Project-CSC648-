exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Jane',
          last_name: 'Doe',
          email: 'janedoe@mail.com',
          password: 'test123'
        },
        {
          first_name: 'Lebron',
          last_name: 'James',
          email: 'jameslebron@mail.com',
          password: 'test456'
        },
        {
          first_name: 'Lonzo',
          last_name: 'Ball',
          email: 'lonzoball@mail.com',
          password: 'test678'
        }
      ]);
    });
};
