import App from 'App';
import Login from 'Client/auth/Login/Login';
import Register from 'Client/auth/Register/Register';
import Cart from 'Client/Layout/Cart';
import Catalog from 'Client/Layout/Catalog';
import Contact from 'Client/Layout/Contact';
import Female from 'Client/Layout/Female';
import Home from 'Client/Layout/Home';
import Male from 'Client/Layout/Male';
import News from 'Client/Layout/News';
import NotFound from 'Client/Layout/NotFound';
import Pay from 'Client/Layout/Pay';
import Product from 'Client/Layout/Product';
import { Route, Routes } from 'react-router-dom';

const RoutesPage = () => {
  return (
    <Routes>
      {/* ERROR ROUTING PRODUCT ID CHƯA XONG PHẦN ROUTING PRODUCT DETAIL*/}
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<Product />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/news" element={<News />} />
      <Route path="/male" element={<Male />} />
      <Route path="/female" element={<Female />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pay" element={<Pay />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPage;
