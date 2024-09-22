import React from "react";
import "./Offer.css";
const Offer = () => {
  return (
    <div className="Offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLING PRODUCTS</p>
        <a
          href="https://www.sweatybetty.com/?msclkid=41f38e343ec31560fdc3e8db8190aa1e&utm_source=bing&utm_medium=cpc&utm_campaign=Search%20%7C%20Brand%20%7C%20Core%20%7C%20Bing%20%7C%20WW&utm_term=%2Bsweaty%20%2Bbetty&utm_content=Brand%20-%20Sweaty%20Betty"
          target="_blank"
        >
          <button id="btn">Check Now</button>
        </a>
      </div>
      <div className="offers-right"></div>
      <img src="OIP (1).jpeg" alt="girlwear" id="pants" />
    </div>
  );
};

export default Offer;
