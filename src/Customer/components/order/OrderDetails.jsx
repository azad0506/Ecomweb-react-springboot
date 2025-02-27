import React from 'react'
import AddressCart from '../AddressCart/AddressCart'
import OrderTracker from './OrderTracker'
import { Box, colors, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-10  border border-gray-800'>
      <div className='shadow-lg m-3 border border-gray-800'>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCart />
      </div>

      {/* Order Tracker */}
      <div className="py-20">
        <OrderTracker activestep={3} />
      </div>

      {/* Order Details Section */}
      <Grid container className="space-y-5  mb-3" >

       { [1,1,1,1].map( (item,index)=>(
         <Grid item container className='shadow-xl rounded-md p-5  border-2 border-sky-700'
         sx={{ alignItems: "center", justifyContent: "space-between" }}>

         <Grid item xs={6} >
           <div className='flex items-center space-x-4'>
             <img className='w-20 h-20 object-cover rounded-md'
               src='https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
               alt='Product' />
             <div className='content space-y-1 text-gray-700'>
               <p className='font-semibold'>Product Title</p>
               <p className='text-sm'><span className='font-medium'>Color:</span> Black <span className='ml-2 font-medium'>Size:</span> M</p>
               <p className='text-sm'>Seller: Linearia</p>
               <p className='text-lg font-bold text-blue-600'>$190</p>
             </div>
           </div>
         </Grid>

         <Grid item xs={6} className='flex justify-end'>
           <Box className='flex items-center space-x-2 cursor-pointer text-deepPurple-500 hover:text-deepPurple-700'>
             <StarBorderIcon />
             <span className='text-sm font-medium'>Rate and Review Product</span>
           </Box>
         </Grid>
       </Grid>
       ))}


       

      </Grid>



    </div>
  )
}

export default OrderDetails
