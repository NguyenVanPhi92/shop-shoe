import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="input_group">
      <label htmlFor="">{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputField;
