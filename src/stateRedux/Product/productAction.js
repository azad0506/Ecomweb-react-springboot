import axios from "axios";
import { findProductByIdFailure, findProductByIdRequest, findProductByIdSuccess, findProductsFailure, findProductsRequest, findProductsSuccess } from "./ProductSlice"
import { Api } from "@mui/icons-material";
import { api } from "../../config/apiconfig";


 export const findProducts=(reqData)=> async(dispatch)=>{

    dispatch(findProductsRequest());
   
    try {
        console.log("Request Data:", reqData);


         // Correct destructuring
         const { category, colors, size, minPrice, maxPrice, minDiscount, stock, sort, pageNumber, pageSize } = reqData;
         console.log("findproducts")
         // Correct API request parameters
         const { data } = await api.get(
             `/api/products?colors=${colors}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
         );
        
       
         console.log("product data",data)
        dispatch(findProductsSuccess(data));
    } catch (error) {
        dispatch(findProductsFailure("Failed to fetch products"))
    }
}



export const findProductByid = (reqData) => async (dispatch) => {
    dispatch(findProductByIdRequest());
    console.log("reqdata",reqData)

    try {
        const { productId } = reqData;
        const { data } = await api.get(`/api/products/id/${productId}`)
            console.log(" findProductByid data: ",data)
        dispatch(findProductByIdSuccess(data))
    } catch (error) {
        dispatch(findProductByIdFailure("id not found"))
    }
}