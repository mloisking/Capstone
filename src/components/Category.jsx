
import { useState, useEffect } from "react"


export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState([])
  const [category, setCategory] = useState([]);
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    async function fetchSelectedCategory() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        const result = await response.json();
        console.log(result);
        setSelectedCategory(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedCategory();
  }, [category])

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  async function handlecart(product) {

    let date = new Date()
    date = formatDate(date)

    //Get users cart

    fetch('https://fakestoreapi.com/carts/', {
      method: "POST",
      body: JSON.stringify(
        {
          userId: 2,
          date: date,
          products: [{ productId: product.id, quantity: 1 }]
        }
      )
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }


  return (
    <>
      <div className="Selected-Category">
        {selectedCategory.map((product) => (
          <div className="Product" key={product.id}>
            <p>{product.title}</p>
            <p className={showDetails ? 'show' : 'hide'}>{product.description}</p>
            <p className={showDetails ? 'show' : 'hide'}> {product.category}</p>
            <div>
              <img
                className="Product-Image" onClick={() => { setShowDetails(true) }}

                src={product.image} alt={product.title} width="150" height="200"></img>
              <button onClick={() => handlecart(product)}>Add to Cart</button>
              <button onClick={() => setShowDetails(true)}>Show Details</button>
            </div>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      <div className="Sort-Category">
        <button onClick={() => setCategory("electronics")}>Electronics</button>
        <button onClick={() => setCategory("jewelry")}>Jewelry</button>
        <button onClick={() => setCategory("women's clothing")}>Women's Clothing</button>
        <button onClick={() => setCategory("men's clothing")}>Men's Clothing</button>
      </div>
    </>
  )
}