import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { getOrderById } from '../../../stateRedux/Order/OrderAction';
import { updatePayment } from '../../../stateRedux/payment/PaymentAction';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../order/OrderTracker';
import AddressCart from '../AddressCart/AddressCart';

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();

    const dispatch = useDispatch();

    const { orderId } = useParams();
    console.log("orderId payment success", orderId);

    const location = useLocation();
    const urlParam = new URLSearchParams(location.search);

    useEffect(() => {
        setPaymentId(urlParam.get("razorpay_payment_id")); //takes from url which is same
      const   extractedPaymentStatus=urlParam.get("razorpay_payment_link_status")//otherwise not proper hit api

        if (extractedPaymentStatus) {
            setPaymentStatus(extractedPaymentStatus);
            console.log("Extracted Payment Status:", extractedPaymentStatus);
        }
    }, [location.search]);  // Runs whenever the URL parameters change

    const { order } = useSelector(store => store)
    console.log("order success", order)

    useEffect(() => {
        const data = { orderId, paymentId };
        dispatch(getOrderById(orderId))

        if(paymentId && orderId){

            dispatch(updatePayment(data))
        }
    }, [orderId, paymentId])
    return (
        <div>
            <h1>Payment success page</h1>

            <div className='px-2 lg:px-36' >

                <div className="flex flex-col justify-center items-center">

                    <Alert
                        variant='filled'
                        severity='success'
                        sx={{ mb: 6, width: "fit-content" }}
                    >
                        <AlertTitle>payment success</AlertTitle>
                        Congratulation your order get placed
                    </Alert>
                </div>

                <OrderTracker activeStep={1} />
 

               <Grid container className='space-y-5 py-5 pt 20'>

                    {order.order?.orderItem.map((item,index) => (
                        <Grid container item className='shadow-xl rounded-md p-5'  key={item.id || index} 
                        sx={{ alignItems: "center", justifyContent: "space-between" }}>

                        <Grid item xs={6}>

                            <div className='flex items-center'>
                                <img className='w-[5rem] h-[5rem] object-cover object-top'
                                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
                                    alt="" />

                                <div className='ml-5 space-y-2'>
                                    <p>{item.product?.title}</p>
                                    <div className='opacity-50 text-xs font-semibold'>
                                        <span>color: {item.product?.color}</span>
                                        {/* <span>size: {item.product?.size}</span> */}
                                    </div>
                                    <p>seller:{item.product?.brand}</p>
                                    <p>price: ₹{item.product?.price}</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item>
                            <AddressCart address={order.order?.shippingAddress}/>
                        </Grid>

                    </Grid>))}

                </Grid>

            </div>
        </div>
    )
}

export default PaymentSuccess
