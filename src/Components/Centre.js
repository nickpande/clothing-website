import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player';
import vid from '../Components/banner2.jpg'
import sari2 from '../Components/sari2.jpg'
import box1 from '../Components/box1.jpg'
import box2 from '../Components/box2.jpg'
import banner3 from '../Components/banner3.jpg'
import videobanner from'../Components/videobanner.png'
function CntreTwo() {
  return (
    <div className='h-full '>
           <div class="container  mx-auto p-4 flex bg-red-400 ">
     
            <div class="mt-28  w-1/4   ">
                {/* <img src="path_to_fruits_vegetables_image.jpg" alt="Fruits & Vegetables" class="mb-4 w-32 h-44 object-cover" /> */}
                <HoverVideoPlayer
      videoSrc="https://v1.pinimg.com/videos/iht/720p/75/96/89/7596898f3c8103e413a0952412eb9e8d.mp4"
      pausedOverlay={
        <img
          src={videobanner}
          alt=""
          style={{
          
            height: '1%',
            objectFit: 'contain',
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
            </div>




          <div className='col-span-2  flex flex-col   w-2/4 items-center justify-between p-4 '>
             <div class=" bg-gray-100 flex flex-col h-1/2  w-full items-center justify-center p-4 hover:scale-110 transform transition duration-700  ">
                <img src={banner3} alt="Dairy Bread & Eggs" class=" object-cover" />
        
            </div>
            <div  className=' flex  w-full  justify-between p-4' >
            <div class="bg-pink-100 flex flex-col  w-1/2 items-center justify-center p-4 hover:scale-110 transform transition duration-700">
                <img src={box1} alt="Beverages" class=" object-cover" />
                
            </div> 
            <div class=" flex  ml-10 bg-pink-100 flex-col w-1/2 items-center justify-center p-4 hover:scale-110 transform transition duration-700">
                <img src={box2} alt="Health & Wellness" class="object-cover" />
                
            </div> 
            </div>
          </div>

            <div class="  w-1/4  items-center  ">
                <img src={sari2} alt="Packaged Foods" class="  object-contain h-full" />
              
            </div>
        </div>
    </div>

  )
}

export default CntreTwo