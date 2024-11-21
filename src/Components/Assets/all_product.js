import p48_img from "./p48_img.webp";
import p55_img from "./p55_img.webp";
import p7_img from './p7_img.webp';
import p8_img from "./p8_img.webp";
import p9_img from "./p9_img.webp";
import p10_img from "./p10_img.webp";
import p11_img from "./p11_img.webp";
import p12_img from "./p12_img.webp";

import p13_img from './p13_img.webp'
import p14_img from  './p14_img.webp'
import p15_img from './p15_img.webp';
import p16_img from './p16_img.jpg'
import p17_img from './p17_img.webp'
import p18_img from "./p18_img.webp";
import p19_img from "./p19_img.webp";

import p20_img from './p20_img.webp'
import p21_img from './p21_img.webp'
import p22_img from './p22_img.webp'
import p23_img from './p23_img.webp'
import p26_img from './p26_img.webp'
import p27_img from './p27_img.webp'
import p28_img from './p28_img.webp'
import p29_img from './p29_img.webp'


let all_product = [

  {
    id: 5,
    name: "Stripm Hem Blouse",
    category: "women",
    image: p48_img,
    new_price: 79.70,
    old_price: 100.5,
    colors: ["#FF4500", "#000", "#5F9EA0"], 
    sizes: ["S", "M", "L"]
  },
  {
    id: 6,
    name: "swag jersey",
    category: "women",
    image: p55_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FF4500", "#8A2BE2", "#5F9EA0"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 7,
    name: "Striped Flutter Peplum Hem Blouse",
    category: "women",
    image: p7_img,
    new_price: 110.08,
    old_price: 160.5,
    colors: ["#FF4500", "#8A2BE2", "#5F9EA0"], 
    sizes: ["S", "M", "L"]
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p8_img,
    new_price: 65.0,
    old_price: 96.5,
    colors: ["#FF69B4", "#CD5C5C", "#FFD700"], 
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p9_img,
    new_price: 80.60,
    old_price: 105.00,
    colors: ["#000", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Striped Flutter Blouse",
    category: "women",
    image: p10_img,
    new_price: 75.00,
    old_price: 90.05,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p11_img,
    new_price: 55.00,
    old_price: 70.50,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p12_img,
    new_price: 100.40,
    old_price: 140.00,
    colors: ["#FFD700", "#FF6347", "#4682B4"],
    sizes: ["S", "M", "L", "XL"]
  },

//men section below

  {
    id: 13,
    name: "Men Green Soli Jacket",
    category: "men",
    image: p13_img,
    new_price: 90.30,
    old_price: 140.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 14,
    name: "Men Green Solid ber Jacket",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 16,
    name: "Men Green Solid ",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 17,
    name: "Men Green Solid Zippered ",
    category: "men",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#fff", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 18,
    name: "Men Green Solid ",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
 
  {
    id: 23,
    name: "Men Green SolidJacket",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Men Green Solimber Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },

  //kids section below
  {
    id: 27,
    name: "Boys Orange Colourblocked ",
    category: "kid",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 28,
    name: "nice cloths",
    category: "kid",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 29,
    name: "nice yeeee",
    category: "kid",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 30,
    name: "baggy",
    category: "kid",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#ffffff", "#000000"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },

];
export const all_products = () => {
  return all_product
}
