import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import CustomerRouter from './Router/CustomerRouter'
import { Toaster } from 'react-hot-toast'
import AdminRouter from './Router/AdminRouter'
import { useSelector } from 'react-redux'
import LoginForm from './Customer/Auth/LoginForm'

const App = () => {
    const auth = useSelector((state) => state.auth);

    const user = auth.user; // Profile fetched user
    console.log("user in App Compo=",user);
    return (
        <div>

            <Toaster />
            <Routes>
                <Route path='/*' element={<CustomerRouter/>}/>
                <Route path='/admin/*' element={<AdminRouter/>} />

            </Routes>
            {/* <Routes>
                <Route path="/admin/*" element={
                    user?.role === "ROLE_ADMIN"
                        ? <AdminRouter />
                        : <Navigate to="/" />
                } />

                <Route path="/*" element={<CustomerRouter />} />
            </Routes> */}
        </div>
    )
}

export default App


// import React from 'react'

// import { Navigate, Route, RouterProvider, Routes } from 'react-router-dom'
// import CustomerRouter from './Router/CustomerRouter'
// import { Toaster } from 'react-hot-toast'
// import AdminRouter from './Router/AdminRouter'
// import { useSelector } from 'react-redux'
// import LoginForm from './Customer/Auth/LoginForm'
// import { myRoute } from './RouterAll/Route'

// const App = () => {
//     // // const auth = useSelector((state) => state.auth);

//     // const user = auth.user; // Profile fetched user
//     // console.log("user in App Compo=",user);
//     return (
//         <div>

//             <Toaster />
           
//             <RouterProvider router={myRoute}>

//             </RouterProvider>
//         </div>
//     )
// }

// export default App

