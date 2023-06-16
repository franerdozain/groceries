import React from "react";

function Button ({handleOrder}) {
    return(
        <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" onClick={handleOrder}>Order</button>
           
        </div>
    )
}

export default Button;