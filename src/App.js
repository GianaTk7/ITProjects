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
import Mycollections from './Components/Mycollectionsholder/Mycollections'
import Trackdelivery from './Components/TrackDelivery/Trackdelivery'
import Letters from './Components/Letters/Letters'
import Checkout from './Components/Checkout/Checkout'
import Logout from './Components/Logout/Logout.jsx'
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
            <Route path = '/Mycollections' element = {<Mycollections/>}/>
            <Route path='/Productdisplay' element={<Productdisplay />} />
            <Route path='/Description' element={<Description />} />
            <Route path='/RelatedP' element={<RelatedP />} />
           <Route path='/Trackdelivery' element={<Trackdelivery/>}/>
            <Route path='/Locations' element={<Locations />} />
            <Route path='/Fqas' element={<Fqas />} /> 
            <Route path='/Letters' element = {<Letters/>}/>
            <Route path='/Checkout' element={<Checkout />} /> 
            <Route path ='/Logout' element ={< Logout/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
