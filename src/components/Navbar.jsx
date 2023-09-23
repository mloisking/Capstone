import React from "react";
import { ShoppingCart } from 'phosphor-react'
import {Link} from "react-router-dom"


export default function Navbar() {
    return (
        <div className='nav'>
            <a href="/" className="site-title"><h1>Le~Feisty Gal</h1></a>
            <ul>
                <li>
                    <Link to="/"><b><h2>Home</h2></b></Link>
                </li>
                
                <li>
                <Link to="/Login"><b><h2>Login</h2></b></Link>
                </li>

                <li>
                    <Link to="/Products"><b><h2>Products</h2></b></Link>
                    
                </li>

                <li>
                <Link to="/Category"><b><h2>Category</h2></b></Link>
                </li>

                <li>
                    <Link to="/Register"><b><h2>Register</h2></b></Link>
                </li>

                <li>
                    <Link to="/Cart"> <ShoppingCart size={35}/>Cart</Link>
                </li>

            </ul>
        </div>
    
    )
}

