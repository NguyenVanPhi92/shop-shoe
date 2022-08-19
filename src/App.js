import Footer from 'Client/components/Footer';
import Header from 'Client/components/Header';
import ProductViewModal from 'Client/components/Products/ProductViewModal';
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
