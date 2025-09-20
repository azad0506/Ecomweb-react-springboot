import React, { Suspense } from 'react'
import Footer from '../Customer/components/Footer/Footer'
import ErrorBoundary from '../ErrorBoundary'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
            <ErrorBoundary>
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Outlet />
            </Suspense>
      </ErrorBoundary>
            <Footer />
    </div>
  )
}

export default AdminLayout
