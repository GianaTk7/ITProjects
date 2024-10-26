import "./Cartitems.css";
import { useContext } from "react";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import { MdDelete } from "react-icons/md";

const Cartitems = () => {
  const { cartItems, setCartItems } = useContext(ShopCategoryContext);

  const removeFromCart = (item) => {
    const updatedList = cartItems.filter((e) => e.id !== item.id);
    setCartItems(updatedList);
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

      {cartItems && cartItems.map((item) => (
        <div key={item.id} className="cartitems-format cartitems-format-main">
          <img src={item.image} alt={item.name} className="cart-product-icon" />
          <p>{item.name}</p>
          <p>${item.old_price}</p>
          <p>{item.quantity}</p>
          <p>${item.new_price * item.quantity}</p>
          <MdDelete onClick={() => removeFromCart(item)} />
        </div>
      ))}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className="Cartitems-total-item">
            <p>Subtotal</p>
            <p>${cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0)}</p>
          </div>
          <hr />
          <div className="Cartitems-total-item">
            <p>Shipping fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="Cartitems-total-item">
            <h3>Total</h3>
            <h3>${cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0)}</h3>
          </div>
        </div>
        <button className="proceed">PROCEED TO CHECKOUT</button>
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
