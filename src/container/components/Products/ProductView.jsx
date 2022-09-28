import Button from 'container/components/Form/Button/Button';
import Dropdown from 'container/components/Dropdown/Dropdown';
import productTutorial from 'container/components/Dropdown/tutorialByproduct';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { remove } from 'redux/product-modal/productModalSlice';
import { addItem } from 'redux/shopping-cart/cartItemsSlice';
import { policy_icon1, policy_icon2, policy_icon3, policy_icon4 } from 'shared/assets/images';
import { formatPrice } from 'utils/formatPrice';

const ProductView = (props) => {
    let { product } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // set lại product
    if (product === undefined) {
        product = {
            price: 0,
            title: '',
            colors: [],
            size: [],
        };
    }
    const [previewImg, setPreviewImg] = useState(product.image01);
    const [descriptionExpand, setDescriptionExpand] = useState(false);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    // set reload product before buy
    useEffect(() => {
        setPreviewImg(product.image01);
        setQuantity(1);
        setColor(undefined);
        setSize(undefined);
    }, [product]);

    // handle
    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1 > 99 ? 99 : quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };

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

    // go to card
    const gotoCart = () => {
        navigate('/cart');
        dispatch(remove());
    };

    // add to cart
    const addToCart = () => {
        if (check()) {
            dispatch(
                addItem({
                    slug: product.slug,
                    color: color,
                    size: size,
                    quantity: quantity,
                    price: product.price,
                }),
            );

            alert('success');
            navigate('/cart');
        }
    };

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>

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
                    <div
                        className="product__images__list__item"
                        onClick={() => setPreviewImg(product.image02)}
                    >
                        <img src={product.image02} alt="" />
                    </div>
                    <div
                        className="product__images__list__item"
                        onClick={() => setPreviewImg(product.image02)}
                    >
                        <img src={product.image02} alt="" />
                    </div>
                    <div
                        className="product__images__list__item"
                        onClick={() => setPreviewImg(product.image02)}
                    >
                        <img src={product.image02} alt="" />
                    </div>
                </div>
            </div>

            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <p className="product__info__item__code">
                        <span>Mã sản phẩm:</span>
                        <span>Đang cập nhật...</span>
                    </p>

                    <p className="product__info__item__brand">
                        <span>Thương hiệu:</span>
                        <span>Converse</span>
                    </p>

                    <p className="product__info__item__status">
                        <span>Tình trạng:</span>
                        <span>Còn hàng</span>
                    </p>

                    <p className="product__info__item__price">
                        {formatPrice(product.price)}

                        <span className="product__info__item__price__old">
                            <del>{formatPrice(399999)}</del>
                        </span>
                    </p>

                    <p className="product__info__item__percent">
                        Gía khuyến mãi <span>40%</span>
                    </p>
                </div>

                {/* Colors */}
                <div className="product__info__item">
                    <div className="product__info__item__title">Màu sắc</div>
                    <div className="product__info__item__list">
                        {product.colors.map((item, index) => (
                            <div
                                key={index}
                                className={`product__info__item__list__item ${
                                    color === item ? 'active' : ''
                                }`}
                                onClick={() => setColor(item)}
                            >
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Size */}
                <div className="product__info__item">
                    <div className="product__info__item__title">Kích cở</div>
                    <div className="product__info__item__list">
                        {product.size.map((item, index) => (
                            <span
                                key={index}
                                className={`product__info__item__list__item ${
                                    size === item ? 'active' : ''
                                }`}
                                onClick={() => setSize(item)}
                            >
                                <div className="product__info__item__list__item__size">{item}</div>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quantity */}
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

                {/* Button */}
                <div className="product__info__item">
                    <div className="btn-action">
                        <Button onClick={addToCart}>Thêm vào giỏ</Button>
                        <Button onClick={gotoCart} backgroundColor="blue">
                            Mua ngay
                        </Button>
                    </div>
                </div>

                {/* Description Mobile */}
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

                {/* Description PC */}
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">Mô tả sản phẩm</div>
                    {productTutorial.map((item, index) => (
                        <Dropdown key={index} title={item.title} content={item.content} />
                    ))}
                </div>
            </div>

            <div className="product__service">
                <div className="product__service__item">
                    <div className="product__service__item__icon">
                        <img src={policy_icon1} alt="" />
                    </div>
                    <div className="product__service__item__content">
                        <h4>Free ship</h4>
                        <p>Miễn phí vận chuyển nội thành</p>
                    </div>
                </div>

                <div className="product__service__item">
                    <div className="product__service__item__icon">
                        <img src={policy_icon2} alt="" />
                    </div>
                    <div className="product__service__item__content">
                        <h4>Đổi trả hàng</h4>
                        <p>Đổi trả lên tới 30 ngày</p>
                    </div>
                </div>

                <div className="product__service__item">
                    <div className="product__service__item__icon">
                        <img src={policy_icon3} alt="" />
                    </div>
                    <div className="product__service__item__content">
                        <h4>Khuyến mãi</h4>
                        <p>Nhiều khuyến mãi lớn</p>
                    </div>
                </div>

                <div className="product__service__item">
                    <div className="product__service__item__icon">
                        <img src={policy_icon4} alt="" />
                    </div>
                    <div className="product__service__item__content">
                        <h4>Hotline</h4>
                        <p>1900 6750</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductView.propTypes = {
    product: PropTypes.object,
};

export default ProductView;
