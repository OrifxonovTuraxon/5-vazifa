// src/components/Category.jsx
import React from 'react';

const categories = [
  { title: 'Колбасные и мясные изделия', description: 'Цена от 150 Р за 100 грамм', image: 'category1.jpg', bgColor: 'bg-red-500' },
  { title: 'Молочные продукты', description: 'Сыры, йогурты, молоко', image: 'category2.jpg', bgColor: 'bg-yellow-500' },
  { title: 'Морепродукты', description: 'Рыба, икра, креветки', image: 'category3.jpg', bgColor: 'bg-green-500' },
  { title: 'Пиво', description: 'Крафтовое пиво', image: 'category4.jpg', bgColor: 'bg-orange-500' },
  { title: 'Замороженные продукты', description: 'Замороженные овощи, фрукты', image: 'category5.jpg', bgColor: 'bg-blue-500' },
  { title: 'Мёд', description: 'Натуральный мед', image: 'category6.jpg', bgColor: 'bg-purple-500' },
  { title: 'Свежие овощи', description: 'Картофель, лук, морковь', image: 'category7.jpg', bgColor: 'bg-green-300' },
  { title: 'Свежие фрукты', description: 'Свежие фрукты', image: 'category8.jpg', bgColor: 'bg-orange-300' },
];

const Category = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {categories.map((category, index) => (
        <div key={index} className={`p-4 ${category.bgColor} text-white rounded`}>
          <img src={category.image} alt={category.title} className="w-full h-32 object-cover rounded mb-2" />
          <h3 className="font-bold text-lg">{category.title}</h3>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
