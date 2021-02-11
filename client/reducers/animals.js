import { SET_ANIMALS} from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANIMALS:
      return action.animals
    default:
      return state
  }
}

export default reducer
