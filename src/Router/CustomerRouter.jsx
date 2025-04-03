import React from 'react'
import Navigation from '../Customer/components/Navigation'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/pages/HomePage'
import Cart from '../Customer/components/cart/Cart'
import Product from '../Customer/components/product/Product'
import ProductDetail from '../Customer/components/productDetails/ProductDetail'
import Footer from '../Customer/components/Footer/Footer'
import CheckOut from '../Customer/components/checkout/CheckOut'
import Order from '../Customer/components/order/Order'
import OrderDetails from '../Customer/components/order/OrderDetails'
import CheckOut1 from '../Customer/components/checkout/Checkout1'
import PaymentSuccess from '../Customer/components/Payment/PaymentSuccess'

const CustomerRouter = () => {
  return (
    <>

      <div>
        <Navigation />
      </div>

      <Routes>

        <Route path='/login' element={<HomePage />} />
        <Route path='/register' element={<HomePage />} />

        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:labelOne/:labelTwo/:labelThree' element={<Product />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route path='/checkout' element={<CheckOut />} />
        {/* <Route path='/checkout' element={<CheckOut1 />} /> */}

        <Route path='/account/order' element={<Order />} />
        <Route path='/account/order/:orderId' element={<OrderDetails />} />

        <Route path='/payment/:orderId' element={<PaymentSuccess />} />

      </Routes>


      <div>
        <Footer />
      </div>
    </>
  )
}

export default CustomerRouter
