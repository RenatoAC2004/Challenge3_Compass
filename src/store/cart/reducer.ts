import { ADD_TO_CART, CartActionTypes } from "./actions"

const initialState = {
  items: [],
}

const cartReducer = (state = initialState, action:CartActionTypes ) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.payload)
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    default:
      return state
  }
}

export default cartReducer
