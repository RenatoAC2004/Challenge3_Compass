import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, ProductsActionTypes } from "./actions"
import { ProductType } from "../../types/ProductType"
import { RootReducer } from ".."

export interface InitialState {
  products: ProductType[]
  error: string | null
}

const initialState: InitialState = {
  products: [],
  error: null,
}

const productsReducer = (state = initialState, action:ProductsActionTypes) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export const selectProducts = (state: RootReducer) => state.product
export type productReducerType = typeof productsReducer
export default productsReducer
