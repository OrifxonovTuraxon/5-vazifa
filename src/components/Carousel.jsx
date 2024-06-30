// src/components/Carousel.jsx
import React from 'react';

const Carousel = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(carousel-image.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
        <h2 className="text-white text-4xl font-bold mb-4">Истина в качестве</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Купить</button>
      </div>
    </div>
  );
};

export default Carousel;
