import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { runFireworks } from 'utils/confettiFireworks';

const Pay = (props) => {
  useEffect(() => {
    runFireworks();
  }, []);

  return <div>Pay Product Success</div>;
};

Pay.propTypes = {};

export default Pay;
