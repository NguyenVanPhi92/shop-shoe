import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const { title, content } = props;
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();

  // handle
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="accordion" ref={dropdownRef}>
      <div className={dropdown ? 'contentBx active' : 'contentBx'} onClick={showDropdown}>
        <div className="label">{title}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Dropdown;
