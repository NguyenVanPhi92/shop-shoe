import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { runFireworks } from 'utils/confettiFireworks';
import InputField from 'container/components/Form/Input/InputField';
import { Link } from 'react-router-dom';

const Pay = (props) => {
    // useEffect(() => {
    //   runFireworks();
    // }, []);

    return (
        <div className="payment grid">
            <div className="payment__info grid">
                <div className="payment__info__customer">
                    <h3 className="payment__info__customer__logo">pocomart</h3>
                    <div className="payment__info__customer__account">
                        <div className="payment__info__customer__account__text">
                            Thông tin nhận hàng
                        </div>
                        <div className="payment__info__customer__account__login">
                            <i className="bx bx-user-circle"></i>
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                    </div>
                    <InputField />
                    <InputField />
                    <InputField />
                    <InputField />
                    <InputField />
                </div>
                <div className="payment__info__deliver">
                    <div className="payment__info__customer__title">
                        <div className="payment__info__customer__title__text">
                            Thông tin nhận hàng
                        </div>
                        <div className="payment__info__customer__title__login">Đăng nhập</div>
                        <InputField />
                        <InputField />
                        <InputField />
                        <InputField />
                        <InputField />
                    </div>
                </div>
            </div>
            <div className="payment__product">
                <div className="payment__info__customer__title">
                    <div className="payment__info__customer__title__text">Thông tin nhận hàng</div>
                    <div className="payment__info__customer__title__login">Đăng nhập</div>
                    <InputField />
                    <InputField />
                    <InputField />
                    <InputField />
                    <InputField />
                </div>
            </div>
        </div>
    );
};

Pay.propTypes = {};

export default Pay;
