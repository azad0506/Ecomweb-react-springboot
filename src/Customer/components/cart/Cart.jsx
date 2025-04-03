import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../../../stateRedux/Cart/cartAction';

const Cart = () => {
  const navigate=useNavigate();
  let dispatch=useDispatch();
  let store=useSelector(store=>store)
  console.log("store cart",store.cart)

  useEffect(()=>{
      dispatch(getCartItems())
      console.log("useffect of cart.jsx")

  },[store.cart.deleteCartItem, store.cart.updateCarItem])
  const handleCheckout=()=>{
    navigate("/checkout?step=1")
  }
  return (
    <div className='lg:grid grid-cols-3 lg:px-16 relative'>
      <div className='col-span-2'>

        {store?.cart?.cart?.cartItem?.length > 0 ? 
        (store.cart.cart?.cartItem.map( (item)=><CartItem  item={item} key={item.id}/> )
        ):(
          <p>No items in cart</p>
        )}
        
      </div>

      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
        <div className='border p-3'>
          <p className='font-bold opacity-60 pb-4'>PRICE DETAILS</p>
          <hr />
          <div className='space-y-3 font-semibold p-3'>

            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>₹{store.cart.cart?.totalPrice} </span>
            </div>
            <div className="flex justify-between pt-3">
              <span>Discount</span>
              <span className=' text-green-600'>-₹{store.cart.cart?.discounte} </span>
            </div>
            <div className="flex justify-between pt-3 ">
              <span>Delivery Charge</span>
              <span className=' text-green-600'>free</span>
            </div>
            <div className="flex justify-between pt-3 font-bold ">
              <span>Total Ammount</span>
              <span className=' text-green-600'>₹{store.cart.cart?.totalDiscountPrice}</span>
            </div>

          </div>

          <button
          onClick={()=>handleCheckout()}
            className="mt-5 w-full flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2rem py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
          >
           Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
