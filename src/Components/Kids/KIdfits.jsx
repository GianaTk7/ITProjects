import React from 'react'
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import { useNavigate } from "react-router-dom";
import './kids.css'

function KIdfits() {
  const { products, setProduct} = ShopCategoryContext();
  const nav = useNavigate()
    const handleProductClick = (item) => {
      setProduct(item);
      console.log("Clicked Productdisplay:", item);
      nav("/Productdisplay")
    }
    
    return (
      <>
      <div className="men-section">
        <img src="image.png" alt="kids" />
      </div>
      <div className='collections'
        style={{
          marginTop: "60px",
          height: "100%",
          border: "none",
          fontSize: "12px",
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
                onClick={() => handleProductClick(item)} // Pass the item
                alt=""
                gap="40px"
              />
              <h1>{item.name}</h1>
              <p className="newtag">${item.new_price}</p>
              <p className="oldtag">${item.old_price}</p>
            </div>
          ))}
      </div>
  
    </>
    )
}

export default KIdfits