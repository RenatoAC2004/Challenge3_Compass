import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./actions"
import { ProductType } from "../../types/ProductType"
import { RootState } from ".."

export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS
  payload: ProductType[]
}

export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE
  payload: string
}

export type ProductsActionTypes =
  | FetchProductsSuccessAction
  | FetchProductsFailureAction

export interface InitialState {
  products: ProductType[]
  error: string | null
}

const initialState: InitialState = {
  products: [],
  error: null,
}

const productsReducer = (state = initialState, action: ProductsActionTypes) => {
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

export const selectProducts = (state: RootState) => state.product
export type productReducerType = typeof productsReducer
export default productsReducer
