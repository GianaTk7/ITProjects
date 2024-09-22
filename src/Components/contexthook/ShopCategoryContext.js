import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";




export const ShopCategoryContext = () => {
    const context = useContext(ShopContext)
    if(!context){
   throw new Error("useContext must be inside ShopContextProvider");
   
    }
  return context

  
}
