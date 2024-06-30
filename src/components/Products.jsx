// src/components/Products.jsx
import React from 'react';

const products = [
  { name: 'Говядина, кусок с/к', price: '500 Р', oldPrice: '660 Р', image: 'product1.jpg' },
  { name: 'Говядина, кусок к/к', price: '500 Р', oldPrice: '660 Р', image: 'product2.jpg' },
  { name: 'Говядина, кусок с/к', price: '500 Р', oldPrice: '660 Р', image: 'product3.jpg' },
  { name: 'Говядина, кусок с/к', price: '500 Р', oldPrice: '660 Р', image: 'product4.jpg' },
];

const Products = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 bg-gray-200 rounded">Хиты</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Скидки</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Новинки</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded p-4">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-500 line-through">{product.oldPrice}</p>
            <p className="font-bold text-lg">{product.price}</p>
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Купить</button>
              <button className="px-4 py-2 bg-gray-200 rounded">В 1 клик</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
