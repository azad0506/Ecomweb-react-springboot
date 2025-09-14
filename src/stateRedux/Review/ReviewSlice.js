import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    reviews: [],
    isLoading: false,
    error: null
}

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        //create review
        createReviewRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        createReviewSuccess: (state, action) => {
            state.isLoading = false;
            // state.reviews = action.payload;
            //   state.reviews.push(action.payload); // Add new review to existing reviews array
            state.reviews.unshift(action.payload)

        },
        createReviewFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;  // Save the error message
        },
        // getAll review
        getReviewRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getReviewSuccess: (state, action) => {
            state.isLoading = false;
            state.reviews = action.payload;
        },
        getReviewFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const {
    getReviewRequest, getReviewSuccess, getReviewFailure,

    createReviewRequest,createReviewSuccess,createReviewFailure
} = reviewSlice.actions;

export const ReviewReducer = reviewSlice.reducer;