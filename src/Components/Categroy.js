// src/CategoryList.js

import React from 'react';
import './CategoryList.css';

const categories = [
  {
    name: 'Kanjeevaram',
    image: 'https://pipaltreestudio.com/upload/2_9xlQzGH.jpg',
  },
  {
    name: 'Saree+Embroidered Blouse',
    image: 'https://pipaltreestudio.com/upload/2_NfrTEo4.jpg',
  },
  {
    name: 'Blouse Fabrics',
    image: 'https://pipaltreestudio.com/upload/panduri.jpg',
  },
  {
    name: 'Georgette chiffon & Crepe',
    image: 'https://pipaltreestudio.com/upload/2_9xlQzGH.jpg',
  },
  {
    name: 'Category 5',
    image: 'https://pipaltreestudio.com/upload/panduri.jpg',
  },
   {
    name: 'Category 6',
    image: 'https://pipaltreestudio.com/upload/linen_combination.jpg_1.jpg',
  },
  {
    name: 'Category 7',
    image: 'https://pipaltreestudio.com/upload/2_9xlQzGH.jpg',
  },
  {
    name: 'Category 8',
    image: 'https://pipaltreestudio.com/upload/kanjeevaram.jpg',
  },
  {
    name: 'Category 9',
    image: 'https://pipaltreestudio.com/upload/saree_with_ebmbroidery_blouse.jpg',
  },
  {
    name: 'Category 10',
    image: 'https://pipaltreestudio.com/upload/blouse_fabric.jpg',
  },
  {
    name: 'Category 11',
    image: 'https://pipaltreestudio.com/upload/silk_wZcHGSd.jpg',
  },
  {
    name: 'Category 11',
    image: 'https://pipaltreestudio.com/upload/prints.jpg',
  },

];

const CategoryList = () => {
  return (
    <div>
      <div className="category-header">
        <h2>Shop By</h2>
        <h1>Categories</h1>
        <a href="#see-all" className="see-all">See All</a>
      </div>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
