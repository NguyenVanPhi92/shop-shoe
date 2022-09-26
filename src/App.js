import Footer from 'container/components/Footer';
import Header from 'container/components/Header';
import ProductViewModal from 'container/components/Products/ProductViewModal';
import RoutesPage from 'routes/RoutesPage';

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
