import Header from './Header';
import Footer from './Footer';
import RoutesPage from 'routes/RoutesPage';
import ProductViewModal from './Products/ProductViewModal';

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

      {/* <ProductViewModal /> */}
    </div>
  );
};

export default Layout;
