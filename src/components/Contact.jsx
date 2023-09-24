import React from 'react'
import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({

        name: "",
        email: "",
        message: "",
    })



    const { name, email, message } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.Id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
    }
    return (
        <div className="ContactForm-Container">
            <div className="ContactForm"><h2>Contact Us</h2></div>
                
            <form onSubmit={handleSubmit}>
                <div className="Name-field">
                <label htmlFor="name">Name</label>
                <input type="text"
                id="name"
                value={name}
                onChange={handleChange}
                /></div>

                <div className="Emailbox">
                <label htmlFor="email">Email</label>
                <input type="email"
                id="email"
                value={email}
                onChange={handleChange}
                /></div>

                <div className="Messagebox">
                    <label htmlFor="message">Message</label>
                    <input type="text-area"
                    id="message"
                    value={message}
                    onChange={handleChange}
                    /></div>
                    <div className="submit-button">
                    <button>Submit</button></div>

            </form>
            </div>
    )

   
}



export default Contact;