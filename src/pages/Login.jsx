
import { useNavigate } from 'react-router-dom';
import Authenticationform from '../components/AuthenticationForm';

//create a login function
export default function Login({ setToken }) {
  const login = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: '',
            password: ''
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  const navigate=useNavigate()
  const  handleSubmit= async (e, username, password) => {
    e.preventDefault()
    const response=await login(username, password)
    setToken(response.data.token)
    localStorage.setItem("token", JSON.stringify(response.data.token))
    navigate("/")
  }
  return (
      <div>
        <h1>
          Login
        </h1>
        <Authenticationform buttonText="Login" handleSubmit={handleSubmit} />

      </div>
  
  )
}

