const express = require('express')

const db = require('../db/animals')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAnimals()
    .then(results => {
      // console.log(results)
      res.json(results)
     
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/:id', (req, res) => {
  db.getAnimalById(req.params.id)
    .then(animal => {
      res.json(animal)
     
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req, res) => {
  db.addAnimal(req.body)
  .then(id => {
    res.json(id)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})
module.exports = router
