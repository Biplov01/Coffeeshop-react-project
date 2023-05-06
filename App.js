import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import logo from './images/logo.png';
import latte from './images/latte.png';

function App() {
  const [drinks, setDrinks] = useState([
    { name: 'Latte', price: 3.50 },
    { name: 'Cappuccino', price: 4.00 },
    { name: 'Nepali kada', price: 2.50 },
    { name: 'Iced Coffee', price: 4.50 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (drink) => {
    setCart([...cart, drink]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, drink) => total + drink.price, 0);
  };

  return (
    <div className="App">
  <img src={logo} alt="Coffee Shop" style={{ width: '20%' }} />
 

      <h1>Welcome to Coffee Shop!</h1>
      <h2>Menu:</h2>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>
            {drink.name} - ${drink.price.toFixed(2)}
            <button onClick={() => addToCart(drink)}>Add to cart</button>
          </li>
        ))}
      </ul>


      <h2>Cart:</h2>
      <ul>
        {cart.map((drink, index) => (
          <li key={index}>
            {drink.name} - ${drink.price.toFixed(2)}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
    </div>
  );
}

export default App;
