import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cart: null,
    deleteCartItem:null,
    updateCarItem:null,
    isLoading: false,
    error: null
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // addcart
        cartItemRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        cartItemSuccess: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload.cart;
            state.cartItems = action.payload.cartItems;
        },
        cartItemFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // getcart 
        getCartRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getCartSuccess: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload;
            state.cartItems = action.payload.cartItem; //cart has cartItem
        },
        getCartFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // updateCart
        updateCartRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        updateCartSuccess: (state, action) => {
            state.isLoading = false;
            // state.cartItems = state.cartItems.map(item =>
            //     item.id === action.payload.id ? {...item, quantity:action.payload} : item
            // );
            state.updateCarItem=action.payload;
        },
        updateCartFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // removecart
        removeCartRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        removeCartSuccess: (state, action) => {
            state.isLoading = false;
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            // ✅ Store deleted item ID for tracking
            // state.deleteCartItem =action.cartItemId;
            // state.deleteCartItem =action.payload.deleteCartItem;
            state.deleteCartItem = { id: 101, product: "Shirt" }; // full object
        },
        removeCartFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
});

export const {
    cartItemRequest, cartItemSuccess, cartItemFailure,
    updateCartRequest, updateCartSuccess, updateCartFailure,
    removeCartRequest, removeCartSuccess, removeCartFailure,
    getCartRequest, getCartSuccess, getCartFailure
} = cartSlice.actions;
// ✅ Export reducer
export const cartReducer = cartSlice.reducer;
