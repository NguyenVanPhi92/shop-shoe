import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { set } from 'redux/product-modal/productModalSlice'
import { addEllipsis } from 'utils/addEllipsis'
import { formatPrice } from 'utils/formatPrice'

const ProductCard = props => {
    const { slug, img01, productHot, name, productNew, sale, price, percentDiscount } = props
    const dispatch = useDispatch()
    const [heartColor, setHeartColor] = useState(false)

    //handel
    const handleAddNewWishlist = () => {
        setHeartColor(!heartColor)
    }

    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={img01} alt="" />
                <div className="promotion">
                    {sale && <div className="sale-percent">{percentDiscount}%</div>}
                    {productNew && <div className="product-new">New</div>}
                    {productHot && <div className="product-hot">Hot</div>}
                </div>

                <div className="icon__action">
                    <div className="icon__action-right">
                        <i
                            className={`${
                                heartColor
                                    ? 'bx bxs-heart icon__heart active cursor-pointer'
                                    : 'bx bxs-heart icon__heart cursor-pointer'
                            }`}
                            onClick={handleAddNewWishlist}
                        />
                        <i className="bx bxs-cart-add icon__add cursor-pointer " onClick={() => dispatch(set(slug))} />
                    </div>

                    <Link to={`/catalog/${slug}`}>
                        <div className="icon__action-left">
                            <i className="bx bx-search icon__detail" />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="product-card__content">
                <h3 className="product-card__name">{addEllipsis(name)}</h3>

                <div className="product-card__rating">
                    <div>
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                    </div>

                    <div>
                        <p>đã bán 565</p>
                    </div>
                </div>

                <div className="product-card__price">
                    {formatPrice(price)}
                    <span className="product-card__price__old">
                        <del>{formatPrice(399999)}</del>
                    </span>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    productNew: PropTypes.bool.isRequired,
    percentDiscount: PropTypes.string.isRequired,
    sale: PropTypes.bool.isRequired,
}

export default ProductCard
