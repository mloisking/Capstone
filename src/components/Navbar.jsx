import React from "react";
import { ShoppingCart } from 'phosphor-react'
import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <div class="Navbar-Container">
            <a href='/' className="site-title"><h1>Le-Feisty Gal</h1></a>
            <Link to='/'>Home</Link>

            <Link to='/category'>Category</Link>

            <Link to='/products'>Products</Link>

            <Link to='/login'>Log In</Link>

            <Link to='/contact'>Contact Us</Link>
          
            <Link to='/cart'> <ShoppingCart size3={35} />Cart</Link>
           
        </div>
    )
}
