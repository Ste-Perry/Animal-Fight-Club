const connection = require('./connection')

function getAnimals (db = connection) {
  return db('animals').select()
}

function getAnimalById (id, db = connection) {
  return db('animals') 
  .where('id', id)
  .select()
  .first()
}

function addAnimal (animal, db = connection) {
  return db('animals')
  .insert(animal)
  .then(ids => ids[0])
}



module.exports = {
  getAnimals,
  getAnimalById,
  addAnimal
}
