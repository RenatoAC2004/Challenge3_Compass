import axios from "axios"
import { MyThunkDispatch  } from ".."

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE"
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST"


export type typeFetchProducts = typeof fetchProducts;

export const fetchProducts = () => {
   return async (
    dispatch: MyThunkDispatch
  ) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST })
    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/204aceac-7b21-4b2a-8c9a-eecc64d44357"
      )
      return dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data.products,
      })
    } catch (error) {
      return dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error instanceof Error ? error.message : "An error occurred",
      })
    }
  }
}
