import React from 'react'
import Home from './pages/home/Home'
import Users from './pages/users/Users';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu'

const Layout = ()=>{
  return (
    <div className='main'>
      <Navbar />
        <div className="container">
          <div className="menucontainer">
            <Menu />
          </div>
          <div className="contentcontainer">
            <Outlet />
          </div>
        </div>
      <Footer />
    </div>
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "products",
    element: <Products />,
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
