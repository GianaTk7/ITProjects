import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShopContextProvider } from './Context/ShopContext';
// import Womenfits from './Components/Womenfits/Womenfits';
// import Womenfits from './Components/Womenfits';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ShopContextProvider>

    <App />
  
  </ShopContextProvider>
 </React.StrictMode>
);


