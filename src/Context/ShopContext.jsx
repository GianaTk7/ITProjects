// ShopContext.js
import { createContext, useState } from "react";
import { all_products } from "../Components/Assets/all_product";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let Cart = {};
  // all_products.forEach((product) => {
  //   Cart[product.id] = 0; 
  // });
  return Cart;
};

export const ShopContextProvider = ({ children }) => {
  const [products] = useState(all_products);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (item) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [item.id]: (prevCart[item.id] || 0) + 1, 
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: Math.max((prevCart[itemId] || 1) - 1, 0), // Decrement item count, with a minimum of 0
    }));
  };

  const getTotalAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const item = products.find((product) => product.id === Number(itemId));
      return total + item.new_price * quantity;
    }, 0);
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
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
