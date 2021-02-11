import { getAnimals } from '../apis/animals'

export const SET_ANIMALS = 'SET_ANIMALS'

export function setAnimals (animals) {
  return {
    type: SET_ANIMALS,
    animals: animals
  }
}

export function fetchAnimals () {
  return dispatch => {
    return getAnimals()
      .then(animals => {
        dispatch(setAnimals(animals))
        return null
      })
  }}


// export function getRandomNumber () {
//   return Math.random() * 10
// }


