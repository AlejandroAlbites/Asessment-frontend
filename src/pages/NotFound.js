import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main className="main__not-found-container">
      <div className="div__not-found-container">
        <h1 className="h1__error-title">ERROR 404</h1>
        <p className="p__error-description">
          Page not found, please get back to home page
        </p>
        <Link to="/">
          <button className="btn-get-back-home">Home</button>
        </Link>
      </div>
    </main>
  );
};
