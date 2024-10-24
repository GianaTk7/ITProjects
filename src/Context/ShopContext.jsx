import { createContext, useState } from "react";
import { all_products } from "../Components/Assets/all_product";
export const ShopContext = createContext();
const getDefaultCart = () => {
  let Cart = {};
  for (let i = 0; i < all_products.length; i++) {
    Cart[i] = 0;
  }
  return Cart;
};

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(all_products);
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState(getDefaultCart()); 

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        cartItems,
        setCartItems,
        removeFromCart,
        getTotalAmount, 
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
