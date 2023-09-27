import React from 'react'
import './index.css' 
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
