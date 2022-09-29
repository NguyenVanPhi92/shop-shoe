import RoutesPage from 'routes/RoutesPage';
import Footer from 'shared/components/Footer';
import Header from 'shared/components/Header';
import ProductViewModal from 'view/pages/product/components/ProductViewModal';

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="main">
                    <RoutesPage />
                </div>
            </div>
            <Footer />

            <ProductViewModal />
        </div>
    );
};

export default App;
