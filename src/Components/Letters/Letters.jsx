import React, { useState } from "react";
import "./letter.css";

function Letters() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-banner">
        <h1>Stay in Style</h1>
        <p>Subscribe to our newsletter for the latest trends, exclusive offers, and more.</p>
      </div>
      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input"
        />
        <button onClick={handleSubscribe} className="newsletter-button">
          Subscribe
        </button>
      </div>
      <div className="newsletter-footer">
        <p>Join the fashion revolution and never miss a beat!</p>
      </div>
    </div>
  );
}

export default Letters;
