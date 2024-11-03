import "./Cartitems.css";
import { useContext } from "react";
import { ShopContext } from '../../Context/ShopContext';
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cartitems = () => {
  const { products, cartItems, setCartItems, removeFromCart, getTotalAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const handleCheckout = () => {
    navigate('/Checkout');
  };

  const handleRemoveFromCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      removeFromCart(itemId);
    }
  };

  return (
    <div className="Cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {Object.keys(cartItems)
        .filter((itemId) => cartItems[itemId] > 0)
        .map((itemId) => {
          const item = products.find((product) => product.id === Number(itemId));
          return (
            <div key={itemId} className="cartitems-format cartitems-format-main">
              <img src={item.image} alt={item.name} className="cart-product-icon" />
              <p>{item.name}</p>
              <p>${item.old_price}</p>
              <p>{cartItems[itemId]}</p>
              <p>${item.new_price * cartItems[itemId]}</p>
              <MdDelete onClick={() => handleRemoveFromCart(item.id)} />
              <button onClick={() => addToCart(item.id)}>Add More</button>
            </div>
          );
        })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className="Cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr />
          <div className="Cartitems-total-item">
            <p>Shipping fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="Cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalAmount()}</h3>
          </div>
        </div>
     
        <form className="checkout-form" onSubmit={handleCheckout}>
  <button type="submit" className="proceed">PROCEED TO CHECKOUT</button>
</form>
      </div>

      <div className="cartitems-promocode">
        <p>If you have a promo code, enter it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder="Promo Code" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default Cartitems;