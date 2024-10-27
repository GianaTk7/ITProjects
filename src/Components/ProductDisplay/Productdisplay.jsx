// Productdisplay.js
import "./Productdisplay.css";
import { useContext } from "react";
import { ShopContext } from '../../Context/ShopContext';  // Use ShopContext here

const Productdisplay = () => {
  const { addToCart, products } = useContext(ShopContext);
  const product = products[0]; // Example: Access the first product or a specific product as needed

  return (
    <div className="Productdisplay">
      <div className="productdisplay-left">
        <div className="Productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          {/* Additional images */}
        </div>
        <div className="Productdisplay-img">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="Productdisplay-right">
        <h1>{product.name}</h1>
        <div className="Productdisplay-right-prices">
          <div className="Productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="Productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productdisplay;
