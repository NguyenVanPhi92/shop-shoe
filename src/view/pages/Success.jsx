import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from 'shared/assets/images';
import Button from 'shared/components/Form/Button/Button';
import Grid from 'shared/grid/components/Grid';
import { runFireworks } from 'utils/confettiFireworks';

const Success = () => {
    const [timeOut, setTimeOut] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        runFireworks();

        const timer = setInterval(() => {
            setTimeOut((prev) => prev + 1);
        }, 1000);

        if (timeOut === 10) return navigate('/');
        return () => {
            clearInterval(timer);
        };
    }, [navigate, timeOut]);

    return (
        <div className="wrapper">
            <Grid col={2}>
                <div className="right">
                    <img src={logo} alt="" />
                    <div className="message">
                        <svg className="message-icon" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" stroke="#8EC343" strokeWidth="3">
                                <circle cx="36" cy="36" r="35"></circle>
                                <path d="M17.417,37.778l9.93,9.909l25.444-25.393"></path>
                            </g>
                        </svg>
                        <div className="message__content">
                            <p className="message__content__title">Cảm ơn bạn đã đặt hàng</p>
                            <p className="message__content__sub-title">
                                Một email xác nhận đã được gửi tới patrickdev330@gmail.com. Xin vui
                                lòng kiểm tra email của bạn
                            </p>
                        </div>
                    </div>

                    <div className="customer">
                        <Grid col={2}>
                            <div className="customer__info">
                                <p className="customer__info__title">Thông tin mua hàng</p>
                                <p className="text">Nguyễn vạn phi</p>
                                <p className="text">patrickdev330@gmail.com</p>
                            </div>
                            <div className="customer__payment">
                                <p className="customer__payment__title">Thông tin mua hàng</p>
                                <p className="text">Nguyễn vạn phi</p>
                                <p className="text">patrickdev330@gmail.com</p>
                            </div>
                            <div className="customer__shipping">
                                <p className="customer__shipping__title">Thông tin mua hàng</p>
                                <p className="text">Nguyễn vạn phi</p>
                                <p className="text">patrickdev330@gmail.com</p>
                            </div>
                            <div className="customer__address">
                                <p className="customer__address__title">Địa chỉ nhận hàng</p>
                                <p className="text">Nguyễn vạn phi</p>
                                <p className="text">Gò vấp</p>
                                <p className="text">TP Hồ Chí Minh</p>
                            </div>
                        </Grid>
                    </div>
                </div>

                <div className="left">
                    <div className="file">
                        <Button>
                            <i className="bx bxs-file" />
                        </Button>
                    </div>

                    <div className="table">
                        <div className="title">
                            <p>Đơn hàng #1022 (3)</p>
                        </div>

                        <div className="calculate">
                            <div className="provisional">
                                <p className="text">Tạm tính</p>
                                <p className="price">5.300.000₫</p>
                            </div>

                            <div className="fee">
                                <p className="text">Phí vận chuyển</p>
                                <p className="price">40.000₫</p>
                            </div>
                        </div>

                        <div className="total">
                            <p className="text">Tổng cộng</p>
                            <p className="price">5.340.000₫</p>
                        </div>
                    </div>
                </div>
            </Grid>

            <div className="btn">
                <Button>
                    <Link to="/catalog">Tiếp tục mua hàng</Link>
                </Button>
            </div>
        </div>
    );
};

export default Success;
