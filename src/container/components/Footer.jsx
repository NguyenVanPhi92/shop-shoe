import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../../shared/grid/components/Grid';
import logo from 'shared/assets/images/Logo-2.png';

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about',
    },
    {
        display: 'Liên hệ',
        path: '/about',
    },
    {
        display: 'Tuyển dụng',
        path: '/about',
    },
    {
        display: 'Tin tức',
        path: '/about',
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about',
    },
];

const footerCustomerLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },
];

const footerContact = [
    {
        display: 'Tầng 2 , tòa nhà HCMCC. 249A Thụy Khuê, Tây Hồ, Hà Nội',
        path: '/about',
    },
    {
        display: 'Tầng 2 , tòa nhà HCMCC. 249A Thụy Khuê, Tây Hồ, Hà Nội',
        path: '/about',
    },
    {
        display: 'Tầng 2 , tòa nhà HCMCC. 249A Thụy Khuê, Tây Hồ, Hà Nội',
        path: '/about',
    },
    {
        display: 'support@sapo.vn',
        path: '/about',
    },
];

const footerSocial = [
    {
        title: 'Facebook',
        display: "<i class='bx bxl-facebook'></i>",
        path: '/about',
    },
    {
        title: 'Youtube',
        display: "<i class='bx bxl-youtube' ></i>",
        path: '/about',
    },
    {
        title: 'Twitter',
        display: "<i class='bx bxl-twitter' ></i>",
        path: '/about',
    },
    {
        title: 'Instagram',
        display: "<i class='bx bxl-instagram'></i>",
        path: '/about',
    },
];
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social">
                    {footerSocial.map((item, index) => (
                        <Link to={item.path} key={index}>
                            <div className="social__item">
                                <div className="social__item__title">{item.title}</div>
                                <div
                                    className="social__item__icon"
                                    dangerouslySetInnerHTML={{ __html: item.display }}
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                <Grid col={5} mdCol={2} smCol={1} gap={25}>
                    <div>
                        <div className="footer__title">Tổng đài hỗ trợ</div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Về Yolo</div>
                        <div className="footer__content">
                            {footerAboutLinks.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Chăm sóc khách hàng</div>
                        <div className="footer__content">
                            {footerCustomerLinks.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Thông tin liên hệ</div>
                        <div className="footer__content">
                            {footerContact.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu
                            người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động,
                            tích cực hơn.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    );
};

export default Footer;
