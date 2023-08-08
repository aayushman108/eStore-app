import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./layoutComponent/Products";
import Contact from "./layoutComponent/Contact";
import About from "./layoutComponent/About";
import Home from "./layoutComponent/Home";
import Cart from "./layoutComponent/Cart";
import Layout from "./Layout";
import Blog from './layoutComponent/Blog';
import SingleProduct from './layoutComponent/SingleProduct';
import MenProducts from './layoutComponent/MenProducts';
import WomenProducts from './layoutComponent/WomenProducts';
import KidsProducts from './layoutComponent/KidsProducts';
import Wishlist from './layoutComponent/Wishlist';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} >
              <Route index element={<MenProducts />} />
              <Route path="women" element={<WomenProducts />} />
              <Route path="kids" element={<KidsProducts />} />
            </Route>
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;