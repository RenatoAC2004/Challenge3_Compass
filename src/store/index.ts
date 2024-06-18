import { createStore, applyMiddleware, combineReducers, Action, Reducer } from "redux"
import { thunk, ThunkAction, ThunkDispatch, ThunkMiddleware } from "redux-thunk"
import productsReducer from "./products/reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import cartReducer from "./cart/reducer"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { CartActionTypes } from "./cart/actions"
import { ProductsActionTypes } from "./products/actions"

export type RootReducer = ReturnType<typeof rootReducer>
export type MyThunkResult<R> = ThunkAction<R, RootReducer, object, Action>
export type MyThunkDispatch = ThunkDispatch<RootReducer, object, Action>

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer
})

export type RootActions = ProductsActionTypes | CartActionTypes

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer as unknown as Reducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootReducer, RootActions>)
  )
)

export const persistor = persistStore(store);
export default store
