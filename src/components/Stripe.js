import React from "react"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const PUBLIC_KEY="pk_test_51NtbtuE93v3wgN7fnHtmRDJYpHZwNGU6y0weRvMvDqZefuB3GZwFPEgFetwyJFzWlYHwVjdfgDNNsIJrD7BJYRRy002t8b8Wow"
const stripeTestPromise=loadStripe(PUBLIC_KEY)
export default function stripeContainer(){
return(
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>

        
    </Elements>

    
}