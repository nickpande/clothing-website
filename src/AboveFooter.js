import React from 'react'
import { useCountdown } from './GetTime'
import photu from './Components/saree-indian-dress-white-luxury-boutique-background-indian-attire-fashion-store-festive-outfit-beautiful-bollywood-clothing-315326974.jpg'

function AboveFooter() {
  return (
    <div className='bg-red-200 h-[450px] w-[1280px] mb-9' >
         <div class="relative   mb-9 flex items-center justify-center bg-white">
            <div className='w-[1280px] bg-red-300'>
                <img src={photu} alt="Deal of the Day Background" class="    object-cover" />
                
            </div>

         
        
 
        <div class="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <div class="text-center text-white">
                <h1 class="text-4xl font-bold mb-4">Deal Of The Day</h1>
             
                <div class="flex justify-center space-x-4 mb-6">
                    <div class="text-center">
                        <div class="text-2xl font-bold">00</div>
                        <div class="text-sm">Days</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold">00</div>
                        <div class="text-sm">Hours</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold">00</div>
                        <div class="text-sm">Min</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold">00</div>
                        <div class="text-sm">Sec</div>
                    </div>
                </div>
                <button class="bg-black text-white px-6 py-2  mb-8 rounded-lg">Shop Now</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboveFooter