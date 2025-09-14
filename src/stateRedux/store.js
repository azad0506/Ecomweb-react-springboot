import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/Reducer";
import { cartReducer } from "./Cart/cartSlice";
import { orderReducer } from "./Order/orderSlice";
import { productReducer } from "./Product/ProductSlice";
import { AdminorderReducer } from "./Admin/AdminOrderSlice";
import { ReviewReducer } from "./Review/ReviewSlice";


export const store=configureStore({

    reducer:{
        auth:authReducer,  // Use auth reducer in store
        product:productReducer,
        cart:cartReducer,
        order:orderReducer,
        adminorder:AdminorderReducer,
        review:ReviewReducer
    }

})