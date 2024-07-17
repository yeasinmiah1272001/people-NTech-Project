import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './Component/Header.jsx'
import Service from './Component/Service.jsx'
import Contact from './Component/Contact.jsx'
import About from './Component/About.jsx'




const LayOut = () => {
  return (
    <div>
      <Header/>
     <Outlet/>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path:"/",
    element:<LayOut/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/service",
        element:<Service/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
