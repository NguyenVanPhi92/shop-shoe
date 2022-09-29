import { Route, Routes } from 'react-router-dom';
import Login from 'view/auth/Login/Login';
import Register from 'view/auth/Register/Register';
import Cart from 'view/pages/Cart';
import Catalog from 'view/pages/Catalog';
import Contact from 'view/pages/Contact';
import Female from 'view/pages/Female';
import Home from 'view/pages/Home';
import Male from 'view/pages/Male';
import News from 'view/pages/news/News';
import NotFound from 'view/pages/NotFound';
import Pay from 'view/pages/Pay';
import Product from 'view/pages/product/Product';
import Success from 'view/pages/Success';

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
            <Route path="/success" element={<Success />} />
        </Routes>
    );
};

export default RoutesPage;
