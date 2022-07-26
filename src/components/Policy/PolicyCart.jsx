import React from 'react';
import PropTypes from 'prop-types';

const PolicyCart = (props) => {
  const { name, description, icon } = props;

  return (
    <div className="policy-card">
      <div className="policy-card__icon">
        <i className={icon}></i>
      </div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">{name}</div>
        <div className="policy-card__info__description">{description}</div>
      </div>
    </div>
  );
};

PolicyCart.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PolicyCart;
