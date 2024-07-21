import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Category from'../Components/Categroy'
import NeecheKeCard from '../Components/NeecheKeCard'
import Navbar  from '../Components/Navbar'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'
import Nice from '../Components/Nice'
import Centre from '../Components/Centre'
import ProductSlider from './ProductSlider'
import AboveFooter from '../AboveFooter'

function Middler() {

 

  return (
   <div>
    
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
           <ProductSlider></ProductSlider>
        </div>
      
      
        <Centre></Centre>
        </div>


        
        
        <Nice></Nice>
       <div className='flex  items-center justify-center'>
        <AboveFooter></AboveFooter>
       </div>
      <div>
        <Footer></Footer>
      </div>
    

    </div>
  )
}

export default Middler