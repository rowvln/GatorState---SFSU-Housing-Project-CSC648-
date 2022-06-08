exports.up = function(knex, Promise) {
  return knex.schema.createTable('listings', table => {
    table.increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .index()
      .onDelete('CASCADE');
    table.string('street_address');
    table.string('city');
    table.integer('zip_code');
    table.text('state');
    table.string('image_url');
    table.string('home_type');
    table.decimal('price', 14, 2);
    table.string('description').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('listings');
};
