import { useState } from "react";

export default function UpdateForm({product, fetchUserCart}) {
    const [productQuantity, setProductQuantity]=useState(0)
    //Update a user cart
    const handleSubmit = async (e) => {
    e.preventDefault()
        try {
            const response = await fetch(`https://fakestoreapi.com/carts/${product.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        userId: 2,
                        date:product.date,
                        products: [{ productId: product.productId, quantity: product.productQuantity }]
                    }
                )
            });
            const result = await response.json();
            console.log(result);
            fetchUserCart()
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>New Quantity</label>
            <input type="number" onChange={(e)=> setProductQuantity(e.target.value)} />
            <button type="submit">Update Product</button>
        </form>
    )
}