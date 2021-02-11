import request from 'superagent'

const rootUrl = '/api/v1'

export function getAnimals () {
  return request.get(rootUrl + '/animals')
    .then(res => {
      return res.body
    })
}
export function getAnimalById (id) {
  return request.get(rootUrl +'/animals/' + id)
  .then(res => {
    return res.body
  })
}

export function addAnimal (animal) {
  return request.post(rootUrl + '/animals')
  .send(animal)
  .then(res => res.body)
}
