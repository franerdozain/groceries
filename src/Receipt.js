import React from "react";

export default function Receipt({cartItems}) {
    const totalItems = cartItems.reduce((a, c) => a + c.quantity, 0)
    const totalCost = cartItems.reduce((a, c) => a + c.total, 0)
    return (
        <div>
            <div><h2>Receipt</h2></div>
            <table class="table">
                <thead className="table-dark ">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.groceryId}>
                            <th scope="row">{item.groceryName}</th>
                            <td>{item.quantity}</td>
                            <td>₪ {item.price}</td>
                            <td>₪ {item.total.toFixed(2)}</td>
                        </tr>

                    )
                        
                    )
                        
                    }
                    <tr className="border border-success border-2">
                        <th></th>
                        <th>{totalItems}</th>
                        <th></th>
                        <th>₪ {totalCost.toFixed(2)}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
