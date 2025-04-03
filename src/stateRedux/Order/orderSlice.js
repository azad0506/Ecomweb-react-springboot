// OrderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: null,
    orders: [],
    isLoading: false,
    error: null
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        // Create Order
        createOrderRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        createOrderSuccess: (state, action) => {
            state.isLoading = false;
            state.order = action.payload;
        },
        createOrderFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Get Order by ID
        getOrderByIdRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getOrderByIdSuccess: (state, action) => {
            state.isLoading = false;
            state.order = action.payload;
        },
        getOrderByIdFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Get Order History
        getOrderHistoryRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getOrderHistorySuccess: (state, action) => {
            state.isLoading = false;
            state.orderHistory = action.payload;
        },
        getOrderHistoryFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {
    createOrderRequest, createOrderSuccess, createOrderFailure,
    getOrderByIdRequest, getOrderByIdSuccess, getOrderByIdFailure,
    getOrderHistoryRequest,getOrderHistorySuccess, getOrderHistoryFailure
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
