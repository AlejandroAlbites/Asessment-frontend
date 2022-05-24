import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from '../store/reducers/GetProduct.reducer';

export const ProductDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const getProduct = (payload) => {
    return function (dispatch) {
      dispatch({ type: GET_PRODUCT_LOADING, payload: true });
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: GET_PRODUCT_ERROR, payload: err });
        })
        .finally(() => {
          dispatch({ type: GET_PRODUCT_LOADING, payload: false });
        });
    };
  };
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const { getCard, error, loading } = useSelector(
    (state) => state.getProductReducer
  );
  if (error !== null) {
    return <p>UPS! ocurrió un error. Error:{error}</p>;
  }
  return (
    <div className="div__product-container">
      {loading ? (
        <p className="p__loading-get-card">Loading...</p>
      ) : (
        <div className="div__item-product-container">
          <div>
            <img className="img__item-image" src={getCard.image} alt="img" />
          </div>
          <div className="div__item-text">
            <h1>{getCard.title}</h1>
            <p>{getCard.description}</p>
            <p>
              <strong>Category: </strong> {getCard.category}
            </p>

            <p>
              <strong>Price: </strong> ${getCard.price}
            </p>
            <div className="div__btn-container">
              <button className="btn-buy">Buy it Now</button>
              <button className="btn-cart">Add to cart</button>
              <button className="btn-watchlist">Add to Watchlist</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
