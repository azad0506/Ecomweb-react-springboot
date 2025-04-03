import React from 'react'

import { Route, Routes } from 'react-router-dom'
import CustomerRouter from './Router/CustomerRouter'
import { Toaster } from 'react-hot-toast'

const App = () => {
    return (
        <div>

            <Toaster/>
            <Routes>
                <Route path='/*' element={<CustomerRouter/>}/>
            </Routes>
           
        </div>
    )
}

export default App
