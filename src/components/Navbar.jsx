
import React from "react";
import {ShoppingCart} from 'phosphor-react'


//Create a navigation bar
export default function Navbar() {
    return(
    <div className='nav'>
        <a href ="/" className="site-title"><h1>Le~Fiesty Gal</h1></a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>

                <li>
                    <a href="/Products">Products</a></li>
                    <li>
                    <a href="/Cart"> <ShoppingCart size={32}/></a>
                </li>

            </ul>
        </div>
    )
}

