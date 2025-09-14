import React, { Suspense } from 'react'
import Navigation from '../Customer/components/Navigation'
import Footer from '../Customer/components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const CustomerLayout = () => {
  return (
    <>
       <Navigation />
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  )
}

export default CustomerLayout
