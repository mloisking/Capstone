import { NavLink as Link } from "react-router-dom";

//Create a navigation bar
export default function Navbar(){
    return(
        <nav>
            <ul>
            <li>
                <Link to ="/">Home</Link>
                </li>
                <li>
                <Link to ="/Login">Login</Link>
                </li>
                <li>
                <Link to ="/Users">Users</Link> 
                </li>
                <li>
                <Link to ="/Products">Products</Link> 
                </li>
                <li>
                <Link to ="/Cart">Cart</Link>   
                </li>
                
            </ul>
        </nav>
      
    )
}