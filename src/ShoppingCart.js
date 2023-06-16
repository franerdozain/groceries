import React from "react";

function ShoppingCart({ cartItems, removeFromCart }) {
    return (
        <ul className="list-group col-10 d-flex flex-wrap">
            {cartItems.map(item => (
                <li key={item.groceryId} className="list-group-item d-flex justify-content-between align-items-center">
                    <img src={item.imgURL} className="img-fluid rounded-start col-md-2" alt={item.groceryName} />
                    <span className="ml-4 h5">{item.groceryName}</span>
                    <span className="ml-4">Quantity: {item.quantity}</span>
                    <span className="ml-4">Price: ₪ {item.price}</span>
                    <span className="ml-4">Total: ₪ {item.total ? item.total.toFixed(2) : ""}</span>
                    <i className="fas fa-circle-minus" style={{ color: "#000000" }} onClick={() => removeFromCart(item)}></i>
                </li>
            ))}
        </ul>
    );
}

export default ShoppingCart;
