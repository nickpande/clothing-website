import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUserPlus, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link ,useNavigate} from 'react-router-dom'
import { BiCategory } from "react-icons/bi";
import SignUp from './SignUp'
import SignIn from './SignIn'
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

function Navbar(){
  const  navigate = useNavigate();
  function clickhandler(event){
   console.log("onclick")
    navigate("/signup");
    }



    const[val,setVal] = useState(true);
    
    function handler()
    {
      setVal(!val);
      console.log(val);
    }


    function openNav(){
      console.log("hll");
      document.getElementById("myNave").style.width="10%";
  }

  function closeNav(){
    console.log("close");
      document.getElementById("myNave").style.width="0%";
  }
  return (




    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
       

      
        <span id="function"    >
            <IoMdMenu onClick={openNav} className='text-lg' ></IoMdMenu>
        </span>
      
        <div id="myNave"  class="overlay">
        <a href="javascript:void(0)" class="close">
        <IoMdMenu onClick={closeNav} ></IoMdMenu>
        </a>
        <div class="overlaycontent">
        <div className="flex flex-col items-center space-x-4 ">

          <a href="tel:+919553049999" className="flex items-center font-sm">
            <FontAwesomeIcon icon={faPhone} className="mr-1  text-gray-400" onClick={clickhandler}  />  phone
          </a>
          <Link to="/signup" className="flex items-center font-sm">
            <FontAwesomeIcon icon={faUserPlus} className="mr-1   text-gray-400" /> Sign Up
          </Link>
          <Link to= {"/signin"} >
              <div>
              <FontAwesomeIcon icon={faSignInAlt} className="mr-1  text-gray-400  " /> Sign In
              </div>
            
          </Link>
          <Link to="/signup" className="flex items-center font-sm">
            <BiCategory  icon={faUserPlus} className="mr-1   text-gray-400" /> category
          </Link>

          <div className="relative  text-gray-400 flex items-center cursor-pointer text-3xl" >
            <FontAwesomeIcon icon={faShoppingCart} className=" mr-5 " />
            <span  className="pointer mr-5"  >Cart</span>
          </div>
          <div className="flex flex-col items-center">
   
    </div>
        </div>
        </div>
        
        </div>


      <div className='text-3xl font-bold text-green-700'>
      <img src="https://pipaltreestudio.com/static/images/logo2.png" alt="" className="h-10" />
      </div>

       {
        val ?( <div className='text-lg' onClick={handler}>   <IoMdSearch /></div>):( <div>     <input
          type="text"
          placeholder="Search for products..."
          className="ml-4 mt-3 px-4 py-2 border rounded-md"
        />
        <button onClick={handler} className=" px-4 py-2 mt-3 text-black border rounded-md">
          Search
        </button></div>
       )

       }
     

    
    
     


      </div>
      <div className="  container mx-auto mt-5 mb-4 px-4 py-2  items-center">
        <div className="flex space-x-2 justify-around items-center px-5 mx-auto">
          <div className=' flex flex-col items-center transition ease-in-out delay-150 bg-white rounded-md hover:-translate-y-1   hover:scale-110 hover:bg-gray-300 duration-300 s '>
          <a href="/" className="  tracking-wide	 text-4xl font-bold font-sm">Home</a>
             <p className='text-sm font-thin'>today at huge</p>
             <div className='w-[70px] h-[2px]  bg-green-500 mt-7 opacity-45'></div>
          </div>
          <div className=' flex flex-col items-center transition ease-in-out delay-150 bg-white rounded-md hover:-translate-y-1   hover:scale-110 hover:bg-gray-300 duration-300 s '>
          <a href="/sarees" className=" tracking-wide	 text-4xl font-bold">Sarees</a>
             <p className='text-sm font-thin'>today at huge</p>
             <div className='w-[70px] h-[2px] bg-green-500 mt-7 opacity-45 '></div>
          </div>
          <div className=' flex flex-col items-center transition ease-in-out rounded-md delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 s '>
          <a href="/fabrics" className="  tracking-wide	 text-4xl font-bold ">Fabrics</a>
             <p className='text-sm font-thin'>today at huge</p>
             <div className='w-[70px] h-[2px] bg-green-500 mt-7 opacity-45'></div>
          </div>
          <div className=' flex flex-col rounded-md items-center transition ease-in-out delay-150 bg-white hover:-translate-y-1   hover:scale-110 hover:bg-gray-300 duration-300 s  '>
        <a href="/deals" className=" tracking-wide	 text-4xl font-bold font-sm">Deals</a>
             <p className='text-sm font-thin'>today at huge</p>
             <div className='w-[70px] h-[2px] bg-green-500 mt-7 opacity-45'></div>
          </div>
          <div className=' flex flex-col items-center rounded-md transition ease-in-out delay-150 bg-white hover:-translate-y-1  hover:scale-110 hover:bg-gray-300 duration-300 s '>
          <a href="/contact" className="  tracking-wide	 text-4xl font-bold font-sm" >Contact Us</a>
          <p className='text-sm font-thin'>today at huge</p>
            <div className='w-[70px] h-[2px]  bg-green-500 mt-7 opacity-45'></div>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
