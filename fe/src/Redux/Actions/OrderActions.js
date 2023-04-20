import { CART_CLEAR_ITEMS } from "../Constants/CartConstants";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS } from "../Constants/OrderConstants";
import axios from "axios"
import {logout} from "./userActions.js"


//create order
export const createOrder = (order) => async(dispatch, getState) => {
    try {
        dispatch({type: ORDER_CREATE_REQUEST});

        const {userLogin: {userInfo}, } = getState()
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post("/api/orders", order, config);
        dispatch({type: ORDER_CREATE_SUCCESS, payload: data});
        dispatch({type: CART_CLEAR_ITEMS, payload: data});

        localStorage.removeItem("cartItems");

    } catch (error) {
        const messange = error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        if(messange === "Not authorized, no token available"){
            dispatch(logout())
        }
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: messange,
        })
    }
}