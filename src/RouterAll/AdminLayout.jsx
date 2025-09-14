import React, { Suspense } from 'react'
import Footer from '../Customer/components/Footer/Footer'

const AdminLayout = () => {
  return (
    <div>
     
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Outlet />
            </Suspense>
      
            <Footer />
    </div>
  )
}

export default AdminLayout
