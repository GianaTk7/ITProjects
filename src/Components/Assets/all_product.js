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
    name: "old drip bluey jeans",
    category: "women",
    image: p48_img,
    new_price: 79.70,
    old_price: 100.5,
    colors: ["#FF4500", "#000", "#5F9EA0"], 
    sizes: ["S", "M", "L"],
    stars: 4 // Add stars for rating
  },
  {
    id: 6,
    name: "square brownie croptop",
    category: "women",
    image: p55_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FF4500", "#8A2BE2", "#5F9EA0"],
    sizes: ["S", "M", "L"],
    stars: 5
  },
  {
    id: 7,
    name: "swag baggy jeans",
    category: "women",
    image: p7_img,
    new_price: 110.08,
    old_price: 160.5,
    colors: ["#FF4500", "#8A2BE2", "#5F9EA0"], 
    sizes: ["S", "M", "L"],
    stars: 4.5
  },
  {
    id: 8,
    name: "tromadance art sheet",
    category: "women",
    image: p8_img,
    new_price: 65.0,
    old_price: 96.5,
    colors: ["#FF69B4", "#CD5C5C", "#FFD700"], 
    sizes: ["XS", "S", "M", "L", "XL"],
    stars: 3.5
  },
  {
    id: 9,
    name: "Brenda Sequin Gown",
    category: "women",
    image: p9_img,
    new_price: 80.60,
    old_price: 105.00,
    colors: ["#000", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Alora Sequin Maxi Gown",
    category: "women",
    image: p10_img,
    new_price: 75.00,
    old_price: 90.05,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 11,
    name: "Maya Embellished Mini Dress - Black",
    category: "women",
    image: p11_img,
    new_price: 55.00,
    old_price: 70.50,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 12,
    name: "Sophisticated Touch Sculpt Midi Dress - Hunter",
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
    name: "Leave Me Textured Knit Shirt - White",
    category: "men",
    image: p13_img,
    new_price: 90.30,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 14,
    name: "Family Goals King Hoodie - Black",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 100.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 15,
    name: "men skinny jeans-black",
    category: "men",
    image: p15_img,
    new_price: 90.50,
    old_price: 105.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 16,
    name: "Tyson tracksuit - Gray ",
    category: "men",
    image: p16_img,
    new_price: 265.90,
    old_price: 300.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 17,
    name: "Desto Slim Flare Cargo Pants - Black",
    category: "men",
    image: p17_img,
    new_price: 185.88,
    old_price: 200.5,
    colors: ["#FFD700", "#fff", "#4682B4"], 
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 18,
    name: "Muhammad Ali Rumble Short Sleeve Tee - Black",
    category: "men",
    image: p18_img,
    new_price: 120.50,
    old_price: 180.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
 
  {
    id: 23,
    name: "Rookster short sleeve-black",
    category: "men",
    image: p23_img,
    new_price: 60.99,
    old_price: 80.5,
  },
  {
    id: 24,
    name: "Sayward Flannel Shirt - Tan/Multi",
    category: "men",
    image: p19_img,
    new_price: 90.5,
    old_price: 100.0,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },

  //kids section below
  {
    id: 27,
    name: "Mini Money Gang T-Shirt - Sand",
    category: "kid",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 28,
    name: "Mini Lily High Rise Cargo Jeans - pink Wash",
    category: "kid",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 29,
    name: "Mini Brianca Bow Wide Leg Jeans - Light Wash",
    category: "kid",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 30,
    name: "Mini King Von Legend Tee - Black",
    category: "kid",
    image: p23_img,
    new_price: 78.80,
    old_price: 90.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 31,
    name: "Mini Stare At the Stars Fuzzy Knit Sweater - Cream",
    category: "kid",
    image: p26_img,
    new_price: 46.80,
    old_price: 60.5,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 32,
    name: "Mini Rack On Racks Fleece Pullover Hoodie - Black",
    category: "kid",
    image: p27_img,
    new_price: 195.99,
    old_price: 340.50,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 33,
    name: "Mini Von Dutch Bomber Jacket - Black/White",
    category: "kid",
    image: p28_img,
    new_price: 320.80,
    old_price: 400.70,
    colors: ["#FFD700", "#ffffff", "#000000"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 34,
    name: "Mini Beast Mode Print T-Shirt - Brown",
    category: "kid",
    image: p29_img,
    new_price: 189.90,
    old_price: 270.59,
    colors: ["#FFD700", "#FF6347", "#4682B4"], // gold, tomato, steel blue
    sizes: ["S", "M", "L", "XL"]
  },

];
export const all_products = () => {
  return all_product
}
