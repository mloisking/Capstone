
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Products from "./pages/Products.jsx"
import Users from "./pages/Users.jsx"
import Login from "./pages/Login.jsx"
import Cart from "./pages/Cart.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import './index.css'


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
      </Routes>
    </div>

  )
}



export default App