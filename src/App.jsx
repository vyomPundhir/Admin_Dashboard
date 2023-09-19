import React from 'react'
import Home from './pages/home/Home'
import Users from './pages/users/Users';
import "./styles/index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu'
import Login from './pages/login/Login';

const Layout = ()=>{
  return (
    <div className='main bg-[#2a3447] text-white'>
      <Navbar />
        <div className="container flex">
          <div className="menucontainer w-[250px] pt-[5px] pb-[5px] pl-[20px] pr-[20px] border-r-[2px] border-r-solid border-r-[#384256]">
            <Menu />
          </div>
          <div className="contentContainer pt-[5px] pb-[5px] pl-[20px] pr-[20px] w-5/6">
            <Outlet />
          </div>
        </div>
      <Footer />
    </div>
  )
}



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/users",
        element:<Users/>,
      },
      {
        path:"/products",
        element:<Products/>,
      },
    ]
  },
  {
    path:"/login",
    element:<Login />,
  }
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
