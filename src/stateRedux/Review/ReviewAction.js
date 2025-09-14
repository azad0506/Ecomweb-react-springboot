import { api } from "../../config/apiconfig";
import { createReviewFailure, createReviewRequest, createReviewSuccess, getReviewFailure, getReviewRequest, getReviewSuccess } from "./ReviewSlice"

export const getAllReview=(productId)=>async(dispatch)=>{
    console.log("ReviewAction",productId)
    dispatch(getReviewRequest());

    try {
        const {data}=await api.get(`/api/review/product/${productId}`)
        dispatch(getReviewSuccess(data))
    } catch (error) {
        dispatch(getReviewFailure());
    }
}

export const createReview=(reqdata)=>async(dispatch)=>{
    console.log("ReviewAction",reqdata)
    dispatch(createReviewRequest());

    try {
        const {data}=await api.post(`/api/review/create`,reqdata)
        console.log("createReview",data)
        dispatch(createReviewSuccess(data))
    } catch (error) {
        dispatch(createReviewFailure());
    }
}