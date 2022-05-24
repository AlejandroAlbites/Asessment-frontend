import React from 'react';
import { Link } from 'react-router-dom';
import TimerRandomDetails from './TimerRandomDetails';

export const Card = ({ id, title, image }) => {
  return (
    <div>
      <div key={id} className="div__card-product-container">
        <img className="img__card-product-img" src={image} alt={title} />
        <h2 className="h2__card-product-title">{title}</h2>
        <TimerRandomDetails id={id} />
      </div>
    </div>
  );
};
