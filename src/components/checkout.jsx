
import React from 'react'
import { useState } from 'react'

export default function Shipping() {
    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        address: "",

    })
    const { name, email, phone, address } = formData;


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
    }
    return (
        <div className="Checkout-Container">
            <div className="Shipping">
                <h2>Shipping Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="Name-field">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="emailr">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit"><b>Submit</b></button>
                </form>
            </div>
        </div>
    );
} 