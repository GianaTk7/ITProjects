import React, { useContext } from "react";
import "./Productdisplay.css";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
// import { ShopContext } from "../../Context/ShopContext";

const Productdisplay = (props) => {
  const { product, cartItems, setCartItems } = ShopCategoryContext();
  const addToCart = (item) => {
    setCartItems((prev) => [...cartItems, item]);
  };

  console.log(cartItems, "Added to cart checked");
  return (
    <div className="Productdisplay">
      <div className="productdisplay-left">
        <div className="Productdisplay-img-list">
          <img src={product.name} alt="" />
          <img src={product.name} alt="" />
          <img src={product.name} alt="" />
          <img src={product.name} alt="" />
        </div>
        <div className="Productdisplay-img">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="Productdisplay-right">
        <h1>{product.name}</h1>
        <div className="Productdisplay-right-star">
          <img src="star_icon.png" alt="" />
          <img src="star_icon.png" alt="" />
          <img src="star_icon.png" alt="" />
          <img src="star_icon.png" alt="" />
          <img src="star_dull_icon.png" alt="" />
          <p>(162)</p>
        </div>
        <div className="Productdisplay-right-prices">
          <div className="Productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="Productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit . Praesentium
          laudantium ad suscipit quibusdam pariatur fuga corporis, recusandae
          obcaecati corrupti expedita magni, repudiandae in nostrum reiciendis
          veniam necessitatibus voluptate repellendus enim!
        </div>
        <div className="productdisplay-r-size">
          <h1>Select Size</h1>
          <div className="productdisplay-r-size ">
            <div>S</div>
            <div id="justforu">M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="product-btn-div">
          <button
            onClick={() => {
              addToCart(product);
            }}
            className="button"
          >
            Add to Cart
          </button>
        </div>
        <p className="product-category">
         
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
