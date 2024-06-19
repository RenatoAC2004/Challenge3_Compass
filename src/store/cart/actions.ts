import { ProductType } from "../../types/ProductType"
import { GenericAction } from "../type"

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export type AddToCartType = GenericAction<typeof ADD_TO_CART, ProductType>
export type RemoveFromCartType = GenericAction<typeof REMOVE_FROM_CART, ProductType>
export type CartActionTypes = AddToCartType | RemoveFromCartType

export const addToCart = (product: ProductType): AddToCartType => ({
  type: ADD_TO_CART,
  payload: product,
})

export const removeFromCart = (product: ProductType): RemoveFromCartType => ({
  type: REMOVE_FROM_CART,
  payload: product,
})