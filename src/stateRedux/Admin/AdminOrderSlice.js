// OrderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: null,
    orders: [],
    deleteorder:null,
    isLoading: false,
    error: null
};

const AdminOrderSlice = createSlice({
    name: 'adminorder',
    initialState,
    reducers: {


        // Get All Orders
        getOrdersRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getOrdersSuccess: (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
        },
        getOrdersFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Confirm Order
        confirmOrderRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        confirmOrderSuccess: (state, action) => {
            state.isLoading = false;
            state.successMessage = "Order confirmed";
            state.orders = state.orders.map(order =>
                order.id === action.payload.id ? action.payload : order
            );
        },
        confirmOrderFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Cancel Order
        cancelOrderRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        cancelOrderSuccess: (state, action) => {
            state.isLoading = false;
            state.successMessage = "Order cancelled";
            state.orders = state.orders.map(order =>
                order.id === action.payload.id ? action.payload : order
            );
        },
        cancelOrderFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Deliver Order
        deliverOrderRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        deliverOrderSuccess: (state, action) => {
            state.isLoading = false;
            state.successMessage = "Order delivered";
            state.orders = state.orders.map(order =>
                order.id === action.payload.id ? action.payload : order
            );
        },
        deliverOrderFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // Ship Order
        shipOrderRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        shipOrderSuccess: (state, action) => {
            state.isLoading = false;
            state.successMessage = "Order shipped";
            state.orders = state.orders.map(order =>
                order.id === action.payload.id ? action.payload : order
            );
        },
        shipOrderFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // Delete Order
        deleteOrderRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        deleteOrderSuccess: (state, action) => {
            state.isLoading = false;
            state.deleteorder = action.payload;
            state.orders = state.orders.filter(order => order.id !== action.payload);
        },
        deleteOrderFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },



    }
});

export const {
    createOrderRequest, createOrderSuccess, createOrderFailure,
    getOrdersRequest, getOrdersSuccess, getOrdersFailure,
    confirmOrderRequest, confirmOrderSuccess, confirmOrderFailure,
    cancelOrderRequest, cancelOrderSuccess, cancelOrderFailure,
    deliverOrderRequest, deliverOrderSuccess, deliverOrderFailure,
    shipOrderRequest, shipOrderSuccess, shipOrderFailure,
    deleteOrderRequest, deleteOrderSuccess,deleteOrderFailure
} = AdminOrderSlice.actions;

export const AdminorderReducer = AdminOrderSlice.reducer;
