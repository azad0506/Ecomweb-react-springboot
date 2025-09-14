import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    product:null,
    deleteProductslice:null,
    womenProducts: [],
    mensProducts:[],
    isLoading:false,
    error:null
}
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
       
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
        },
        //delete product By Id
        deleteProductRequest:(state)=>{
            state.isLoading=true;
            state.error=null;
        },
        deleteProductByIdSuccess: (state, action) => {
            state.isLoading = false;
            state.products.content= state.products.content.filter(product => product.id !== action.payload);
            state.deleteProductslice=action.payload;
        },
        deleteProductByIdFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //fetch data for women
        fetchWomenProductsRequest: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          fetchWomenProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.womenProducts = action.payload;
          },
          fetchWomenProductsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          },
          //fetch data for Men
        fetchMenProductsRequest: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          fetchMenProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.mensProducts = action.payload;
          },
          fetchMenProductsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          },
        
    }

})

// ✅ Export actions
export const {
    findProductByIdRequest,
    findProductByIdSuccess,
    findProductByIdFailure,

    findProductsRequest,
    findProductsSuccess,
    findProductsFailure,

    deleteProductRequest,
    deleteProductByIdSuccess,
    deleteProductByIdFailure,

    fetchWomenProductsRequest,
  fetchWomenProductsSuccess,
  fetchWomenProductsFailure,

  fetchMenProductsRequest, fetchMenProductsSuccess,fetchMenProductsFailure,
} = productSlice.actions;

// ✅ Export reducer
export const productReducer = productSlice.reducer;