import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { set } from 'redux/product-modal/productModalSlice';
import Button from 'shared/components/Form/Button/Button';
import { formatPrice } from 'utils/formatPrice';

const ProductCard = (props) => {
    const { slug, img01, productHot, name, productNew, sale, price, percentDiscount } = props;
    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <Link to={`/catalog/${slug}`}>
                <div className="product-card__image">
                    <img src={img01} alt="" />
                    <div className="promotion">
                        {sale && <div className="sale-percent">{percentDiscount}%</div>}
                        {productNew && <div className="product-new">New</div>}
                        {productHot && <div className="product-hot">Hot</div>}
                    </div>
                </div>

                <div className="product-card__content">
                    <h3 className="product-card__name">{name}</h3>

                    <div className="product-card__price">
                        {formatPrice(price)}
                        <span className="product-card__price__old">
                            <del>{formatPrice(399999)}</del>
                        </span>
                    </div>
                </div>
            </Link>

            <div className="product-card__btn">
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    animate={true}
                    onClick={() => dispatch(set(slug))}
                >
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
    productNew: PropTypes.bool.isRequired,
    percentDiscount: PropTypes.string.isRequired,
    sale: PropTypes.bool.isRequired,
};

export default ProductCard;
