import { useState } from "react";

export default function Cart(){
    const [cart, setCart]=useState()
    function deleteItem(id) {
setCart(cart.filter(item => item.id !== id));
}

    return(
        <div>
            <h1>Cart</h1>
            <ul>
        {cart.map(item => (
          <li key={item.id}>{item.title} {item.price} <span onClick={() => deleteItem(item.id)}>❌</span></li>
        ))}
      </ul>
      <p>Total = {cart.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
    )
           
        };
   