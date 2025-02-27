import { Grid } from '@mui/material'
import React from 'react'
import OrderCart from './OrderCart'

const orderStatus = [
  { label: "on the way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
]
const Order = () => {
  return (
    <div className='px-5 lg:px-20'>
      <Grid container sx={{ justifyContent: "space-between" }} >

        <Grid item xs={2.5} >
          <div className="sticky top-5 p-5 h-auto bg-white shadow-lg">
            <h1 className='font-bold text-lg'>Filter</h1>

            <div className='mt-10 space-y-4'>
              <h1 className='font-semibold'>Order Status</h1>

              {orderStatus.map((option, index) => (

                <div key={index} className='flex items-center'>
                  <input
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    defaultValue={option.value}
                    type="checkbox" />

                  <label
                    className='ml-3 text-sm text-gray-600'
                    htmlFor="">
                    {option.label}
                  </label>
                </div>
              ))}

            </div>
          </div>
        </Grid>


        {/* order cart */}
        <Grid item xs={9} >

          <div className='space-y-10'>
            {[1, 1, 1, 1].map((item, index) => (
              <div key={index} >
                <OrderCart />
              </div>
            ))}
          </div>


        </Grid>
      </Grid>
    </div>
  )
}

export default Order
