import { useEffect, useState } from "react";
import React from "react"
import UpdateForm from "../../components/UpdateForm";
import { Link } from "react-router-dom";

export default function Cart({token}) {
  const [cart, setCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null);

  async function fetchUserCart() {
    try {
      const response = await fetch('https://fakestoreapi.com/carts/user/2')
      const result = await response.json();
      console.log(result);
      setCart(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {

    fetchUserCart();
  }, []);




  //Delete user cart
  const deleteCart = async () => {
    try {
      fetch('https://fakestoreapi.com/carts/6', {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log();
      setCart([])
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
     {token && <div className="Cart">
        {cart.map((cartItem) => (
          <div  key={cartItem.productId} className="CartItem">
            <p>Date: {cartItem.date}</p>
            {cartItem.products.map((product) =>
              <div>
                <div>
                  <p>ProductId: {product.productId}</p>
                  <p> Quantity: {product.quantity}</p>
                </div>
                <div className="CartActions">
                  <button onClick={() => setSelectedProduct(product)}>Update Cart</button>
                  <button onClick={deleteCart}>Delete Cart</button>
                </div>
              </div>
            )
            }
          </div>
        )
        )
        }
        {selectedProduct && <UpdateForm product={selectedProduct} fetchUserCart={fetchUserCart} />}
      <Link to ="/checkout">Go to Checkout</Link>
      </div>
}
    </>
  )

}


