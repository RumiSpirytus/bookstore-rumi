import {  combineReducers, applyMiddleware } from "redux"
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productListReducer } from "./Reducers/ProductReducers";

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
})

const initialState = {}

const middleWare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store