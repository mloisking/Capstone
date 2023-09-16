import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json();
        console.log(result);
        setProducts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllProducts();
  }, []);

  const updateProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1',{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         
              title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
              price: '109.95',
              description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.',
              image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
              category: 'mens clothing',
          }
      )
      });
    
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }  

    return (
      <div className='Products'>
        <button onClick={updateProduct}></button>
        {products.map((product) => {
          return (
            <div className="Product-Card" key={product.id}>
              <p>{product.title}</p>
              <p>{product.description}</p>
              <p>
              <img
                className="Product-Image"
                src={product.image} alt={product.title} width="150" height="200"></img> 
              </p>
              <p>${product.price}</p>
              <div>
              <button className="addToCartButtn">Add to Cart</button>
              </div>
              </div>
          )
        }
        )
      }
      </div>
    )}
    
      
  