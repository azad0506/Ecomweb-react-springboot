import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from 'react'
import { Button } from '@headlessui/react';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md m-5'>

            <div className='flex items-center'>
                <div className="image w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className='w-full h-full object-cover'
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70" alt="" />

                </div>
                <div className="content ml-5 space-x-1">
                    <p className='font-semibold'>title</p>
                    <p className='opacity-70'>size:l, white</p>
                    <p className='opacity-70 mt-2'>seller brand name</p>

                    <div className="flex space-x-3 items-center   text-gray-900 pt-6">
                        <p className='font-semibold'>₹199</p>
                        <p className='opacity-50 line-through'>₹211</p>
                        <p className='text-green-600 font-semibold'>₹5% off</p>
                    </div>
                </div>

                <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className="flex items-center space-x-2"></div>
                </div>



            </div>

            {/* Quantity and Remove Button */}

            <div className="flex  items-center mt-5 ">
                {/* Quantity Control */}
                <div className="flex items-center space-x-2">
                    <IconButton className="text-gray-700">
                        <RemoveCircleOutline fontSize="large" />
                    </IconButton>
                    <span className='py-1 px-6 border rounded-sm text-lg font-semibold'>3</span>
                    <IconButton className="text-gray-700">
                        <AddCircleOutline fontSize="large" />
                    </IconButton>
                </div>

                {/* Remove Button */}
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition ">
                    Remove
                </button>
            </div>


        </div>
    )
}

export default CartItem
