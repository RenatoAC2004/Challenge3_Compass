import { createStore, applyMiddleware, combineReducers, Action } from "redux"
import { thunk, ThunkAction, ThunkDispatch, ThunkMiddleware } from "redux-thunk"
import productsReducer, { ProductsActionTypes } from "./products/reducer"
import { composeWithDevTools } from "redux-devtools-extension"

export type RootState = ReturnType<typeof rootReducer>
export type MyThunkResult<R> = ThunkAction<R, RootState, object, Action>
export type MyThunkDispatch = ThunkDispatch<RootState, object, Action>

const rootReducer = combineReducers({
  product: productsReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, ProductsActionTypes>)
  )
)

export default store
