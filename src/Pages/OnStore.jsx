import React, { useEffect } from 'react'; 
import './Onstore.css';
import data_product from '../Components/Assets/data';  
import Items from '../Components/Items/Items'; 


const ShoppingCart = () => {
  alert('Cart clicked');
};

const OnStore = () => {
  useEffect(() => {
    console.log(data_product); 
  }, []);

  return (
    <div className='Store'>
      <h1 id='text'>Elevate Your Wardrobel</h1>
      <hr />
      <div className="Store-items-pictures">
        {data_product.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={`$${item.new_price}`}  
            old_price={`$${item.old_price}`} 
          />
        ))}
      </div>
      
    
    </div>
  );
};

export default OnStore;