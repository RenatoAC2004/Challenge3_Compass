import { ProductType } from "../../types/ProductType"
import { ADD_TO_CART, CartActionTypes, REMOVE_FROM_CART } from "./actions"

export interface CartItem extends ProductType {
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.items.findIndex(
        item => item.id === action.payload.id
      )

      if (existingItem >= 0) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )

        return {
          ...state,
          items: updatedItems,
        }
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        }
      }
    }

    case REMOVE_FROM_CART: {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        const updatedItems = state.items
          .map((item, index) =>
            index === itemIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)

        return {
          ...state,
          items: updatedItems,
        }
      } else {
        return state
      }
    }
    default:
      return state
  }
}

export default cartReducer
