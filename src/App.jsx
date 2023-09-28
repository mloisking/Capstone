
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState} from "react"
import React from "react"
import Products from './Pages/Products/Products.jsx'
import Users from './Pages/Users/Users.jsx'
import Navbar from "./components/Navbar.jsx"
import Cart from './Pages/Cart/Cart.jsx'
import Register from './Pages/Register/Register.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import Category from './components/Category.jsx'
import SingleUser from "./components/SingleUser"
import Contact from "./components/Contact.jsx"
import Checkout from "./components/checkout"
import './index.css'
import './App.css'

// import './logo.jsx'

// import {loadStripe} from '@stripe/stripe-js';
// import '@stripe/stripe-js';


export default function App() {
  const[token, setToken]=useState("");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  
  }
  //Create routes for each page
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/Home' element={<Home token={token} />}></Route>
          <Route path='/cart' element={<Cart token={token} />}></Route>
          <Route path='/products' element={<Products token={token} />}></Route>
          <Route path='/users' element={<Users token={token} />}></Route>
          <Route path='/singleuser/:id' element={<SingleUser token={token} />}></Route>
          <Route path='/login' element={<Login setToken={setToken} />}></Route>
          <Route path='/register' element={<Register token={token} />}></Route>
          <Route path='/category' element={<Category token={token} />}></Route>
          <Route path='/contact' element={<Contact token={token} />}></Route>
          <Route path='/checkout' element={<Checkout token={token} />}></Route>
        </Routes>
      
      </div>
  );
}


