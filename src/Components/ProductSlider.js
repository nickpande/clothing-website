import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./product.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
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
      ]
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
         <div class="max-w-7xl mx-auto py-8">
        <h1 class="text-3xl font-bold text-center mb-4">NEW ARRIVAL</h1>
        <p class="text-center text-gray-600 mb-8">Our campaigns, the latest trends and new collections</p>
        </div>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard imgSrc={slide.image} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
          
        </Slider>
        <div class="text-center mt-8 mb-16">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">VIEW ALL PRODUCTS</button>
        </div>
      </div>
    );
  }
}

export default ProductSlider;
