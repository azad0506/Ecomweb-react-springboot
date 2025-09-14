import { api } from "../../config/apiconfig";
import { cartItemFailure, cartItemRequest, cartItemSuccess, getCartFailure, getCartRequest, getCartSuccess, removeCartFailure, removeCartRequest, removeCartSuccess, updateCartFailure, updateCartRequest, updateCartSuccess } from "./cartSlice"



export const getCartItems = () => async (dispatch) => {
    dispatch(getCartRequest());
    try {
        const { data } = await api.get('/api/cart/');
        console.log("data getCartItems ",data)
        dispatch(getCartSuccess(data));
    } catch (error) {
        dispatch(getCartFailure(error.message));
    }
};

export const addItemToCart = (reqData) =>async (dispatch) => {
    // console.log("reqData cart ",reqData)
    dispatch(cartItemRequest());

    try {
        const { data } =await api.put("/api/cart/add", reqData)
        console.log("data cart ",data.message)
        dispatch(cartItemSuccess(data))
    } catch (error) {
        dispatch(cartItemFailure(error.message))
    }
}

export const removeCartItem = (reqData) => async (dispatch) => {
    console.log("reqdata remove id",reqData)
    dispatch(removeCartRequest());

    try {
        const { data } = await api.delete(`/api/cartItem/${reqData.cartItemId}`)
        console.log("removeCartItem",data)
        dispatch(removeCartSuccess(reqData.cartItemId))
    } catch (error) {
        dispatch(removeCartFailure(error.message));
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    console.log("updateCartItem",reqData)
    dispatch(updateCartRequest());

    try {
        const { data } = await api.put(`/api/cartItem/update/${reqData.cartItemId}`, reqData.data);
        dispatch(updateCartSuccess(data));
    } catch (error) {
        dispatch(updateCartFailure(error.message));
    }
};