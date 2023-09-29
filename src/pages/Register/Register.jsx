import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"


//Sign up for an account with username and password
const Register = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            const response = await fetch('https://fakestoreapi.com/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        email: email,
                        password: password,
                        name: { firstName: firstName, lastName: lastName }

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
    //Create form for capturing information from registration
    return (
        <>
            <div className="Register-Container">
                <form onSubmit={handleSubmit}>
                    <div className="first-name-field">
                        <label htmlFor="firstname">First Name</label>
                        <input value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            id="firstname"
                            name="firstname" /></div>
                    <div className="last-name-field">

                        <label htmlFor="lastname">Last Name</label>
                        <input value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            id="lasttname"
                            name="laststname" /></div>

                    <div className="email-field">
                        <label htmlFor="email">Email Info</label>
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="**********"
                            id="email"
                            name="email"
                        /></div>

                    <div className="password-field">
                        <label htmlFor="password">Password</label>
                        <input value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="***********"
                            id="password"
                            name="password"
                        /></div>
                    <div className="Register-no-button-button"></div>
                    <button type="submit"><b>Create Account</b></button>
                    <button onClick={() => navigate("/login")}>Already have an account? Click to log in</button>
                </form>
            </div>
        </>
    )

}

export default Register;
