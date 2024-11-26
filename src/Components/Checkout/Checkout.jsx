import React from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems = [], totalAmount = 0 }) => {
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/order-confirmation");
  };

  return (
    <div className="Checkout">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-section">
          <h2>Shipping Details</h2>
          <form className="checkout-form">
            <label>Full Name</label>
            <input type="text" placeholder="type your name..." required />

            <label>Address</label>
            <input type="text" placeholder="123 Main St" required />

            <label>City</label>
            <input type="text" placeholder="City" required />

            <label>Postal Code</label>
            <input type="text" placeholder="Postal Code" required />

            <label>Country</label>
            <input type="text" placeholder="Country" required />
          </form>
        </div>

        <div className="checkout-section">
          <h2>Order Summary</h2>
          <div className="order-items">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="order-item">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))
            ) : (
              <div>No items in cart</div>
            )}
          </div>
          <div className="order-total">
            <span>Total Amount</span>
            <span>${totalAmount}</span>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Payment Method</h2>
          <div className="payment-method">
            <label>
              <input type="radio" name="payment" value="credit" required /> Credit Card
            </label>
            <label>
              <input type="radio" name="payment" value="paypal" /> PayPal
            </label>
            <label>
              <input type="radio" name="payment" value="bank" /> Bank Transfer
            </label>
          </div>
        </div>
        <button className="checkout-button" onClick={handlePlaceOrder}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
