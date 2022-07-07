import React from 'react';
import Navbar from './pages/Navbar/Navbar'
import Banner from './pages/Banner/Banner';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import PaymentDetails from './pages/PaymentDetails/PaymentDetails';
import Footer from './pages/Footer/Footer';
import Home from './components/Home';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
