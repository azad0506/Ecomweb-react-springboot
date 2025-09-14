import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from 'react'
import { Button } from '@headlessui/react';
import { removeCartItem, updateCartItem } from '../../../stateRedux/Cart/cartAction';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    // console.log("item", item)

    let dispatch = useDispatch();
    // 🔹 Increase Quantity
    const handleIncrease = () => {
        let data = { data: { quantity: item.quantity + 1 }, cartItemId: item?.id };
        dispatch(updateCartItem(data));
    };
    // 🔹 Decrease Quantity
    const handleDecrease = () => {
        
        let data = { data: { quantity: item.quantity - 1 }, cartItemId: item?.id };
        dispatch(updateCartItem(data));
        }

        // 🔹 Remove Item
        const handleRemove = () => {
            let data={ cartItemId: item.id }
            dispatch(removeCartItem(data));
        };
        return (
            <div className='p-5 shadow-lg border rounded-md m-5'>

                <div className='flex items-center'>
                    <div className="image w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                        <img className='w-full h-full object-cover'
                            src={item?.product?.imageUrl} alt="" />

                    </div>
                    <div className="content ml-5 space-x-1">
                        <p className='font-semibold'>{item?.product.title}</p>
                        <p className='opacity-70'>size:{item?.size}</p>
                        <p className='opacity-70 mt-2'>{item?.product.brand}</p>

                        <div className="flex space-x-3 items-center   text-gray-900 pt-6">
                            <p className='font-semibold'>₹{item?.product.discountPrice}</p>
                            <p className='opacity-50 line-through'>₹{item?.product.price}</p>
                            <p className='text-green-600 font-semibold'>₹ {item?.product.discountPrsent}% off</p>
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
                        <IconButton
                        onClick={handleDecrease} disabled={item?.quantity<=1}
                        className="text-gray-700">
                            <RemoveCircleOutline fontSize="large" />
                        </IconButton>
                        <span className='py-1 px-6 border rounded-sm text-lg font-semibold'>{item?.quantity}</span>
                        <IconButton
                            onClick={handleIncrease} 
                            className="text-gray-700">
                            <AddCircleOutline fontSize="large" />
                        </IconButton>
                    </div>

                    {/* Remove Button */}
                    <button
                        onClick={handleRemove}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition ">
                        Remove
                    </button>
                </div>


            </div>
        )
    }

    export default CartItem
