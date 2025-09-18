import axios from "axios";
import { deleteProductByIdFailure, deleteProductByIdSuccess, deleteProductRequest, fetchMenProductsFailure, fetchMenProductsRequest, fetchMenProductsSuccess, fetchWomenProductsFailure, fetchWomenProductsRequest, fetchWomenProductsSuccess, findProductByIdFailure, findProductByIdRequest, findProductByIdSuccess, findProductsFailure, findProductsRequest, findProductsSuccess } from "./ProductSlice"
import { api, API_BASE_URL } from "../../config/apiconfig";


 export const findProducts=(reqData)=> async(dispatch)=>{
console.log("reqData",reqData)

    dispatch(findProductsRequest());
   
    try {
        console.log("Request Data:", reqData);


         // Correct destructuring
         const { category,toplevelcategory, colors, size, minPrice, maxPrice, minDiscount, stock, sort, pageNumber, pageSize } = reqData;
         console.log("findproducts",reqData);
         // Correct API request parameters
         const { data } = await api.get(
             `/api/products?colors=${colors}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&toplevelcategory=${toplevelcategory}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
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

export const deleteProductByid = (productId) => async (dispatch) => {
    dispatch(deleteProductRequest());
    console.log("reqdata",productId)

    try {
        // const { productId } = reqData;
        const { data } = await api.delete(`/api/admin/products/deleteProduct/${productId}`)
            console.log(" deleteProductByid data: ",data)
        dispatch(deleteProductByIdSuccess(productId))
    } catch (error) {
        dispatch(deleteProductByIdFailure("Failed to delete product"));
    }
}



//get all product for admin
export const getAllProduct=(reqdata)=>async(dispatch)=>{
   
    try {
        let response = await api.get(`/api/admin/products/findAllProduct?page=${reqdata.pageNumber}&size=${reqdata.pageSize}`)
        let { data } = response;
        console.log("data",data)
      dispatch(findProductsSuccess(data))
        
    } catch (error) {
        dispatch(findProductsFailure("Failed to fetch products"))
    }    
     
}



//fetch category women
export const fetchWomenProducts = () => async (dispatch) => {
    try {
      dispatch(fetchWomenProductsRequest());
      //const { data } = await axios.get("http://localhost:8485/api/toplevelcategory/Women");
    const { data } = await axios.get(`${API_BASE_URL}/api/toplevelcategory/Women`);
      dispatch(fetchWomenProductsSuccess(data));
    } catch (error) {
      dispatch(fetchWomenProductsFailure(error.message));
    }
  };
  //fetch category Men
export const fetchMenProducts = () => async (dispatch) => {
    try {
      dispatch(fetchMenProductsRequest());
    //   const { data } = await api.get("/api/top-category/men");
    const {data}=await axios.get(`${API_BASE_URL}/api/toplevelcategory/Men`)
    console.log("Men category data", data)
    dispatch(fetchMenProductsSuccess(data));
    } catch (error) {
      dispatch(fetchMenProductsFailureProductsFailure(error.message));
    }
  };
  