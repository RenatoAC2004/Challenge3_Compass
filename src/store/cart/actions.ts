import { ProductType } from "../../types/ProductType"
import { GenericAction } from "../type"

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";

export type AddToCartType = GenericAction<typeof ADD_TO_CART, ProductType>
export type RemoveFromCartType = GenericAction<typeof REMOVE_FROM_CART, ProductType>
export type UpdateCartItemQuantityType = {
  type: typeof UPDATE_CART_ITEM_QUANTITY;
  payload: {
    id: string;
    quantity: number;
  };
};

export type CartActionTypes = AddToCartType | RemoveFromCartType | UpdateCartItemQuantityType

export const addToCart = (product: ProductType): AddToCartType => ({
  type: ADD_TO_CART,
  payload: product,
})

export const removeFromCart = (product: ProductType): RemoveFromCartType => ({
  type: REMOVE_FROM_CART,
  payload: product,
})

export const updateCartItemQuantity = (
  id: string,
  quantity: number
): UpdateCartItemQuantityType => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: {
    id,
    quantity,
  },
});