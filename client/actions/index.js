import { getAnimals } from '../apis/animals'

export const SET_ANIMALS = 'SET_ANIMALS'
export const SET_WINNERS = 'SET_WINNERS'

export function getRandomNumber () {
  return Math.ceil(Math.random() * 10)
}

export function setAnimals (animals) {
  return {
    type: SET_ANIMALS,
    animals: animals
  }
}

export function setWinners (animals) {
  return {
    type: SET_WINNERS,
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

export function getWinners () {
  return dispatch => {
    return getAnimals()
      .then(animals => {
        dispatch(setAnimals(animals))
        return null
      })

}}





