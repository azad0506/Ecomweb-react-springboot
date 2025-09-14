import { api } from "../../config/apiconfig";
import { confirmOrderFailure, confirmOrderRequest, confirmOrderSuccess,
     deliverOrderFailure,deliverOrderRequest, deliverOrderSuccess,
     shipOrderFailure,  shipOrderRequest,shipOrderSuccess,
    
     getOrdersFailure, getOrdersRequest, getOrdersSuccess,
     deleteOrderRequest,
     deleteOrderSuccess,
     deleteOrderFailure, 
    } from "./AdminOrderSlice";

export const getAllOrder=()=>async(dispatch)=>{
    console.log("getAllOrder action")
   dispatch(getOrdersRequest())
    try {
        let response = await api.get(`/api/admin/orders/`)
        let { data } = response;
        console.log("data",data)
      dispatch(getOrdersSuccess(data))
        
    } catch (error) {
        dispatch(getOrdersFailure("Failed to fetch products"))
    }    
     
}

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch(confirmOrderRequest());
    try {
      const { data } = await api.put(`/api/admin/orders/${orderId}/confirmed`);
      dispatch(confirmOrderSuccess(data));
    } catch (error) {
      dispatch(confirmOrderFailure(error.message));
    }
  };

  export const shipOrder = (orderId) => async (dispatch) => {
    dispatch(shipOrderRequest());
    try {
      const { data } = await api.put(`/api/admin/orders/${orderId}/shipped`);
      dispatch(shipOrderSuccess(data));
    } catch (error) {
      dispatch(shipOrderFailure(error.message));
    }
  };
  export const deliverOrder = (orderId) => async (dispatch) => {
    dispatch(deliverOrderRequest());
    try {
      const { data } = await api.put(`/api/admin/orders/${orderId}/deliver`);
      dispatch(deliverOrderSuccess(data));
    } catch (error) {
      dispatch(deliverOrderFailure(error.message));
    }
  };


  export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch(deleteOrderRequest());
    try {
     const {data}= await api.delete(`/api/admin/orders/${orderId}/deleteOrder`);
      dispatch(deleteOrderSuccess(data));
    } catch (error) {
      dispatch(deleteOrderFailure(error.message));
    }
  };
  