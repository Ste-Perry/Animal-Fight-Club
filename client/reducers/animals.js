import { SET_ANIMALS, SET_WINNERS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANIMALS:
      return action.animals
    case SET_WINNERS:
      state.map(animal => {
        if(animal.id === action.id) {
          animal.wins++
        }
        return [...state, {id: action.id, name: action.name, url: action.url, wins: action.wins}]
      })
    default:
      return state
  }
}

export default reducer
