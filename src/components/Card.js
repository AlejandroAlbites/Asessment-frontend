import React from 'react';
import TimerRandom from './TimerRandom';

export const Card = ({ id, title, image }) => {
  return (
    <div>
      <div key={id} className="div__card-product-container">
        <img className="img__card-product-img" src={image} alt={title} />
        <h2 className="h2__card-product-title">{title}</h2>
        <TimerRandom id={id} />
      </div>
    </div>
  );
};
