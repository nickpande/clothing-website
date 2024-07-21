import React from "react";
import { Card, Button } from "react-bootstrap";
import box1 from '../Components/box1.jpg'

const ProductCard = props => {
  return (
    <>
 <div class="bg-white shadow-md rounded-lg p-4">
                <img src={box1} alt="Limited edition combination jacket" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">Limited edition combination jacket</h2>
                <p class="text-red-500 text-lg mb-2">
                    <span class="line-through text-gray-400">$89.00</span> $75.00
                </p>
                <p class="text-sm text-gray-500 mb-2">-16%</p>
                <div class="flex justify-between items-center">
                    <p class="text-gray-500">★★★★☆</p>
                </div>
            </div>
      
    </>
  );
};

export default ProductCard;
