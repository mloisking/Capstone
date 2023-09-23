
import {useState, useEffect} from "react"


export default function Category(){
    const[selectedCategory, setSelectedCategory]=useState([])
    const [category, setCategory] = useState([]);

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

  

return(
      <>
     <div className="Selected-Category">
       {selectedCategory.map((product)=>(
            <div className="Product" key={product.id}>
              <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <div>
                <img
                  className="Product-Image"
                  src={product.image} alt={product.title} width="150" height="200"></img>
              </div>
              <p>${product.price}</p>
              </div>
        ))}
        </div>

<div className="Sort">
<button onClick ={() => setCategory("electronics")}>Electronics</button>
<button onClick ={()=> setCategory("jewelry")}>Jewelry</button>
<button onClick ={()=> setCategory("women's clothing")}>Women's Clothing</button>
<button onClick ={()=> setCategory("men's clothing")}>Men's Clothing</button>
</div>
</>
)
       }