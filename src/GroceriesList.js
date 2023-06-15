import React, { useState } from "react";
import groceriesData from "./GroceriesData";

function GroceriesList({ addToCart }) {
  const [stock, setStock] = useState([]);

  const handleDownStock = grocery => {
    if (grocery.stock > 0) {
      setStock(prevStock => [...prevStock, grocery]);
      grocery.stock--;
      addToCart(grocery);
    }
  }

  return (
    <div>
      {groceriesData.map(grocery => {
        const outOfStock = grocery.stock === 0;
        return (
          <div key={grocery.groceryId} className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-2">
                <img src={grocery.imgURL} className="img-fluid rounded-start" alt={grocery.groceryName} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{grocery.groceryName}</h5>
                  <p className="card-text"><small className="text-body-primary">Stock: {grocery.stock} Price: ₪ {grocery.price}</small></p>
                  <i className={`fas fa-circle-plus ${outOfStock ? "outOfStock" : ""}`} style={{ color: "#000000" }} onClick={() => { handleDownStock(grocery) }}></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GroceriesList;
