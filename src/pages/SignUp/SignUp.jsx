
//Sign up for an account with username and password
export default function Signup(){
  const[username, setUsername]=useState("")
  const[password, setPassword]=useState("")

  return(
      <div>
          <form onSubmit={(e) => handleSubmit(e,username, password)}>
          <label htmlFor='username'>Username</label>
              <input
              type="text"
              id="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}/>
              <label htmlFor='password'>Password</label>
              <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
              <button type="submit">{buttonText}</button>
            
          </form>
      </div>
  )
}