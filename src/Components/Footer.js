// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center border-b bg-teal-950 pb-4 mb-4">
          <div className="text-sm">
            <i className="fas fa-phone mr-2"></i> (+91) 95530 49999
          </div>
          <div className="text-sm">
            <i className="fas fa-envelope mr-2"></i> info@pipaltreestudio.com
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-2 text-lg">Categories</h5>
            <ul className="text-sm space-y-2">
              <li>Kanjeevaram</li>
              <li>Saree+Embroidered Blouse</li>
              <li>Blouse Fabrics</li>
              <li>Georgette chiffon & Crepe</li>
              <li>Silk</li>
              <li>Silk Cotton</li>
              <li>Prints</li>
              <li>Linen & Combination</li>
              <li>Bandini</li>
              <li>Chikankari</li>
              <li>Ponduru Handspun Cotton</li>
              <li>Weaves</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-lg">Useful Links</h5>
            <ul className="text-sm space-y-2">
              <li>About Us</li>
              <li>Offers</li>
              <li>Faq</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-lg">Currency</h5>
            <ul className="text-sm space-y-2">
              <li>INR</li>
              <li>USD</li>
            </ul>
            <h5 className="font-bold mt-4 mb-2">Track your Order</h5>
            <ul className="text-sm space-y-2">
              <li>Tracking</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-lg">Payment Method</h5>
            <div className="flex space-x-2 mb-4">
              <img src="visa.png" alt="Visa" className="h-8" />
              <img src="mastercard.png" alt="MasterCard" className="h-8" />
              <img src="amex.png" alt="American Express" className="h-8" />
              <img src="discover.png" alt="Discover" className="h-8" />
            </div>
            <h5 className="font-bold mb-2">Newsletter</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 rounded-md text-black flex-grow"
              />
              <button className="ml-2 p-2 bg-blue-500 rounded-md">Submit</button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Contact</a>
            <a href="#" className="text-white">Privacy Policy</a>
            <a href="#" className="text-white">Term & Conditions</a>
            <a href="#" className="text-white">Refund & Return Policy</a>
          </div>
          <div>
            © Copyright 2022 <span className="font-bold">Pipal Tree Studio</span>. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
