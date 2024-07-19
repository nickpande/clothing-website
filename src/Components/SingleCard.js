import React from 'react';
import Navbar from './Navbar';

const Card = (props) => {
    console.log(props);

   
  return (
    <div>
          <Navbar></Navbar>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex items-center mt-14">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://pipaltreestudio.com/upload/2_9xlQzGH.jpg" alt="A beautiful scene" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Vacations</div>
          <div className="flex items-center mt-1">
            <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-3.09 1.637a1 1 0 01-1.451-1.054l.586-3.419-2.486-2.42a1 1 0 01.554-1.705l3.448-.5 1.543-3.127a1 1 0 011.8 0l1.543 3.127 3.448.5a1 1 0 01.554 1.705l-2.486 2.42.586 3.419a1 1 0 01-1.451 1.054L10 15z" /></svg>
            <span className="ml-2 text-gray-600">4.96 (76 reviews)</span>
            <svg className="ml-auto h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z" /></svg>
            <span className="ml-2 text-sm text-gray-500">Superhost</span>
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">The Majestic and Wonderful Bahamas</h1>
          <p className="mt-2 text-gray-500">The best kept secret of The Bahamas is the country's sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
          <p className="mt-2 text-lg font-semibold">$110 <span className="text-gray-500">/night</span></p>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Card;