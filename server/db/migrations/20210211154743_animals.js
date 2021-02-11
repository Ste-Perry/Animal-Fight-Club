
exports.up = function(knex) {
  return knex.schema.createTable('animals', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('url')
      table.integer('wins')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('animals')
};
