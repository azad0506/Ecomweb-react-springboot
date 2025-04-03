import { api } from "../../config/apiconfig";
import {
  createOrderFailure, createOrderRequest, createOrderSuccess,
  getOrderByIdFailure, getOrderByIdRequest, getOrderByIdSuccess
} from "./orderSlice";


// ✅ Create Order
export const createOrder = (reqData) => async (dispatch) => {
  dispatch(createOrderRequest());
  try {
    const { data } = await api.post(`/api/orders/`, reqData.address);
    console.log("order Data:", data)
    if (data.id) {
      reqData.navigate({ search: `step=2&order_id=${data.id}` })
    }
    dispatch(createOrderSuccess(data));
  } catch (error) {
    dispatch(createOrderFailure("Failed to create order"));
  }
};
// Get Order by ID
export const getOrderById = (orderId) => async (dispatch) => {
  console.log("orderid getOrderById",orderId )

  dispatch(getOrderByIdRequest());
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("getOrderById", data)
    dispatch(getOrderByIdSuccess(data));
  } catch (error) {
    dispatch(getOrderByIdFailure(error.message));
  }
};

