import React from 'react'
import AddressCart from '../AddressCart/AddressCart'
import CartItem from '../cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCart />

      </div>

      <div className='lg:grid grid-cols-3  relative'>
      <div className='col-span-2'>

        {[1,1,1,1].map( (item)=><CartItem /> )}
        
      </div>

      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
        <div className='border p-3'>
          <p className='font-bold opacity-60 pb-4'>PRICE DETAILS</p>
          <hr />
          <div className='space-y-3 font-semibold p-3'>

            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>₹199</span>
            </div>
            <div className="flex justify-between pt-3">
              <span>Discount</span>
              <span className=' text-green-600'>₹199</span>
            </div>
            <div className="flex justify-between pt-3 ">
              <span>Delivery Charge</span>
              <span className=' text-green-600'>₹199</span>
            </div>
            <div className="flex justify-between pt-3 font-bold ">
              <span>Total Ammount</span>
              <span className=' text-green-600'>₹199</span>
            </div>

          </div>

          <button
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
