// src/components/Rating.js
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Rating.css';

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="star" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} className="star" />);
    } else {
      stars.push(<FaRegStar key={i} className="star" />);
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
