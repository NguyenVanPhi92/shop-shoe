import logo from 'shared/assets/images/Logo-2.png';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
const mainNav = [
  {
    display: 'Trang chủ',
    path: '/',
    navItem: false,
  },
  {
    display: 'Sản phẩm',
    path: '/catalog',
    navItem: true,
    icon: '<i class="bx bx-caret-down"></i>',
    dropDown: [
      {
        title: 'Đồ nam',
        li: ['Áo thun', 'Áo sơ mi', 'Quần jean', 'Áo vet', 'Áo polo', 'Quần kaki'],
      },
      {
        title: 'Đồ nữ',
        li: ['Đầm cánh bướm', 'Váy', 'Quần jean', 'Áo 2 dây', 'Áo trễ vai'],
      },
      {
        title: 'Tin tức',
        li: ['Đầm cánh bướm', 'Váy', 'Quần jean', 'Áo 2 dây', 'Áo trễ vai'],
      },
    ],
  },
  {
    display: 'Đồ nam',
    path: '/male',
    navItem: false,
    icon: '<i class="bx bx-caret-down"></i>',
  },
  {
    display: 'Đồ nữ',
    path: '/female',
    navItem: false,
    icon: '<i class="bx bx-caret-down"></i>',
  },
  {
    display: 'Big Sale',
    path: '/accessories',
    navItem: false,
  },
  {
    display: 'Tin tức',
    path: '/news',
    navItem: false,
  },
  {
    display: 'Liên hệ',
    path: '/contact',
    navItem: false,
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef(null);

  useEffect(() => {
    const scrollHeader = window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);
  const product_01_image_01 = require('shared/assets/images/products/product-01 (1).jpg');
  const menuLeft = useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle('active');

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__menu">
          <div className="header__menu__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu"></i>
          </div>

          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((navEl, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item menu-dropdown ${
                  index === activeNav ? 'active' : ''
                }`}
                onClick={menuToggle}
              >
                <Link to={navEl.path}>
                  <span>{navEl.display}</span>
                  <span dangerouslySetInnerHTML={{ __html: navEl.icon }}></span>
                </Link>

                <ul className="menu-dropdown__list">
                  {navEl.navItem && (
                    <div className="menu-dropdown__list__item__image">
                      <img src={product_01_image_01} alt="" />
                    </div>
                  )}

                  {navEl.dropDown?.map((dropDownEl, index) => (
                    <div key={index} className="menu-dropdown__list__item">
                      <div className="menu-dropdown__list__item__nav">
                        <div className="menu-dropdown__list__item__nav__title" key={index}>
                          {dropDownEl.title}
                        </div>

                        <ul>
                          {dropDownEl.li.map((item, index) => (
                            <Link className="drop-down__link" to={navEl.path} key={index}>
                              {item}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>

              <div className="badge">
                <span>5</span>
              </div>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
