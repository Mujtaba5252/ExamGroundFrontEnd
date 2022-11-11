import React, { useState } from "react";
import logo2 from "../Images/logo2.png";
import '../Components/Navbar.css'
import { Link,useNavigate } from 'react-router-dom';

import { MenuIcon,XIcon } from '@heroicons/react/outline';

function Navbar() {
  const navigate=useNavigate();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1  dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to='/' className="flex items-center">
            <img src={logo2} className="mr-3 h-8 sm:h-[45px]" alt="Exam Ground Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Exam Ground</span>
          </Link>

          <button  type="button" onClick={handleClick}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 "
           >
            <span className="sr-only">Open main menu</span>
           {!nav ? <MenuIcon className="w-6 h-5"></MenuIcon>:<XIcon className='w-6 h-5'/>}
          </button>

          <div className="hidden w-full md:block md:p-0 md:mt-5 md:w-auto">
            <ul className="flex flex-col items-center  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8  md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <Link to="/"  className="block py-2 pr-4 pl-3 text-white   bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:hover:text-blue-700">Home</Link>
              </li>
              <li>
                <Link to="/Feature"   className="block py-2 pr-4 pl-3  text-gray-700   rounded hover:bg-gray-100 md:hover:bg-transparent   md:hover:text-blue-700 md:p-0 ">Features</Link>
              </li>
              <li>
                <Link to="/ContactUs"  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0 ">Contact Us</Link>
              </li>
             
              <div className="hidden md:flex pt-0 ">
              <button className="block py-2 pr-4 pl-3 mx-1 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-3xl"
               onClick={()=>navigate('/SignUp')}>
                    Sign Up
                </button>
                <button className="block py-2 pr-4 pl-3  text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-3xl"
                 onClick={()=>navigate('/SignIn')}>
                    Sign In
                </button>
              </div>
            </ul>
          </div>
           {/* for mobile */}
          <div className={!nav ? "hidden" : " w-full   md:block md:w-auto"}>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className='md:hidden block hover:w-full py-2 pr-4 pl-3 text-center text-gray-700 rounded hover:bg-gray-200 hover:rounded-[20px]  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white '>Home</Link>
              </li>
              <li>
                <Link to="/feature" className="md:hidden block hover:w-full py-2 pr-4 pl-3 text-center  text-gray-700 rounded hover:bg-gray-200 hover:rounded-[20px]  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white ">Features</Link>
              </li>
              <li>
                <Link to="/contactUs" className=" md:hidden block hover:w-full mb-2 py-2 pr-4 pl-3 text-center text-gray-700 rounded hover:bg-gray-200 hover:rounded-[20px] dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white ">Contact Us</Link>
              </li>
            
             
              <div className=" pt-0">
              <button className="md:hidden block w-full mb-[10px] py-2 pr-4 pl-3  text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-3xl"
               onClick={()=>navigate('/Signup')}>
                    Sign Up
                </button>
                <button className="md:hidden block w-full  py-2 pr-4 pl-3  text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-3xl"
                 onClick={()=>navigate('/SignIn')}>
                    Sign In
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
