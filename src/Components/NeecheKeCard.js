import React from 'react'
import Data from '../data'
import '../Components/Card.css'
import Cards from './Cards';


const products = [
  {
    name: 'pale green tussar weave',
    price: 22800,
    image: 'https://pipaltreestudio.com/upload/2_9xlQzGH.jpg',
    inStock: true,
  },
  {
    name: 'red satin banaras',
    price: 18600,
    image: 'https://pipaltreestudio.com/upload/2_TEGvYJ7.jpg',
    inStock: true,
  },
  {
    name: 'marble print green',
    price: 7200,
    image: 'https://pipaltreestudio.com/upload/2_TEGvYJ7.jpg',
    inStock: true,
  },
  {
    name: 'ponduru khadi cream',
    price: 0,
    image: 'https://pipaltreestudio.com/upload/2_dakuNha.jpg',
    inStock: false,
  },
  {
    name: 'yellow green',
    price: 8600,
    image: 'https://pipaltreestudio.com/upload/2_zN0qINu.jpg',
    inStock: true,
  },
];

function Card(){
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card hover:scale-125 transition-all	duration-300	">
          {product.inStock ? (
            <div className="stock-status in-stock">In Stock</div>
          ) : (
            <div className="stock-status out-of-stock">Out Of Stock</div>
          )}
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">₹{product.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Card;