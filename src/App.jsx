import React from 'react'
import Home from './pages/home/Home'
import Users from './pages/users/Users';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const Layout = ()=>{
  return (
    <div className='main'>
      <Navbar />
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
