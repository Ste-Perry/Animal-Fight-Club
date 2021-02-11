const connection = require('./connection')

function getAnimals (db = connection) {
  return db('animals').select()
}

module.exports = {
  getAnimals
}
