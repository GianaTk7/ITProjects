import React from "react";
import "./Hero.css";

const Hero = () =>{
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 id="offersavailable">NEW ARRIVAL ONLY</h2>
        <div>
          <div className=" hero-hand-icon">
            <p>new</p>
            <img src="hand.svg" alt="" id="hand" />
          </div>
          <p>Collections</p>
          <p> For Everone</p>
        </div>
        <div className="hero-button">
          <div>Lastet Collection </div>
          <img src="arrow.png" alt="" />
        </div>
      </div>
      <div className="hero-right">
        <div className="advert-videos">
        <img src="Gia.jpg" alt="" id="picture" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
