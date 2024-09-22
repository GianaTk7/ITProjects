import React from "react";
import "./RelatedP.css";
import data_product from '../Assets/data'
    


const Item = ({ id, name, image, new_price, old_price }) => {
    return (
      <div className="collection-item" id={id}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>New Price: {new_price}</p>
        <p>Old Price: <span className="old-price">{old_price}</span></p>
      </div>
    );
  };
const RelatedP = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => (
          <Item
            key={i}
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

export default RelatedP;
