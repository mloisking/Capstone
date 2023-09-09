
  
import { useNavigate } from 'react-router-dom';
import Authenticationform from '../components/AuthenticationForm';

//Sign up for an account with username and password
export default function Users({setToken}) {
  const navigate=useNavigate()
  const  handleSubmit= async (e, username, password) => {
    e.preventDefault()
    let response=await getUsers(username, password)
    setToken(response.data.token)
    localStorage.setItem("token", JSON.stringify(response.data.token))
    navigate("/login")
  }

  return (
    <div>
      <h1>
        Users
      </h1>
      <Authenticationform buttonText="Submit" handleSubmit={handleSubmit} />

    </div>
  )
}