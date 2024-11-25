import React from "react";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import { useNavigate } from "react-router-dom";
import "./Women.css";

// Helper function to render the stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Full stars (integer part of the rating)
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star (if remainder >= 0.5)
  const emptyStars = 5 - fullStars - halfStars; // Empty stars

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="star full-star">★</span>
      ))}
      {halfStars > 0 && <span className="star half-star">☆</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty-star">☆</span>
      ))}
    </>
  );
};

function Womenfits() {
  const { products, setProduct } = ShopCategoryContext();
  const nav = useNavigate();
  const handleProductClick = (item) => {
    setProduct(item);
    console.log("Clicked Productdisplay:", item);
    nav("/Productdisplay");
  };

  return (
    <>
      <div className="men-section">
        <video src="/dresses.mp4" autoPlay muted />
      </div>
      <div
        className="collections"
        id="ladies"
        style={{
          marginTop: "60px",
          height: "80%",
          border: "none",
          fontSize: "7px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {products
          .filter((re) => re.category === "women")
          .map((item, i) => (
            <div key={i} style={{ width: "23%" }}>
              <img
                id={`product-img-${i}`}
                src={item.image}
                onClick={() => handleProductClick(item)}
                alt={item.name}
              />
              <h1 className="nametag">{item.name}</h1>
              <p className="newtag">${item.new_price}</p>
              <p className="oldtag">${item.old_price}</p>
              <div className="rating">
                {renderStars(item.rating || 0)} 
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Womenfits;
