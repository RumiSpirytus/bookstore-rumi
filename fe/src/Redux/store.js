import {  combineReducers, applyMiddleware } from "redux"
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productListReducer } from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import { CART_ADD_ITEM } from './Constants/CartConstants';

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
:[]

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
    }
}

const middleWare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store