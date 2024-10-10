import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Components/SignUP/Signup';
import Login from './Components/LogIn/Login';
import Men from './Pages/Men';
import Kids from './Pages/Kids';
import Women from './Pages/Women';
import Locations from './Pages/Locations';
import Fqas from './Pages/Fqas';
import Productdisplay from './Components/ProductDisplay/Productdisplay';
import Description from './Components/DescriptionBox/Description';
import RelatedP from './Components/RelatedProducts/RelatedP';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Product/:productId' element={<Product />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Men' element={<Men />} />
            <Route path='/Women' element={<Women />} />
            <Route path='/Kids' element={<Kids />} />
            <Route path='/Productdisplay' element={<Productdisplay />} />
            <Route path='/Description' element={<Description />} />
            <Route path='/RelatedP' element={<RelatedP />} />
            <Route path='/Locations' element={<Locations />} />
            <Route path='/Fqas' element={<Fqas />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
