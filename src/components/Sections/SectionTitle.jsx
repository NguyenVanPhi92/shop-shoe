import React from 'react';

const SectionTitle = (props) => {
  return (
    <div className="section__title">
      <div>{props.title}</div>
      <button>Xem tất cả</button>
    </div>
  );
};

SectionTitle.propTypes = {};

export default SectionTitle;
