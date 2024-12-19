
import React from "react";
import "./logout.css"; // Import the external CSS file

const Logout = () => {
  return (
    <div className="container">
      <div className="card">
        {/* Animated Green Checkmark */}
        <div className="checkmark-container">
          <div className="checkmark">&#10004;</div>
        </div>

        {/* Success Messages */}
        <h1 className="heading">Order Placed Successfully!</h1>
        <p className="sub-heading">You have been logged out successfully.</p>

        {/* Additional Details */}
        <p className="details">
          Thank you for your purchase! Your order has been successfully placed, 
          and you have been securely logged out. <br />
          If you wish to browse more items, please log in again.
        </p>

        {/* Return Button */}
        <a
          href="/"
          className="button"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};




export default Logout