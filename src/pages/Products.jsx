import { useEffect } from 'react';
import { useState } from 'react';



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

  return (
    <div className='Products'>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img
            className="Products"
              src={product.image} alt={product.title} width="150" height="200"></img>
            
          </div>
        )
      }
      )
      }
    </div>
  )
}

