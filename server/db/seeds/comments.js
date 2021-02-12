
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'Wow, awesome', animal_id: 1},
        {comment: 'This looks cute', animal_id: 1},
        {comment: 'so pretty', animal_id: 1},
        {comment: 'Wow, awesome', animal_id: 2},
        {comment: 'This looks adorable', animal_id: 2},
        {comment: 'so pretty', animal_id: 3},
        {comment: 'Wow, awesome', animal_id: 3},
        {comment: 'This looks gorgeous', animal_id: 4},
        {comment: 'so pretty', animal_id: 4},
        {comment: 'Wow, awesome', animal_id: 5},
        {comment: 'This looks fabulous', animal_id: 5},
        {comment: 'so pretty', animal_id: 6},
        {comment: 'Wow, awesome', animal_id: 6},
        {comment: 'This looks beautiful', animal_id: 7},
        {comment: 'so pretty', animal_id: 7},
        {comment: 'Wow, awesome', animal_id: 8},
        {comment: 'This looks awesome', animal_id: 9},
        {comment: 'so pretty', animal_id: 10},
      ]);
    });
};
