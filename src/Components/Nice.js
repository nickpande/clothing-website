import React from 'react'

function NI() {
  return (
    <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-8">
        <h1 class="text-3xl font-bold text-center mb-4">Popular Products</h1>
        <div class="text-center mb-8">
            <a href="#" class="text-blue-500 hover:underline mx-2">New Arrivals</a>
            <a href="#" class="text-gray-500 hover:underline mx-2">Featured</a>
            <a href="#" class="text-gray-500 hover:underline mx-2">On Sale</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         
            <div class="bg-white shadow-md rounded-lg p-4">
                <img src="https://i.pinimg.com/236x/9e/b0/ee/9eb0eeb1acba7b15b6f22aee99782ff0.jpg" alt="Tone Sneakers" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">Tone Sneakers</h2>
                <p class="text-lg mb-2">$98.00</p>
            </div>
       
            <div class="bg-white shadow-md rounded-lg p-4">
                <img src="https://i.pinimg.com/236x/9d/ae/9b/9dae9b6a2acaace81d9c68788dd158ac.jpg" alt="City Bag" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">City Bag</h2>
                <p class="text-lg mb-2">$98.00</p>
            </div>
          
            <div class="bg-white shadow-md rounded-lg p-4">
                <img src="https://i.pinimg.com/236x/c5/90/d7/c590d729d2f81a53eeb4c766f6148eb8.jpg" alt="Earrings for Women" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">Earrings for Women</h2>
                <p class="text-lg mb-2">$38.00</p>
            </div>
            
            <div class="bg-white shadow-md rounded-lg p-4">
                <img src="https://i.pinimg.com/474x/3e/63/1f/3e631fc530548a0d17ee77aed1f8e6db.jpg" alt="Ribbed beanie Group" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">Ribbed beanie Group</h2>
                <p class="text-lg mb-2">$28.00 - $32.00</p>
            </div>
           
            <div class="bg-white shadow-md rounded-lg p-4">
                <img src="https://i.pinimg.com/564x/bb/e4/85/bbe48551092e28fbf80238272853f7cd.jpg" alt="Arden Bloom Cotton" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">Arden Bloom Cotton</h2>
                <p class="text-lg mb-2">$98.00</p>
            </div>
            <div class="bg-white shadow-md rounded-lg p-4">
                <img src="https://i.pinimg.com/564x/bb/e4/85/bbe48551092e28fbf80238272853f7cd.jpg" alt="Fashion Glasses" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">Fashion Glasses</h2>
                <p class="text-lg mb-2">$39.00</p>
            </div>
      
            <div class="bg-white shadow-md rounded-lg p-4 relative">
                <img src="https://i.pinimg.com/236x/16/17/83/161783f3189bb60023fb7fe6a4dae650.jpg" alt="Leather Shopper Bag" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">Leather Shopper Bag</h2>
                <p class="text-lg mb-2">
                    <span class="line-through text-gray-400">$60.00</span> $49.00
                </p>
                <span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">Sale</span>
            </div>
      
            <div class="bg-white shadow-md rounded-lg p-4">
                <img src="https://i.pinimg.com/236x/68/e9/9a/68e99af36b460e6bd1a712f047dda9d4.jpg" alt="Leather Convertible" class="w-full h-56 object-cover mb-4" />
                <h2 class="text-lg font-semibold mb-2">Leather Convertible</h2>
                <p class="text-lg mb-2">$68.00</p>
            </div>
        </div>
        <div class="text-center mt-8">
            <button class="bg-gray-500 text-white px-4 py-2 rounded-lg">LOAD MORE</button>
        </div>
    </div>
   </div>
  )
}

export default NI