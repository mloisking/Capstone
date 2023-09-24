import { useState} from "react"
import React from "react"
import {CardElement, useElement, useStripe} from "@stripe/react-stripe-js"
import axios from "axios"

const CARD_OPTIONS={

}
export default function PaymentForm(){
    const [success, setSuccess]=useState(false)
    const stripe=useStripe()
    const elements=useElements()

        const handleSubmit=async(e)=>{
            e.preventDefault()

            const {error, paymentMethod}=await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElements(CardElement)

        })
}

    if(!error){
        try{
            const{id}= paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 10000,
                id
        })
        if(response.data.success) {
            console.log("success payment")
            setSuccess(true)
        }

    }catch(error){
console.log("Error", error)
}

} else {
console.log(error.message)

}

    return(
<>
(!success?
<form onSubmit={handleSubmit}>
<fieldset className="FormGroup">
    <div className="FormRow">
        <CardElement options={CARD_OPTION}/>
    </div>
</fieldset>
<button>Pay</button>
</form>
:
<div>
    <h2>You just bought</h2>
</div>
)
</>


    )
}