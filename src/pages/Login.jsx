import {useState} from "react"
import React from "react"
import { useNavigate } from "react-router-dom";


//create a login function
const Login = ()=> {
  const[username, setUsername]=useState("");
  const[password, setPassword]=useState("");
  const navigate=useNavigate()

  //For form submission and logging into the API
  const  handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(username);
 
    try {fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          username: username,
          password: password
    
        })
      });
      const response = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <>
    <div className="login-container">
    <form onSubmit={handleSubmit}>
      <div className="username-field">
      <label htmlFor="username">Username</label>
      <input value={username}
       onChange={(e)=>setUsername(e.target.value)} 
      type="text" 
      id="username"
       name="username" /></div>

       <div className="password-field">
      <label htmlFor="password">Password</label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)}
       type="password"
       placeholder="***********"
       id="password" 
       name="password" 
       /></div>
       <div className="login-no-button-button">
    <button type="submit">Login</button>
    <button onClick={()=>navigate("/register") }>Register</button></div>
    </form>
  </div>
  
   </>
  )
}
export default Login;