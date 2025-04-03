import React, { useEffect } from 'react'
import AddressCart from '../AddressCart/AddressCart'
import CartItem from '../cart/CartItem'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../stateRedux/Order/OrderAction';
import { createPayment } from '../../../stateRedux/payment/PaymentAction';

const OrderSummary = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const location=useLocation();
  const searchparam= new URLSearchParams(location.search);
  const orderId=searchparam.get("order_id");

  useEffect( ()=>{
    dispatch(getOrderById(orderId));
  },[orderId])
  const handleCheckOut=()=>{
    dispatch(createPayment(orderId))
  }
  const {order}=useSelector(store=>store)
console.log("store ordersummary",order)
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCart address={order.order?.shippingAddress} />

      </div>

      <div className='lg:grid grid-cols-3  relative'>
      <div className='col-span-2'>

        {order.order?.orderItem.map( (item)=><CartItem  item={item}/> )}
        
      </div>

      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
        <div className='border p-3'>
          <p className='font-bold opacity-60 pb-4'>PRICE DETAILS</p>
          <hr />
          <div className='space-y-3 font-semibold p-3'>

            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>₹{order.order?.totalPrice}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span>Discount</span>
              <span className=' text-green-600'>₹{order.order?.discounte }</span>
            </div>
            <div className="flex justify-between pt-3 ">
              <span>Delivery Charge</span>
              <span className=' text-green-600'>free</span>
            </div>
            <div className="flex justify-between pt-3 font-bold ">
              <span>Total Ammount</span>
              <span className=' text-green-600'>₹{order.order?.totalDiscountPrice}</span>
            </div>

          </div>

          <button
          onClick={handleCheckOut}
            className="mt-5 w-full flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2rem py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
          >
           Checkout
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary
