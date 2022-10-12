import { Route, Routes } from 'react-router-dom'
import RoutesPage from 'routes/RoutesPage'
import Footer from 'shared/components/Footer'
import Header from 'shared/components/Header'
import Login from 'view/auth/Login/Login'
import Register from 'view/auth/Register/Register'
import NotFound from 'view/pages/NotFound'
import Pay from 'view/pages/Pay'
import ProductViewModal from 'view/pages/product/components/ProductViewModal'
import Success from 'view/pages/Success'

const App = () => {
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <>
                        <Header />
                        <div className="container">
                            <div className="main">
                                <RoutesPage />
                            </div>
                        </div>
                        <Footer />
                        <ProductViewModal />
                    </>
                }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pay" element={<Pay />} />

            <Route path="/*" element={<NotFound />} />
            <Route path="/success" element={<Success />} />
        </Routes>
    )
}

export default App
