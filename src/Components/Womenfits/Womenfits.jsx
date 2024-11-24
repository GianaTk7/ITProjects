import React from "react";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import { useNavigate } from "react-router-dom";
import "./Women.css";
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
    .filter((re) => re.category === "women")
    .map((item, i) => (
      <div key={i} style={{ width: "23%" }}>
        <img
          id={`product-img-${i}`} 
          src={item.image}
          onClick={() => handleProductClick(item)}
          alt={item.name}
        />
        <h1>{item.name}</h1>
        <p className="newtag">${item.new_price}</p>
        <p className="oldtag">${item.old_price}</p>
      </div>
    ))}
</div>

  
    </>
  );
}

export default Womenfits;
