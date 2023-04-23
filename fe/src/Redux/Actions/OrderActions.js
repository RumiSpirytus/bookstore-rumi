import { CART_CLEAR_ITEMS } from "../Constants/CartConstants";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS } from "../Constants/OrderConstants";
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

//order details
export const getOrderDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({type: ORDER_DETAILS_REQUEST});

        const {userLogin: {userInfo}, } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`/api/orders/${id}`, config);
        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data});

    } catch (error) {
        const messange = error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        if(messange === "Not authorized, no token available"){
            dispatch(logout())
        }
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: messange,
        })
    }
}


//order pay
export const payOrder = (orderId, paymentResult) => async(dispatch, getState) => {
    try {
        dispatch({type: ORDER_PAY_REQUEST});

        const {userLogin: {userInfo}, } = getState()
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(`/api/orders/${orderId}/pay`,
         paymentResult,
         config);
        dispatch({type: ORDER_PAY_SUCCESS, payload: data});

    } catch (error) {
        const messange = error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        if(messange === "Not authorized, no token available"){
            dispatch(logout())
        }
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: messange,
        })
    }
}