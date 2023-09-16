
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Products from "./pages/Products/Products"
import Users from "./pages/Users/Users"
import Cart from "./pages/Cart/Cart"
import Navbar from "./components/Navbar.jsx"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home/Home"
import Register from "./pages/SignUp/SignUp"
import './index.css'
import React from "react";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  //Create routes for each page
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home token={token} />}></Route>
        <Route path='/Cart' element={<Cart setToken={setToken} />}></Route>
        <Route path='/Products' element={<Products token={token} />}></Route>
        <Route path='/Users' element={<Users token={token} />}></Route>
        <Route path='/Login' element={<Login setToken={setToken} />}></Route>
        <Route path='/Register' element={<Register setToken={setToken} />}></Route>
      </Routes>
    </div>


  )
  }
export default App
