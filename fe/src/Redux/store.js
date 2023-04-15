import {  combineReducers, applyMiddleware } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productListReducer } from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer } from "./Reducers/userReducers";


const reducers = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
:[]

//login
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
:null;

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
    },
    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
}

const middleWare = [thunk]

const store = configureStore(
    {reducer: reducers},
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store