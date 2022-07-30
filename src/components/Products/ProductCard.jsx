import Button from 'components/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { set } from 'redux/product-modal/productModalSlice';
import numberWithCommas from 'utils/NumberWithCommas';
const ProductCard = (props) => {
  const { slug, img01, img02, name, productNew, sale, price, percentDiscount } = props;
  const dispatch = useDispatch();

  console.log('sale ', sale);
  console.log(name);

  return (
    <div className="product-card">
      <Link to={`/catalog/${slug}`}>
        <div className="product-card__image">
          <img src={img01} alt="" />
          <img src={img02} alt="" />

          {sale && <div className="sale-percent">{numberWithCommas(percentDiscount)}%</div>}
          {productNew && <div className="product-new">new</div>}
        </div>

        <h3 className="product-card__name">{name}</h3>
        <div className="product-card__price">
          {numberWithCommas(price)}
          <span className="product-card__price__old">
            <del>{numberWithCommas(399999)}</del>
          </span>
        </div>
      </Link>

      <div className="product-card__btn">
        <Button size="sm" icon="bx bx-cart" animate={true} onClick={() => dispatch(set(slug))}>
          Chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
