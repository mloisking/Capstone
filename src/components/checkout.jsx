import { useState } from "react";

export default function Checkout() {
    const [submit, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }
    return (
        <div>
            <h1>Checkout</h1>
            {
                submit ? <p>Thank you for submitting, we will contact you</p> :


                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Name
                            </label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div>
                            <label>
                                Email
                            </label>
                            <input type="email" name="email" id="email" required />
                        </div>

                        <div>
                            <label>
                                Address
                            </label>
                            <textarea name="name" id="address" cols="30" rows="10" required></textarea>
                        </div>
                        <button type="submit">Submit</button>


                    </form>
            }
        </div>

    )
}