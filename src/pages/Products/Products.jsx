import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('asc');
  // const[filterBy, setFilterBy]=useState(price)
  
//Get all products from API
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

  // function sortByPrice(ascending) {
  //   filteredProducts.sort((a, b) => {
  //     if (!ascending) {
  //       return b.price - a.price
  //     }
  //     return a.price - b.price
  //   })
  // }
  // let filteredProducts = products;
  // if (selectedCategory !== 'all') {
  //   filteredProducts = products.filter(product => product.category === selectedCategory);
  // }
  // filteredProducts = filteredProducts.filter(product => product.price <= priceRange);
  // console.log(products);
  // console.log(sortBy);
  // if(sortBy === 'price') {
  //   sortByPrice();
  // } else if (sortBy === 'rating') {
  //   filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  // }
  
  //Update a product from API
  // const updateProduct = async () => {
  //   try {
  //     const response = await fetch('https://fakestoreapi.com/products/1', {
  //       method: "PUT",
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({

  //         title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //         price: '109.95',
  //         description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.',
  //         image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //         category: 'mens clothing',
  //       }
  //       )
  //     });

  //     const result = await response.json();
  //     console.log(result);
  //     return result
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }


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
  async function handlecart(product){
    let date=new Date()
    date=formatDate(date)


    //Get users cart
    fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:2,
                    date:date,
                    products:[{productId:product.id,quantity:1}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  }

  const handleChange = (e) =>{
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
        <option value="priceRange">price</option>
      </select>
      </div>
    <div className='Products'>
      {products.map((product) => {
        return (
          <div className="Product-Card" key={product.id}>
            <div>
             <img
                className="Product-Image"
                src={product.image} alt={product.title}/></div>
            <p><b>{product.title}</b></p>
            <div className="product-description">
              <p>{product.description}</p></div>
            <p>${product.price}</p>
            
            <div className="button-wrapper">
            <button className="addToCartButtn" onClick={()=>handlecart(product)}>Add to Cart</button>
            </div>
          </div>
        )
      }
      )
      }
      <div className="Categories">
        {categories.map((category) => {
          return(
          <div className="Category" key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </div>
          )
        }
        )
        }
      </div>

    </div>
   </>
  )
}