import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './slider.css'; // Import the CSS file

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]); // Update the effect when the number of slides changes

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <CSSTransition
          key={index}
          in={index === current}
          timeout={800}
          classNames="fade"
          unmountOnExit
        >
          <div className={index === current ? 'slide active' : 'slide'} >
            <img src={slide} alt={`slide ${index}`} className="image" style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
          </div>
        </CSSTransition>
      ))}
      
    </div>
  );
};

export default ImageSlider;