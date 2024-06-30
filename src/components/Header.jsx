// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8" />
          <h1 className="ml-2 text-xl font-bold">РЕЧНОТА</h1>
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">О РЕЧНОТА</a>
          <a href="#" className="hover:underline">КАТАЛОГ</a>
          <a href="#" className="hover:underline">НАШИ МАГАЗИНЫ</a>
          <a href="#" className="hover:underline">КОНТАКТЫ</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="material-icons">shopping_cart</span>
            <span>Товаров: 3</span>
          </div>
          <span className="font-bold">5400 Р</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
