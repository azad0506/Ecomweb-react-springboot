// paymentAction.js
import axios from "axios";
import {
    createPaymentRequest,
    createPaymentSuccess,
    createPaymentFailure,
    updatePaymentRequest,
    updatePaymentSuccess,
    updatePaymentFailure
} from "./PaymentSlice";
import { api } from "../../config/apiconfig";

// Create Payment
export const createPayment = (orderId) => async (dispatch) => {
    dispatch(createPaymentRequest());
    console.log("createpayment" , orderId)

    try {
        // const { data } = await api.post(`/api/payments/${paymentData.orderId}`, paymentData);
        const { data } = await api.post(`/api/payments/${orderId}`, {});

        if(data.payment_link_url){
            window.location.href=data.payment_link_url
        }
    } catch (error) {
        dispatch(createPaymentFailure("Failed to create payment"));
    }
};

// Update Payment
export const updatePayment = (reqData) => async (dispatch) => {
    console.log("reqdata updatePayment",reqData)
    dispatch(updatePaymentRequest());

    try {
        // const { data } = await api.get(`/api/payments?payment_id/${reqData.orderId}&order_id=${reqData.orderId}`);
        const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

        console.log("update data",data)
    } catch (error) {
        dispatch(updatePaymentFailure("Failed to update payment"));
    }
};
