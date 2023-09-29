
import React from 'react'
import { useState } from 'react'


export default function PaymentForm() {
    const [formData, setFormData] = useState({

        name:"",
        cardnumber: "",
        expdate: "",
        cid: "",
    
    })

    const { name, cardnumber,expdate, cid,}=formData;
  

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
    }
    return (
        <div className="Payment-Container">
            <div className="Checkout"><h2>Payment Details</h2></div>
            <form onSubmit={handleSubmit}>
                <div className="Name-field">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name"
                        value={name}
                        onChange={handleChange}
                    /></div>

                <div className="cardnumber">
                    <label htmlFor="cardnumber">card number</label>
                    <input type="cardnumber"
                        id="cardnumber"
                        value={cardnumber}
                        onChange={handleChange}
                    /></div>

                    <div className="expdate">
                        <label htmlFor="expdate">Exp Date</label>
                        <input type="expdata"
                            id="expdate"
                            value={expdate}
                            onChange={handleChange}
                        />
                        </div>
                        
                                <div className="cid">
                            <label htmlFor="cid">CID</label>
                            <input type="cid"
                                id="cid"
                                value={cid}
                                onChange={handleChange}
                                />
                                </div>
                                <button type onclick="submit"><b>Pay Now</b></button>
                                

                    </form>
                    </div>
    )
};
               
                  

        


            



