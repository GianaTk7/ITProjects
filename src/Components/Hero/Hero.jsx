import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

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
          <p> For Everyone</p>
        </div>
        <div className="hero-button">
        <Link to="/Mycollections">
      <button>Latest Collection</button>
    </Link>
          <img src="arrow.png" alt="arrow" />
        </div>
      </div>
      <div className="hero-right">
        <div className="picture-div">
        <img src="Gia.jpg" alt="" id="picture"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
