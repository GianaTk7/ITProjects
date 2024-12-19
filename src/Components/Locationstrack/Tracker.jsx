import React from "react";
import { Link } from "react-router-dom";
import "./track.css";
function Tracker() {
  return (
    <div className="locationtracker-container">
      <div className="track">
        <Link to="/Fqas">
          <img
            src="https://cdn.media.amplience.net/i/mrpricegroup/home-faq-ic.png?fmt=auto"
            alt="frequently 
        asked questions"
            width="201"
            height="138"
            class="img-fluid"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="track">
        <Link to="/Trackdelivery">
          <img
            src="https://cdn.media.amplience.net/i/mrpricegroup/home-delivery-ic.png?fmt=auto"
            alt="delivery and returns"
            width="201"
            height="138"
            class="img-fluid"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="track">
        <Link to="/Locations">
          <img
            src="https://cdn.media.amplience.net/i/mrpricegroup/home-track-ic.png?fmt=auto"
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
          src="https://cdn.media.amplience.net/i/mrpricegroup/home-hts-ic.png?fmt=auto"
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
