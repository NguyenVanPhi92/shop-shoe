import { Route, Routes } from 'react-router-dom'
import Cart from 'view/pages/Cart'
import Catalog from 'view/pages/Catalog'
import Contact from 'view/pages/Contact'
import Female from 'view/pages/Female'
import Home from 'view/pages/Home'
import Male from 'view/pages/Male'
import News from 'view/pages/news/News'
import NotFound from 'view/pages/NotFound'
import Product from 'view/pages/product/Product'

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
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesPage
