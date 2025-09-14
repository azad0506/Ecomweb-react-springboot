import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Dashboard from './pages/Dashboard';
import CreateProductForm from './pages/CreateProductForm';
import ProductTable from './pages/ProductTable';
import OrdersTable from './pages/OrdersTable';
const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <DashboardIcon /> },
  // { name: "Account", path: "/admin/account", icon: <AccountCircleIcon /> }


]
const Admin = () => {
  return (
    <div>
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <div className="w-64 p-5 flex flex-col justify-between border-cyan-400 border-2">
          <ul>
          <h2 className="text-xl font-bold mb-5">Admin Panel</h2>
            {menu.map((item, index) =>
              item.name && item.path ? (
                <li key={index} className="mb-3">
                  {item.icon}
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ) : null
            )}
          </ul>

          {/* Bottom section: Account */}
          <div className="pt-5 border border-gray-300">
            <li className="flex items-center gap-2">
            <AccountCircleIcon /> 
              <Link to="/admin/account">Account</Link>
            </li>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <h1>hello AdminLayout</h1>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='products' element={<ProductTable/>}/>
              <Route path='product/create' element={<CreateProductForm/>} />
              <Route path='orders' element={<OrdersTable/>}/>
            </Routes>
        </div>

      </div>

    </div>
  )
}

export default Admin
