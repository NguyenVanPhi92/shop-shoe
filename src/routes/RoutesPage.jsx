import Cart from 'Client/Layout/Cart';
import Catalog from 'Client/Layout/Catalog';
import Contact from 'Client/Layout/Contact';
import Female from 'Client/Layout/Female';
import Home from 'Client/Layout/Home';
import Male from 'Client/Layout/Male';
import News from 'Client/Layout/News';
import Pay from 'Client/Layout/Pay';
import Product from 'Client/Layout/Product';
import { Route, Routes } from 'react-router-dom';

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
