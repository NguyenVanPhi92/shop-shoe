import React from 'react'
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import InputField from 'shared/components/Form/Input/InputField'
import Button from 'shared/components/Form/Button/Button'
import { logo } from 'shared/assets/images'

const Pay = props => {
    const cartItems = useSelector(state => state.cartItems.value)
    console.log({ cartItems })
    const navigate = useNavigate()

    const handleOrder = () => {
        navigate('/success')
    }

    return (
        <div className="payment grid">
            <div className="payment__info grid">
                <div className="payment__info__customer">
                    <h3 className="payment__info__customer__logo">
                        <img src={logo} alt="" />
                    </h3>
                    <div className="payment__info__customer__account">
                        <div className="payment__info__customer__account__text">Thông tin nhận hàng</div>
                        <div className="payment__info__customer__account__login">
                            <i className="bx bx-user-circle"></i>
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                    </div>
                    <form action="" className="form-info__customer">
                        <div className="input__item">
                            <InputField type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="input__item">
                            <InputField type="text" name="fullName" placeholder="Họ và tên" />
                        </div>
                        <div className="input__item">
                            <InputField type="text" name="phone" placeholder="Số điện thoại (tùy chọn)" />
                        </div>
                        <div className="input__item">
                            <InputField type="text" name="address" placeholder="Địa chỉ (tùy chọn)" />
                        </div>
                        <div className="input__item">
                            <InputField type="text" name="note" placeholder="Ghi chú (túy chọn)" />
                        </div>
                    </form>
                </div>

                <div className="payment__info__deliver">
                    <div className="payment__info__deliver__status">
                        <div className="payment__info__deliver__status__title">
                            <p>Vận chuyển</p>
                        </div>
                        <div className="payment__info__deliver__status__alert">
                            <p className="payment__info__deliver__status__alert__content">
                                Vui lòng nhập thông tin giao hàng
                            </p>
                        </div>
                    </div>

                    <div className="payment__info__deliver__pay">
                        <div className="payment__info__deliver__pay__title">
                            <p>Thanh Toán</p>
                        </div>
                        <div className="payment__info__deliver__pay__alert">
                            <p className="payment__info__deliver__pay__alert__content">
                                Vui lòng nhập thông tin giao hàng
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payment__product">
                <div className="payment__product__title">
                    Đơn hàng <span>({cartItems.length} sản phẩm)</span>
                </div>
                <div className="payment__product__list">
                    <div className="payment__product__item"></div>
                    <div className="payment__product__code-discount">
                        <InputField type="text" name="codeDiscount" placeholder="nhập mã giảm giá" />
                        <Button>Áp dụng</Button>
                    </div>
                    <div className="payment__product__calc-price">
                        <div>
                            <p>Tạm tính</p>
                            <p>3.400.000 đ</p>
                        </div>
                        <div>
                            <p>Phí vận chuyển</p>
                            <p>40.000 đ</p>
                        </div>
                    </div>
                    <div className="payment__product__total-price">
                        <div>
                            <p>Tổng tiền</p>
                            <p>3.440.000 đ</p>
                        </div>

                        <div className="btn__action">
                            <Link to="/cart">
                                <i className="bx bx-caret-left"></i> <span>Quay về giỏ hàng</span>
                            </Link>
                            <Button onClick={handleOrder}>Đặt hàng</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Pay.propTypes = {}

export default Pay
