import React from 'react';
import Slider from 'react-slick';
import './CustomCarousel.css';

import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide6.jpg';
import slide4 from '../images/slide4.gif'; // New image
import slide5 from '../images/slide7.jpg'; // New image

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" />
        </div>
        <div>
          <img src={slide5} alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default CustomCarousel;
