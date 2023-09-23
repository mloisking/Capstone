
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState} from "react"
import './index.css'
import React from "react"
import Products from './Pages/Products/Products.jsx'
// import Users from './Pages/Users/Users.jsx'
import Navbar from "./components/Navbar.jsx"
import Cart from './Pages/Cart/Cart.jsx'
import Register from './Pages/Register/Register.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import Category from './components/Category.jsx'



export default function App() {
  const [currentForm, setCurrentForm] = useState("Login")
  const[token, setToken]=useState("");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  
  }
  //Create routes for each page
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home token={token} />}></Route>
          <Route path='/cart' element={<Cart setToken={setToken} />}></Route>
          <Route path='/products' element={<Products token={token} />}></Route>
          {/* <Route path='/users' element={<Users token={token} />}></Route> */}
          <Route path='/login' element={<Login token={token} />}></Route>
          <Route path='/register' element={<Register token={token} />}></Route>
          <Route path='/category' element={<Category token={token} />}></Route>
        </Routes>
      <div className="login-form">
        {currentForm === "Login" ? <Login onFormSwitch={toggleForm}/>: <div><Register onFormSwitch={toggleForm}/> </div>}
      </div>
      </div>
  );
}


