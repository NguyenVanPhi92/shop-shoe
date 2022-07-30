import Header from './components/Header';
import Footer from './components/Footer';
import RoutesPage from 'routes/RoutesPage';
import ProductViewModal from './components/Products/ProductViewModal';

const Layout = () => {
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

export default Layout;
