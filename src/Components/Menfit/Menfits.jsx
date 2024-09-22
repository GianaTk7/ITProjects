import React from "react";
import "./menfits.css";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import { useNavigate } from "react-router-dom";
import { VscNoNewline } from "react-icons/vsc";

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
        <img src="banner_mens.png" alt="" />
      </div>
      <div className="collections"
        style={{
          marginTop: "60px",
          height: "100%",
          border: "none",
          fontSize: "10px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {products
          .filter((re) => re.category == "men")
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
      {/* {Object.keys(product).length && <Productdisplay product={product} />} */}
    </>
  );
}

export default Menfits;
