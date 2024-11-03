import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = ({ id, name, image, new_price, old_price, onImageClick }) => {
  return (
    <div className="items">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} onClick={(e) => {
          e.preventDefault(); 
          onImageClick();
        }} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">{new_price}</div>
        <div className="item-price-old">{old_price}</div>
      </div>
    </div>
  );
};

export default Items;
