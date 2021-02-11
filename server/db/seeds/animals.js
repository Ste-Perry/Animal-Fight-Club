
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Elephant'},
        {id: 2, name: 'Lion'},
        {id: 3, name: '10 Sea otters'},
        {id: 4, name: 'Duckling'},
        {id: 5, name: 'Orca'},
        {id: 6, name: 'Moa'},
        {id: 7, name: 'Velociraptor'},
        {id: 8, name: '100000'},
        {id: 9, name: 'Eagle'},
        {id: 10, name: 'Gorilla'}
      ]);
    });
};
