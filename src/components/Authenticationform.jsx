import {useState} from "react"

//create an authentication form for the token
export default function Authenticationform({buttonText, handleSubmit}){
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