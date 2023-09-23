import {useState} from "react"
import React from "react"


//create a login function
const Login = (props)=> {
  const[username, setUsername]=useState("");
  const[password, setPassword]=useState("");

  //For form submission and logging into the API
  const  handleSubmit= (e)=>{
    e.preventDefault()
    console.log(username);
  }
  
  const Login = async () => {

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
    <div className="auth-form-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input value={username}
       onChange={(e)=>setUsername(e.target.value)} 
      type="text" 
      id="username"
       name="username" />
      <label htmlFor="password">Password</label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)}
       type="password"
       placeholder="***********"
       id="password" 
       name="password" 
       />
    <button type="submit">Login</button>
    </form>
    <button onClick={()=>props.onFormSwitch('register')}>Already have an account? Login here</button>
   </div>
   </>
  )
}
export default Login;