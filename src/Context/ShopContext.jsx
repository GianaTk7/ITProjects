import { createContext, useState } from "react";
import { all_products } from "../Components/Assets/all_product";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [products] = useState(all_products);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setProduct] = useState(null); // New state for selected product

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: Math.max((prevCart[itemId] || 1) - 1, 0),
    }));
  };

  const getTotalAmount = () => {
    let num = 0
    for (let i = 0; i < cartItems.length; i++) {
      let obj = cartItems[i]
      num += obj.new_price
    }
    return num
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        setProduct,
        selectedProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
