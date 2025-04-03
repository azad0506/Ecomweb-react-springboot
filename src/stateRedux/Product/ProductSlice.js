import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    product:null,
    isLoading:false,
    error:null
}
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        findProductByid_Request:()=>{

        },

         // 🔹 Find Product by ID
         findProductByIdRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        findProductByIdSuccess: (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        },
        findProductByIdFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // 🔹 Find Products 
        findProductsRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        findProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        findProductsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

// ✅ Export actions
export const {
    findProductByIdRequest,
    findProductByIdSuccess,
    findProductByIdFailure,
    findProductsRequest,
    findProductsSuccess,
    findProductsFailure
} = productSlice.actions;

// ✅ Export reducer
export const productReducer = productSlice.reducer;