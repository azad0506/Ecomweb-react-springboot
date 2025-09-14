import React from "react";
import App from "./App";
import "./index.css"

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stateRedux/store";

// createRoot(document.getElementById("root")).render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>

// )

// //for createbrowser Router
createRoot(document.getElementById("root")).render(
        <Provider store={store}>
            <App />
        </Provider>

)