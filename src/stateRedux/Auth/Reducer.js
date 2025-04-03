

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    jwt: null,
    isLoading: false,
    error: null // Add error stat
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerRequest: (state) => {
            state.isLoading = true;
        },
        registerSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.jwt = action.payload.jwt;
        },
        registerFailure: (state) => {
            state.isLoading = false;
        },
        loginRequest: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.jwt = action.payload.jwt;
        },
        loginFailure: (state,action) => {
            state.isLoading = false;
            state.error=action.payload.error;
        },
        setUserProfile: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.jwt = null;
        }
    }
});

// Export actions
export const { registerRequest, registerSuccess, registerFailure, loginRequest, loginSuccess,loginFailure, logout,setUserProfile } = authSlice.actions;

// Export reducer
// ✅ Named export for the reducer (keeping the name "authReducer")
export const authReducer = authSlice.reducer;