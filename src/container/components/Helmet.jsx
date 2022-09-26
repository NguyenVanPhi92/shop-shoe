import PropTypes from 'prop-types';
import React from 'react';

// thay đổi title trên browser
const Helmet = (props) => {
    document.title = 'Yolo - ' + props.title;

    // useEffect(() => {
    //   window.screenTop(0, 0);
    // }, []);

    return <div>{props.children}</div>;
};

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Helmet;
