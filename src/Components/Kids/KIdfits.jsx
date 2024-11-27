import React from "react";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import { useNavigate } from "react-router-dom";
import "./kids.css";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="star full-star">
          &#9733;
        </span>
      ))}

      {halfStars > 0 && (
        <span key="half" className="star half-star">
          &#9733;
        </span>
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty-star">
          &#9734;
        </span>
      ))}
    </>
  );
};

function KIdfits() {
  const { products, setProduct } = ShopCategoryContext();
  const nav = useNavigate();

  const handleProductClick = (item) => {
    setProduct(item);
    console.log("Clicked Productdisplay:", item);
    nav("/Productdisplay");
  };

  return (
    <>
      <div className="kid-section">
        <img src="/kidsbanner.jpg" alt="kids" />
      </div>

      <div
        className="collections"
        style={{
          marginTop: "60px",
          height: "100%",
          border: "none",
          fontSize: "7px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {products
          .filter((re) => re.category === "kid")
          .map((item, i) => (
            <div key={i} style={{ width: "23%" }}>
              <img
                src={item.image}
                onClick={() => handleProductClick(item)}
                alt=""
                gap="40px"
              />
              <h1 id="nametag">{item.name}</h1>
              <p className="newtag">${item.new_price}</p>
              <p className="oldtag">${item.old_price}</p>
              <div className="rating">{renderStars(item.rating || 0)}</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default KIdfits;
