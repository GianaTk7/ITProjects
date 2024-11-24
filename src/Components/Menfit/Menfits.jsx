import React from "react";
import "./menfits.css";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import { useNavigate } from "react-router-dom";

function Menfits() {
  const { products, setProduct } = ShopCategoryContext();
  const nav = useNavigate();
  const handleProductClick = (item) => {
    setProduct(item);
    console.log("Clicked Productdisplay:", item);
    nav("/Productdisplay");
  };

  return (
    <>
      <div>
      <video src="manbanner.mp4" className="manbanner" autoplay muted ></video>

      </div>
      <div className="collections"
        style={{
          marginTop: "60px",
          height: "100%",
          border: "none",
          fontSize: "7px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {products
          .filter((re) => re.category === "men")
          .map((item, i) => (
            <div key={i} style={{ width: "23%" }}>
              <img
                src={item.image}
                onClick={() => handleProductClick(item)}
                alt="menfits"
                gap="440px"
               
              />

              <h1 >{item.name} </h1>
              <p className="newtag">${item.new_price}</p>
              <p className="oldtag">${item.old_price}</p>
            </div>
          ))}
      </div>
    
    </>
  );
}

export default Menfits;
