import p1_img from './product_1.png';
import p2_img from './product_2.png';
import p3_img from './product_3.png';
// import p4_img from './product_4.png';
import p54_img from './p54_img.webp'


let data_product = [
  {
    id: 1,
    name: "Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: 50.00,
    old_price: 80.50,
    size: ["S", "M", "L"], 
    color: ["Red", "Blue", "Black"], 
  },
  {
    id: 2,
    name: "Body Fit Short Sleeve",
    image: p2_img,
    new_price: 85.00,
    old_price: 120.50,
    size: ["M", "L", "XL"], 
    color: ["White", "Grey", "Navy"], 
  },
  {
    id: 3,
    name: "Vest",
    image: p3_img,
    new_price: 60.00,
    old_price: 100.50,
    size: ["S", "M", "L"], 
    color: ["Black", "Brown"], 
  },
  {
    id: 4,
    name: "Flutter Sleeve",
    image: p54_img,
    new_price: 100.00,
    old_price: 150.00,
    size: ["S", "M", "L"], 
    color: ["Pink", "Cream"], }
];

export default data_product;
