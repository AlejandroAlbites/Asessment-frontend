import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../store/reducers/GetApi.reducer';
import { Card } from './Card';

export const ProductCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const { getApi, error, loading } = useSelector(
    (state) => state.getApiReducer
  );
  console.log(getApi);
  if (error !== null) {
    return <p>UPS! ocurrió un error. Error:{error}</p>;
  }

  return (
    <div className="div__block-products">
      <h1 className="h1__products-title">Products</h1>
      {loading && <p className="p__loading-get-api">Loading...</p>}

      <div className="card-products-container">
        {getApi.map(({ id, title, image }) => (
          <Card key={id} id={id} title={title} image={image} />
        ))}
      </div>
    </div>
  );
};
