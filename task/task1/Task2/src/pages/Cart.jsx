import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, car) => {
    // remove "$" and commas before converting
    const price = parseInt(car.price.replace(/[^0-9]/g, ""));
    return sum + price;
  }, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart </h1>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((car, index) => (
              <li key={index}>
                <span>
                  {car.name} - {car.price}
                </span>
                <button onClick={() => removeFromCart(car.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: ${total}</div>
        </>
      )}
    </div>
  );
}
