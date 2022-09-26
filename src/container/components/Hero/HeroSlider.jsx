import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeroSliderItem from './HeroSliderItem';

const HeroSlider = (props) => {
    const { data, control, timeOut, auto } = props;
    const timerOut = timeOut ? timeOut : 3000;
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
        setActiveSlide(index);
    }, [activeSlide, data]);

    const preSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    };

    useEffect(() => {
        if (auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            }, timeOut);
            return () => {
                clearInterval(slideAuto);
            };
        }
    }, [auto, nextSlide, timeOut, timerOut]);

    return (
        <div className="hero-slider">
            {data.map((item, index) => (
                <HeroSliderItem key={index} item={item} active={index === activeSlide} />
            ))}

            {control && (
                <div className="hero-slider__control">
                    <div className="hero-slider__control__item" onClick={preSlide}>
                        <i className="bx bx-chevron-left"></i>
                    </div>

                    <div className="hero-slider__control__item">
                        <div className="index">
                            {activeSlide + 1}/{data.length}
                        </div>
                    </div>

                    <div className="hero-slider__control__item" onClick={nextSlide}>
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </div>
            )}
        </div>
    );
};

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,
};

export default HeroSlider;
