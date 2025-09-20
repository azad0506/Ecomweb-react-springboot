import React, { Suspense } from 'react'
import Navigation from '../Customer/components/Navigation'
import Footer from '../Customer/components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary'

const CustomerLayout = () => {
  return (
    <>
       <Navigation />
       <ErrorBoundary> 
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Outlet />
      </Suspense>
      </ErrorBoundary>

      <Footer />
    </>
  )
}

export default CustomerLayout
