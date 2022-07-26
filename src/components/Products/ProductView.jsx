import Button from 'components/Button';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import numberWithCommas from 'utils/NumberWithCommas';

const ProductView = (props) => {
  const { product } = props;
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  let navigate = useNavigate();

  // handle
  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1 > 99 ? 99 : quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  // set reload product before buy
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  // check use select product
  const check = () => {
    if (!color) {
      alert('vui lòng chọn màu sắc!');
      return false;
    }

    if (!size) {
      alert('vui lòng chọn kíck cở!');
      return false;
    }

    return true;
  };

  // add to cart
  const addToCart = () => {
    if (check()) {
      console.log({ color, size, quantity });
    }
  };

  // go to card
  const gotoCart = () => {
    if (check()) navigate('/cart');
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>

        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>

        <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>

          <div className="product-description__toggle">
            <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
              {descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
            </Button>
          </div>
        </div>
      </div>

      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">{numberWithCommas(product.price)}</span>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Kích cở</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <span
                key={index}
                className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                onClick={() => setSize(item)}
              >
                <div className="product__info__item__list__item__size">{item}</div>
              </span>
            ))}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('minus')}
            >
              <i className="bx bx-minus"></i>
            </div>

            <div className="product__info__item__quantity__input">{quantity}</div>

            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('plus')}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>

        <div className="product__info__item">
          <Button onClick={addToCart}>Thêm vào giỏ</Button>
          <Button onClick={gotoCart}>Mua ngay</Button>
        </div>

        <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>

          <div className="product-description__toggle">
            <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
              {descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
