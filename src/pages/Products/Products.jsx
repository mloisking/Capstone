import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



//Get all products from API
export default function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('asc');
  const [showDetails, setShowDetails] = useState(false)


  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?sort=${sortBy}`)
        const result = await response.json();
        console.log(result);
        setProducts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllProducts();
  }, [sortBy]);

  //Get all categories of products from API
  useEffect(() => {
    async function fetchAllCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const result = await response.json();
        console.log(result);
        setCategories(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllCategories();
  }, [])
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
    fetch('https://fakestoreapi.com/carts', {
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

  const handleChange = (e) => {
    setSortBy(e.target.value)
  }
  //Map over and render the array of products and categories

  return (
    <>
      <div className="filter-wrapper">
        <span></span>
        <label>SortBy</label>
        <select value={sortBy} onChange={handleChange}>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </div>
      <div className='Products'>
        {products.map((product) => (
          <div className="Product-Card" key={product.id}>
            <div>
              <img
                className="Product-Image"
                onClick={() => setShowDetails(showDetails === product.id ? null : product.id)}
                src={product.image} alt={product.title}
              />
            </div>
            <p><b>{product.title}</b></p>
            {showDetails === product.id &&
              <div className="product-description">
                <p>{product.description}</p>
                <p>{product.category}</p>
              </div>
            }

            <p>${product.price}</p>

            <div className="button-wrapper">
              <button className="addToCartButtn" onClick={() => handlecart(product)}>Add to Cart</button>
              <button type="Show-Details-button" onClick={() => setShowDetails(showDetails === product.id ? null : product.id)}>
                {showDetails === product.id ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
          </div>
        ))}
        <div className="Categories">
          {categories.map((category) => (
            <div className="Category" key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}












