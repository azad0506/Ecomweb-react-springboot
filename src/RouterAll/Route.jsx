import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../ErrorPage';

// ✅ Lazy Imports
const CustomerLayout = lazy(() => import("./CustomerLayout"));
const HomePage = lazy(() => import("../Customer/pages/HomePage"));
const Cart = lazy(() => import("../Customer/components/cart/Cart"));
const Product = lazy(() => import("../Customer/components/product/Product"));
const ProductDetail = lazy(() => import("../Customer/components/productDetails/ProductDetail"));
const CheckOut = lazy(() => import("../Customer/components/checkout/CheckOut"));
const Order = lazy(() => import("../Customer/components/order/Order"));
const OrderDetails = lazy(() => import("../Customer/components/order/OrderDetails"));
const PaymentSuccess = lazy(() => import("../Customer/components/Payment/PaymentSuccess"));

// ✅ Lazy Admin Pages
const AdminLayout = lazy(() => import("./AdminLayout"));
const Dashboard = lazy(() => import("../Admin/components/pages/Dashboard"))
const ProductTable = lazy(() => import("../Admin/components/pages/ProductTable"))
const CreateProductForm = lazy(() => import("../Admin/components/pages/CreateProductForm"))
const OrdersTable = lazy(() => import("../Admin/components/pages/OrdersTable"))

export const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart", element: <Cart /> },
      { path: ":labelOne/:labelTwo/:labelThree", element: <Product /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "account/order", element: <Order /> },
      { path: "account/order/:orderId", element: <OrderDetails /> },
      { path: "payment/:orderId", element: <PaymentSuccess /> },
      { path: "login", element: <HomePage /> },
      { path: "register", element: <HomePage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
     errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <ProductTable /> },
      { path: "product/create", element: <CreateProductForm /> },
      { path: "orders", element: <OrdersTable /> },
    ],
  },
])

