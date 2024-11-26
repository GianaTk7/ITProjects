import React from "react";
import { Link } from "react-router-dom";
import "./track.css";
function Tracker() {
  return (
    <div className="locationtracker-container">
      <div className="track">
        <Link to="/Fqas">
          <img
            src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-faq-ic.png"
            alt="frequently asked questions"
            width="201"
            height="138"
            class="img-fluid"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="track">
        <Link to ="/Trackdelivery">
        <img
          src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-delivery-ic.png"
          alt="delivery and returns"
          width="201"
          height="138"
          class="img-fluid"
          loading="lazy"
        />
        </Link>
      </div>

      <div className="track">
        <Link to='/Locations'>
        <img
          src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-track-ic.png"
          alt="track my order"
          width="202"
          height="138"
          class="img-fluid"
          loading="lazy"
        />
        </Link>
      </div>
      <div className="track">
        <img
          src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-hts-ic.png"
          alt="how to shop"
          width="201"
          height="138"
          class="img-fluid"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Tracker;
