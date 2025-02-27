import React from 'react'
import Navigation from './Customer/components/Navigation'
import HomePage from './Customer/pages/HomePage'
import Footer from './Customer/components/Footer/Footer'
import Product from './Customer/components/product/Product'
import ProductDetail from './Customer/components/productDetails/ProductDetail'
import Cart from './Customer/components/cart/Cart'
import CheckOut from './Customer/components/checkout/CheckOut'
import CheckOut1 from './Customer/components/checkout/Checkout1'
import Order from './Customer/components/order/Order'
import OrderDetails from './Customer/components/order/OrderDetails'
import { Route, Routes } from 'react-router-dom'
import CustomerRouter from './Router/CustomerRouter'

const App = () => {
    return (
        <div>

            <Routes>
                <Route path='/*' element={<CustomerRouter/>}/>
            </Routes>
            {/* <Navigation/> */}

            {/* <HomePage/> */}
            {/* <Product/> */}

            {/* <ProductDetail/> */}

            {/* <Cart/> */}

            {/* <CheckOut/> */}

            {/* <CheckOut1/> */}

            {/* <Order/> */}
            {/* <OrderDetails/> */}

            {/* <Footer/> */}
        </div>
    )
}

export default App
