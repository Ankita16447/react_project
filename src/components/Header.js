import React from 'react'
import {cartlogo} from "../assets/index"

const Header = () => {
  return (
  <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">

    <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <div>
                <img className="w-20" src={cartlogo} alt="logo"/>
            </div>
            <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Home
                </li>

                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Pages
                </li>

                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Shop
                </li>

                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Elements
                </li>

                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Blog
                </li>

            </ul>

            <div>
                <img className="w-10" src={cartlogo}  alt="" />
            </div>

            <img className ="w-8 h-8 rounded-full" src="" alt="userlogo" />
            
        </div>     
    </div>
  </div>
  );
  
};

export default Header
