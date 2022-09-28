import productData from 'shared/assets/fake-data/products';
import Button from 'container/components/Form/Button/Button';
import CartItems from 'container/components/Cart/CartItems';
import Helmet from 'container/components/Helmet';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { formatPrice } from 'utils/formatPrice';

const Cart = () => {
    const location = useLocation();
    const cartItems = useSelector((state) => state.cartItems.value);
    const [cartProducts, setCartProducts] = useState(productData.getCartItemDetail(cartItems));
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartProducts(productData.getCartItemDetail(cartItems));
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
        setTotalPrice(
            cartItems.reduce(
                (total, item) => total + Number(item.quantity) * Number(item.price),
                0,
            ),
        );
    }, [cartItems]);

    console.log(cartItems);

    // scroll top when clicking action between pages
    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, [location]);

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>

                        <div className="cart__info__txt__price">
                            <span>Thành tiền</span>
                            <span> {formatPrice(totalPrice)}</span>
                        </div>
                    </div>

                    <div className="cart__info__btn">
                        <Button size="block">
                            <Link to="/pay">Thực hiện thanh toán</Link>
                        </Button>
                        <Link to="/catalog">
                            <Button size="block">tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>

                <div className="cart__list">
                    {cartProducts.map((item, index) => (
                        <CartItems key={index} item={item} />
                    ))}
                </div>
            </div>
        </Helmet>
    );
};

export default Cart;
