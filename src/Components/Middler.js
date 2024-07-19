import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Category from'../Components/Categroy'
import NeecheKeCard from '../Components/NeecheKeCard'
import Navbar  from '../Components/Navbar'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'
import Nice from '../Components/Nice'

function Middler() {

 

  return (

    
    <div className='flex flex-col '>
      <div>
         <Navbar></Navbar>
      </div>
       <div id="animation">
        <div id="wrapper">
            <div id="logosadhu">
                <img src="https://pipaltreestudio.com/static/images/logo2.png" width="75%" height="75%" alt=""></img>
            </div>
        </div>
        <div id="txtdiv">
            <h3 id="txt">Pipal Tree</h3>
            <h5>Presenting</h5>
            <h4>Febric</h4>
           </div>    
    </div>

      
          <Slider></Slider>
      
        <div>
            <Cards></Cards>
        </div>
        <div class="main-title-tt">
							<div class="main-title-left">
								<span>For You</span>
								<h2>New Arrivals Products</h2>
							</div>
							<a href="/product_type/3?page=1" class="see-more-btn">See All</a>
						</div>
        <div className='mb-14'>
      
          <NeecheKeCard></NeecheKeCard>
        </div>


        <div className='w-screen bg-slate-200'>
        </div>
        <div className="category-header">
        <h1>Fabrics</h1>
        <a href="#see-all" className="see-all">See All</a>
      </div>
        
        <Nice></Nice>
    
      <div>
        <Footer></Footer>
      </div>
      

    </div>
  )
}

export default Middler