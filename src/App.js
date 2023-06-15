import React, { useState } from "react";
import logo from './logo1.png';
import './App.css';
import GroceriesList from './GroceriesList';
import ShoppingCart from './ShoppingCart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (grocery) => {
    const existingItem = cartItems.find(item => item.groceryId === grocery.groceryId);
    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.groceryId === grocery.groceryId) {
          return {
            ...item,
            quantity: item.quantity + 1,
            total: (item.quantity + 1) * item.price
          };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems(prevCartItems => [
        ...prevCartItems,
        {
          ...grocery,
          quantity: 1,
          total: grocery.price
        }
      ]);
    }
  }

  return (
    <div>
      <header className="navbar navbar-light bg-success">
        <div className="container d-flex justify-content-between">
          <img src={logo} className="rounded float-start img-fluid logo-header" alt="logo" />
          <p className="text-white fs-1 text-center fw-bold ">KWIK-E-MART</p>
        </div>
      </header>
      <div className="App d-flex justify-content-around">
        <GroceriesList addToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} />
      </div>
      <footer>
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}

export default App;

