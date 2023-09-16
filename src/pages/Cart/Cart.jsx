import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    async function fetchAllCarts() {
      try {
        const response = await fetch('https://fakestoreapi.com/carts/user/2')
        const result = await response.json();
        console.log(result);
        setCart(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllCarts();
  }, []);

  return (
    <div className='Cart'>
      {cart.map((cartItem) => {
        return (
          <div className="CartItem" key={cartItem.id}>
            <p>Date: {cartItem.date}</p>
            {cartItem.products.map((product) => {
              return (
                <div>
                  <p>ProductId: {product.productId}</p>
                  <p> Quantity: {product.quantity}</p>
                </div>
              )
            }
            )}
          </div>
        )
      }
      )
      }
    </div>
  )
}

