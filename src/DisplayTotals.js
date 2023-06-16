import React from "react";
import Button from "./Buttons";

function DisplayTotals({ cartItems, handleOrder }) {
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.total, 0);

    return (
        <div className="col-20 d-grid gap-1 ">
            <h2 className="text-center">Cart Totals</h2>
            <p className="text-center">Total Items: {totalCount}</p>
            <p className="text-center">Total Price: ₪ {totalPrice.toFixed(2)}</p>
            <Button className="btn btn-primary" handleOrder={handleOrder} />
        </div>
    );
}

export default DisplayTotals;
