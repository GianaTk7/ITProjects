import "./Productdisplay.css";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Productdisplay = () => {
  const { addToCart, products, selectedProduct } = useContext(ShopContext);
  const product = products && products.length > 0 ? products[0] : null;
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(""); // State for the main image
  const navigate = useNavigate();
  console.log("selectedProductselectedProduct", selectedProduct);
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0] || "");
      setSelectedSize(product.sizes?.[0] || "");
      setCurrentImage(product.images?.[0] || product.image);
    }
  }, [product]);

  if (!product) {
    return <div>No product available</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...selectedProduct,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    navigate("/cart");
  };

  return (
    <div className="Productdisplay">
      <div className="productdisplay-left">
        <div className="Productdisplay-main-img">
          <img src={selectedProduct.image} alt={product.name} />
        </div>
        <div className="Productdisplay-thumbnails">
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${
                currentImage === image ? "selected" : ""
              }`}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="Productdisplay-right">
        <h1>{selectedProduct.name}</h1>
        <p className="Productdisplay-description">{selectedProduct.description}</p>

        <div className="Productdisplay-right-prices">
          <div className="Productdisplay-right-price-old">
            ${selectedProduct.old_price}
          </div>
          <div className="Productdisplay-right-price-new">
            ${selectedProduct.new_price}
          </div>
        </div>

        <div className="Productdisplay-options">
          <div className="Productdisplay-option">
            <h3>Color:</h3>
            <div className="Productdisplay-colors">
              {selectedProduct.colors?.map((color, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`color-swatch ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div className="Productdisplay-option">
            <h3>Size:</h3>
            <div className="Productdisplay-sizes">
              {selectedProduct.sizes?.map((size, index) => (
                <span
                  key={index}
                  className={`size-option ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="Productdisplay-option">
            <h3>Quantity:</h3>
            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
        </div>

        <button onClick={handleAddToCart} className="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productdisplay;
