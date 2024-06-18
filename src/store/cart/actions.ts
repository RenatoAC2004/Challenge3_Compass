import { ProductType } from "../../types/ProductType"
import { GenericAction } from "../type"

export const ADD_TO_CART = "ADD_TO_CART"

export type AddToCartType = GenericAction<typeof ADD_TO_CART, ProductType>
export type CartActionTypes = AddToCartType

export const addToCart = (product: ProductType): AddToCartType => ({
  type: ADD_TO_CART,
  payload: product,
})
