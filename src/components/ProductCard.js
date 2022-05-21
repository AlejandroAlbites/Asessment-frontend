import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

export const ProductCard = () => {
  const url = 'https://fakestoreapi.com/products';

  const [stateProducts, setStateProducts] = useState([]);

  const getProducts = () => {
    axios
      .get(url)
      .then(({ data }) => {
        setStateProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
    return setStateProducts;
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(stateProducts);
  return (
    <div>
      <h1>Products</h1>
      <div className="card-products-container">
        {stateProducts.map(({ id, image, title }) => {
          return (
            <div key={id} className="div__card-product-container">
              <img className="img__card-product-img" src={image} alt={title} />
              <h2 className="h2__card-product-title">{title}</h2>
              <p className="p__card-product-detail">Go to detail</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
