import { useEffect, useState } from "react";
import React from "react"

export default function Cart() {
  const [cart, setCart] = useState([])
  const[updateCart, setUpdateCart]=([])


  useEffect(() => {
    async function fetchAllCarts() {
      try {
        const response = await fetch('https://fakestoreapi.com/carts')
        const result = await response.json();
        console.log(result);
        setCart(result);
      } catch (error) {
        console.error(error);
      }
    }
  
  fetchAllCarts();
}, []);

//Update a user cart
const updateUserCart = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/carts/7',{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
            body:JSON.stringify(
                {
                    userId:3,
                    date:2019-12-10,
                    products:[{productId:1,quantity:3}]
                }
            )
              });
        const result = await response.json();
        console.log(updateCart);
        setUpdateCart(result)
      } catch (err) {
        console.error(err);
      }
    };

    //Delete user cart
    const deleteCart=async() =>{
      try{
        fetch('https://fakestoreapi.com/carts/6',{
            method:"DELETE",
            headers: {
              'Content-Type': 'application/json',
            },
          });
    console.log();
    setCart([])
  } catch (err) {
    console.error(err);
  }
  
  return (
    <>
    <div className="Cart">
      {cart.map((cartItem) => (
          <div className="CartItem" key={"cart"+cartItem.id}>
            <p>Date: {cartItem.date}</p>
            {cartItem.products.map((product) =>
            <div key={product.id}>
                <div>
                  <p>ProductId: {product.productId}</p>
                  <p> Quantity: {product.quantity}</p>
                </div>
            
          </div>
            )
    }
            </div>
  )
      )
  }       
<div className="CartActions">
<button onClick={updateUserCart}>Update Cart</button>
<button onClick={deleteCart}>Delete Cart</button>
</div>
</div>
</>
  )
}
}


