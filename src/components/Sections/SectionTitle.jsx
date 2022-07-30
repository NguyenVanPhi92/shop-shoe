import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SectionTitle = (props) => {
  return (
    <div className="section__title">
      <div>{props.title}</div>
      <Link to={props.slug}>{props.btnContent && <button>Xem tất cả</button>}</Link>
    </div>
  );
};

SectionTitle.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  btnContent: PropTypes.number,
};

export default SectionTitle;
