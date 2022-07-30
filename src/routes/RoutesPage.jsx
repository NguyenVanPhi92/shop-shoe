import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Layout/Home';
import Product from '../Layout/Product';
import Catalog from '../Layout/Catalog';
import Cart from '../Layout/Cart';
import Male from 'Layout/Male';
import Female from 'Layout/Female';
import Contact from 'Layout/Contact';
import News from 'Layout/News';
import Pay from 'Layout/Pay';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/news" element={<News />} />
      <Route path="/male" element={<Male />} />
      <Route path="/female" element={<Female />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pay" element={<Pay />} />
    </Routes>
  );
};

export default RoutesPage;
