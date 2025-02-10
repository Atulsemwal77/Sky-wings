import React from 'react';
import logo from '../assets/products/image 1.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white " >
      <div className="mx-auto px-2 sm:px-6 lg:px-8 w-full  ">
        <div className="relative flex h-16 items-center justify-between  ">
          {/* Logo Section (left side) */}
          <div className="flex-shrink-0">
            <img
              className="h-10 w-auto"
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Navigation Links (right side) */}
          <div className="hidden sm:block">
            <div className="flex space-x-4 ">
              <NavLink to="/"
              className={({isActive})=>(isActive ? " text-red-600 px-3 py-2 rounded-md text-sm font-medium line": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ")} 
              >
                Home
              </NavLink>
              <NavLink to='/services' className={({isActive})=>(isActive ? "text-red-600 px-3 py-2 rounded-md text-sm font-medium": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")} 
                // className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Service
              </NavLink>
              <NavLink to='/job'
              
              className={({isActive})=>(isActive ? "text-red-600 px-3 py-2 rounded-md text-sm font-medium": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")} 
              >
                Job
              </NavLink>
              <NavLink to='/employes'
              
              className={({isActive})=>(isActive ? "text-red-600 px-3 py-2 rounded-md text-sm font-medium": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")} 
              >
                Employes
              </NavLink>
              <NavLink to='/freelancers'
              
              className={({isActive})=>(isActive ? "text-red-600 px-3 py-2 rounded-md text-sm font-medium": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")} 
              >
                Freelancers
              </NavLink>
              <NavLink to='/about'
              
              className={({isActive})=>(isActive ? "text-red-600 px-3 py-2 rounded-md text-sm font-medium": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")} 
              >
                About
              </NavLink>
              <NavLink to='/blog'
                 className={({isActive})=>(isActive ? "text-red-600 px-3 py-2 rounded-md text-sm font-medium": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")} 
              >
                Blog
              </NavLink>
              <NavLink to='/carrers'
              
              className={({isActive})=>(isActive ? "text-red-600 px-3 py-2 rounded-md text-sm font-medium": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")} 
              >
                Careers
              </NavLink>
              <NavLink to='/contact'
                
                className={({isActive})=>(isActive ? "text-red-600 px-3 py-2 rounded-md text-sm font-medium": " hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")} 
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
