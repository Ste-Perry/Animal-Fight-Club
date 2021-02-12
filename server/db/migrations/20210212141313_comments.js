
exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
      table.increments('id').primary()
      table.string('comment')
      table.integer('animal_id')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
};

