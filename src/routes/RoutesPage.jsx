import App from 'App';
import Login from 'container/auth/Login/Login';
import Register from 'container/auth/Register/Register';
import Cart from 'container/pages/Cart';
import News from 'container/pages/News';
import Catalog from 'container/pages/Catalog';
import Contact from 'container/pages/Contact';
import Female from 'container/pages/Female';
import Home from 'container/pages/Home';
import Male from 'container/pages/Male';
import NotFound from 'container/pages/NotFound';
import Pay from 'container/pages/Pay';
import Product from 'container/pages/Product';
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

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPage;
