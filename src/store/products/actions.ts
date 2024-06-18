import axios from "axios"
import { MyThunkDispatch } from ".."
import { ProductType } from "../../types/ProductType"
import { GenericAction } from "../type"

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE"
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST"

export type FetchProductsSuccessAction = GenericAction<
  typeof FETCH_PRODUCTS_SUCCESS,
  ProductType[]
>

export type FetchProductsFailureAction = GenericAction<
  typeof FETCH_PRODUCTS_FAILURE,
  string
>

export type ProductsActionTypes =
  | FetchProductsSuccessAction
  | FetchProductsFailureAction

export type typeFetchProducts = typeof fetchProducts

export const fetchProducts = () => {
  return async (dispatch: MyThunkDispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST })
    try {
      const response = await axios.get("http://localhost:3000/products")
      return dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      return dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error instanceof Error ? error.message : "An error occurred",
      })
    }
  }
}
