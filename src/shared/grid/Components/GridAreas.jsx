import React from 'react';
import PropTypes from 'prop-types';

const GridAreas = (props) => {
  return <div className={`grid grid-areas`}>{props.children}</div>;
};

GridAreas.propTypes = {
  // gridAreasName: PropTypes.string.isRequired,
};

export default GridAreas;
