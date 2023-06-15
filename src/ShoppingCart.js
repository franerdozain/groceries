import React from "react";

function ShoppingCart({ cartItems }) {
  return (
    <ul className="list-group col-3 d-flex flex-wrap">
      {cartItems.map(item => (
        <li key={item.groceryId} className="list-group-item d-flex justify-content-between align-items-center">
          <span className="ml-4 h5">{item.groceryName}</span>
          <span className="ml-4">Quantity: {item.quantity}</span>
          <span className="ml-4">Price: ₪ {item.price}</span>
          <span className="ml-4">Total: ₪ {(item.total).toFixed(2)}</span>
          <i className="fas fa-circle-minus" style={{ color: "#000000" }}></i>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCart;
