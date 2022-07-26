import productData from 'assets/fake-data/products';
import Button from 'components/Button';
import React from 'react';
import ProductView from './ProductView';

const ProductViewModal = () => {
  const product = productData.getProductBySlug('ao-thun-polo-04');

  return (
    <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
      <div className="product-view__modal__content">
        <div className="product-view__modal__content__body">
          <ProductView product={product} />
        </div>
        <div className="product-view__modal__content__close">
          <Button size="sm">Đóng</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
