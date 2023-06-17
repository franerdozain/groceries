import React, { useState } from "react";
import logo from './logo1.png';
import './App.css';
import GroceriesList from './GroceriesList';
import ShoppingCart from './ShoppingCart';
import groceriesData from './GroceriesData';
import DisplayTotals from "./DisplayTotals";
import Receipt from "./Receipt";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [updatedGroceriesData, setUpdatedGroceriesData] = useState(groceriesData);
  const [showReceipt, setShowReceipt] = useState(false)

  const handleOrder = () => {
    setShowReceipt(!showReceipt)
  }

  const addToCart = (grocery) => {
    const existingItem = cartItems.find(item => item.groceryId === grocery.groceryId);

    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.groceryId === grocery.groceryId && grocery.stock > 0) {
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

    // Update the stock
    const updatedStock = updatedGroceriesData.map(item => {
      if (item.groceryId === grocery.groceryId && grocery.stock > 0) {
        return {
          ...item,
          stock: item.stock - 1
        };
      }
      return item;
    });

    setUpdatedGroceriesData(updatedStock);
  };

  const removeFromCart = (grocery) => {
    const updatedItems = cartItems
      .map(item => {
        if (item.groceryId === grocery.groceryId) {
          return {
            ...item,
            quantity: item.quantity - 1,
            total: (item.quantity - 1) * item.price
          };
        }
        return item;
      })
      .filter(item => item.quantity > 0);

    setCartItems(updatedItems);

    // Update the stock
    const updatedStock = updatedGroceriesData.map(item => {
      if (item.groceryId === grocery.groceryId) {
        return {
          ...item,
          stock: item.stock + 1
        };
      }
      return item;
    });

    setUpdatedGroceriesData(updatedStock);
  };

  return (
    <div>
      <header className="navbar navbar-light bg-success">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <img src={logo} className="rounded float-start img-fluid logo-header" alt="logo" />
            <p className="text-white fs-1 text-center fw-bold">KWIK-E-MART</p>
          </div>
        </div>
      </header>
      <div className="container">
        {!showReceipt && (
        <div className="d-flex justify-content-between">
          <div><GroceriesList groceriesData={updatedGroceriesData} addToCart={addToCart} removeFromCart={removeFromCart} /></div>
          <div><ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} /></div>
          <div><DisplayTotals cartItems={cartItems} handleOrder={handleOrder}/></div>
        </div>

        )}
        {showReceipt && (
          <div>
            <Receipt cartItems={cartItems} />
          </div>

        )}
      </div>
      <footer className="d-flex flex-column justify-content-center align-items-center">
  <div className="d-flex align-items-center">
    <span className="mr-2">KWIK-E-MART</span>
    <a href="https://www.instagram.com" className="text-dark">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</footer>
    </div>
  );
}

export default App;
