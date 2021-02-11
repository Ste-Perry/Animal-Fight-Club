const connection = require('./connection')

function getAnimals (db = connection) {
  return db('animals').select()
}

function getAnimalByName (name, db = connection) {
  return db('animals') 
  .where('name', name)
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
  getAnimalByName,
  addAnimal
}
