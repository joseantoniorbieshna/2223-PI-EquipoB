import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Landing from './routes/Landing.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing></Landing>,
    },
    {
      path: "/home",
      element: <Home></Home>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>

)
