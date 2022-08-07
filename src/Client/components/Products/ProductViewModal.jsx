import productData from 'shared/assets/fake-data/products';
import { useState, useEffect } from 'react';
import Button from 'Client/components/Button';
import React from 'react';
import ProductView from './ProductView';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/product-modal/productModalSlice';

const ProductViewModal = () => {
  // const product = productData.getProductBySlug('ao-thun-polo-04');
  const productSlug = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
      <div className="product-view__modal__content">
        <div className="product-view__modal__content__body">
          <ProductView product={product} />
        </div>
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
