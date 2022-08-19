import Button from 'Client/components/Form/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSliderItem = (props) => {
  const { item, active } = props;

  return (
    <div className={`hero-slider__item ${active ? 'active' : ''}`}>
      <div className="hero-slider__item__info">
        <div className={`hero-slider__item__info__title color-${item.color}`}>
          <span>{item.title}</span>
        </div>

        <div className="hero-slider__item__info__description">
          <span>{item.description}</span>
        </div>

        <div className="hero-slider__item__info__btn">
          <Link to={item.path}>
            <Button backgroundColor={props.item.color} icon="bx bx-cart" animate={true}>
              xem chi tiết
            </Button>
          </Link>
        </div>
      </div>

      <div className="hero-slider__item__image">
        <div className={`shape bg-${item.color}`}></div>
        <img src={item.img} alt="" />
      </div>
    </div>
  );
};

export default HeroSliderItem;
