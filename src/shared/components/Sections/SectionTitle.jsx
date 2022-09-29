import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SectionTitle = (props) => {
    return (
        <div className="section__title">
            <div className="title">{props.title}</div>
            {props.menu && (
                <div className="menu">
                    <ul>
                        <li>Giày nam</li>
                        <li>Giày nữ</li>
                        <li>Giày công sở</li>
                        <li>Street wear</li>
                    </ul>
                </div>
            )}
            <Link to={props.slug ? props.slug : '/catalog'} className="btn_read_more">
                {props.btnContent && <button>Xem tất cả</button>}
            </Link>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
    menu: PropTypes.bool,
    btnContent: PropTypes.string,
};

export default SectionTitle;
