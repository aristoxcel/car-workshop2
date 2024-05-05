import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import Context from './Context/Context.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Context>
  <RouterProvider router={router}/>
  <Toaster />
  </Context>
  </React.StrictMode>,
)
