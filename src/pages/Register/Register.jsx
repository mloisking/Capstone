import { useState } from "react"
import React from "react"


//Sign up for an account with username and password
const Register=(props) =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(username);
        const [firstname, lastname] = name.split("");

        try {
            const response = await fetch('https://fakestoreapi.com/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        email: email,
                        username: username,
                        password: password,
                        name: {
                            firstname: firstname,
                            lastname: lastname,
                        },
                        address: {
                            city: city,
                            street: street,
                            number: number,
                            zipcode: zipcode,
                            geolocation: {
                                lat: lat,
                                long: long,
                            }
                        },
                        phone: phone,
                    }
                )
            })
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.error
        }
    };

    return (
        <>
            <div className="auth-form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name" />

                    <label htmlFor="email">Email</label>
                    <input value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="**********"
                        id="username"
                        name="email"
                    />
                    <label htmlFor="username">Username</label>
                    <input value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="username"
                        id="username"
                        name="username" />
                        
                    <label htmlFor="password">Password</label>
                    <input value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="***********"
                        id="password"
                        name="password"
                    />
                   
                    <button type="Submit">Submit</button>
                </form>
                <button onClick={() => props.onformSwitch('login')}>Don't have an account? Register here</button>
            </div>
        </>
    )

}

export default Register;
