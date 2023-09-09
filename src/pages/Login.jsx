
import { useNavigate } from 'react-router-dom';
import Authenticationform from '../components/AuthenticationForm';

//create a login function
export default function Login({ setToken }) {
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
        <Authenticationform buttonText="Submit" handleSubmit={handleSubmit} />

      </div>
  
  )
}