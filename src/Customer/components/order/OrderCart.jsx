import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {
    let navigate=useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl  m-2 border border-green-600'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover'
                            src="https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />

                        <div className="content ml-5 space-y-2">
                            <p className='mb-2 '>title</p>
                            <p className='opacity-50 text-xs font-semibold'>size</p>
                            <p className='opacity-50 text-xs font-semibold'>color:black</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>987</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-500 mr-2' />
                            <span>Delivery on April </span>
                        </p>
                        <p className='text-xs'>
                          your item has been delivered  
                        </p>
                    </div>}
                    {false && <p>
                        <span> Expected Delivery on April </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCart
