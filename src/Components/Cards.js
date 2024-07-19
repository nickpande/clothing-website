import React from 'react'
import Data from "../data"
import Card from './Card'
import '../Components/Cards.css'

function Cards() {

  return (
    <div>
    <div class="main-title-tt">
							<div class="main-title-left">
								<span>For You</span>
								<h2>New Arrivals Products</h2>
							</div>
							<a href="/product_type/3?page=1" class="see-more-btn">See All</a>
						</div>
    <div className='bg-violet-50'>
        <Card>
        </Card>
    </div>
    </div>
  )
}

export default Cards