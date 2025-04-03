// paymentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    payment: null,
    isLoading: false,
    error: null,
};

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        createPaymentRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        createPaymentSuccess: (state, action) => {
            state.isLoading = false;
            state.payment = action.payload;
        },
        createPaymentFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        updatePaymentRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        updatePaymentSuccess: (state, action) => {
            state.isLoading = false;
            state.payment = action.payload;
        },
        updatePaymentFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    createPaymentRequest,
    createPaymentSuccess,
    createPaymentFailure,
    updatePaymentRequest,
    updatePaymentSuccess,
    updatePaymentFailure,
} = paymentSlice.actions;

export const paymentReducer = paymentSlice.reducer;
