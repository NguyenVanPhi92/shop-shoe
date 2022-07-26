import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Male from 'pages/Male';
import Female from 'pages/Female';
import Contact from 'pages/Contact';
import News from 'pages/News';
import Slider from 'components/Slider';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/news" element={<Slider />} />
      <Route path="/male" element={<Male />} />
      <Route path="/female" element={<Female />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RoutesPage;
