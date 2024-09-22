import React, { useContext } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import { ShopContext } from '../Context/ShopContext';
import Description from '../Components/DescriptionBox/Description';
import RelatedP from '../Components/RelatedProducts/RelatedP';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  // Example: Filter related products based on the same category
  const relatedProducts = all_product.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Description />
      <RelatedP relatedProducts={relatedProducts} /> {/* Pass related products */}
    </div>
  );
};

export default Product;
