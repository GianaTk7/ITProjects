import p1_img from "./product_12.png";
import p2_img from "./product_35.png";
import p3_img from "./product_14.png";

let product = [
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    colors: ["#FF5733", "#33FF57", "#3357FF"], 
    sizes: ["S", "M", "L", "XL"], 
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFA500", "#0000FF"], 
    sizes: ["S", "M", "L"], 
  },
  {
    id: 14,
    name: "Men Green Solid Zippered",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    colors: ["#008000", "#FFD700"], 
    sizes: ["M", "L", "XL", "XXL"], 
  },
];

export default product;
