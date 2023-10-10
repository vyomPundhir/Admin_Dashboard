import React from 'react'
import Home from './pages/home/Home'
import Users from './pages/users/Users';
import User from "./pages/user/User";
import Product from "./pages/product/Product";
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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Layout = ()=>{
  return (
    <div className='main bg-[#2a3447] text-white'>
      <Navbar />
        <div className="container flex">
          <div className="menucontainer w-[250px] pt-[5px] pb-[5px] pl-[20px] pr-[20px] border-r-[2px] border-r-solid border-r-[#384256]">
            <Menu />
          </div>
          <div className="contentContainer pt-[5px] pb-[5px] pl-[20px] pr-[20px] w-5/6">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
            
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
      {
        path:"/users/:id",
        element:<User />,
      },
      {
        path:"/products/:id",
        element:<Product />,
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
