import "./Cartitems.css";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import { MdDelete } from "react-icons/md";

const Cartitems = () => {
  const { cartItems, setCartItems } = ShopCategoryContext();
  const removeFromCart = (item) => {
    let updatedList = cartItems.filter((e) => e.id !== item.id);
    setCartItems(updatedList);
  };
  return (
    <>
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

        {cartItems.map((e) => {
          return (
            <div key={e.id} className="cartitems-format cartitems-format-main">
              <img src={e.image} alt={e.name} className="cart-product-icon" />
              <p>{e.name}</p>
              <p>${e.old_price}</p>
              <button className="cartitems-quality">{cartItems[e.id]}</button>
              <p>${e.new_price}</p>
              <MdDelete onClick={() => removeFromCart(e)} />
            </div>
          );
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>cart totals</h1>
            <div className="Cartitems-total-item">
              <p>Subtitle</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="Cartitems-total-item">
              <p>Shopping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="Cartitems-total-item">
            <h3>Total</h3>
            <h3>${0}</h3>
            </div>
          </div>
          <button className="proceed">PPROCEED TO CHECKOUT</button>
        </div>
        <div className="cartiems-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cartiems-promobox">
        <input type ="text"  placeholder="Promo Code"/>
        <button>Submit</button>
        
        </div>
        </div>
      </div>
    </>
  );
};

export default Cartitems;
