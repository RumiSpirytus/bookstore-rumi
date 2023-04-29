import {  combineReducers, applyMiddleware } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productCreateReviewReducer, productDetailsReducer, productListReducer } from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./Reducers/userReducers";
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from "./Reducers/OrderReducers";

const reducers = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productCreateReviewReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy:orderListMyReducer
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
 ? (JSON.parse(localStorage.getItem('cartItems')))
 : [];

// const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

//login
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
:null;

//shippingAdd information
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
:{};

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage,
    },
    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
}

// const middleWare = [thunk]
const middleWare = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];

const store = configureStore(
    {reducer: reducers},
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store