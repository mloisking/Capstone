import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom";


//create a login function
const Login = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  //For form submission and logging into the API
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(username);

    try {
      const data = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,

        })
      });
      const response = await data.json();
      setToken(response.token);
      return response
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <div className="username-field">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              name="username" /></div>

          <div className="password-field">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="***********"
              id="password"
              name="password"
            /></div>
          <div className="login-no-button-button">
            <button type="submit">Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
            </div>
        </form>
      </div>

    </>
  )
}
export default Login;