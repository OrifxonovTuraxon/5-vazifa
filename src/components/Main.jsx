// src/components/Main.jsx
import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Category from './Category';
import Products from './Products';

const Main = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Products />
    </div>
  );
};

export default Main;
