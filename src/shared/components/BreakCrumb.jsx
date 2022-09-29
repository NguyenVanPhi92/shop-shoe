import React from 'react';
import PropTypes from 'prop-types';

const BreakCrumb = (props) => {
    console.log(props.path);
    const { path } = props;
    return <div>{path}</div>;
};

BreakCrumb.propTypes = {
    path: PropTypes.string,
};

export default BreakCrumb;
