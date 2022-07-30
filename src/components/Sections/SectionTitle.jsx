import React from 'react';
import { Link } from 'react-router-dom';

const SectionTitle = (props) => {
  return (
    <div className="section__title">
      <div>{props.title}</div>
      <Link to="/catalog">
        <button>Xem tất cả</button>
      </Link>
    </div>
  );
};

SectionTitle.propTypes = {};

export default SectionTitle;
