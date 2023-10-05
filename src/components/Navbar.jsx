import React, { useState } from 'react';
// import { BsChatSquareDots } from 'react-icons/bs';
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaYoutube,

} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
    className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white shadow  bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        <li>
        <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
         
        </li>
        <li>
         <NavLink to="/contact" activeClassName="active">
         Get Involved
          </NavLink>
        
        </li>
        <li>
        <NavLink to="/contact" activeClassName="active">
         Prayer
          </NavLink>
        </li>
        <li>
        <NavLink to="/contact" activeClassName="active">
          About Us
          </NavLink>
        </li>
        
      </ul>
      <div className='flex justify-between'>
        <a href='https://www.facebook.com/profile.php?id=100066928100987'>
        <FaFacebookF className='mx-4' />
        </a>
        <a href='https://youtube.com/@TheWordPrayerMinistry?si=5Z5yIuqsFixIGVQg'>
        <FaYoutube className='mx-4' />
        </a>
         <a href='https://instagram.com/twprayerministry?igshid=MzRlODBiNWFlZA=='>
        <FaInstagram className='mx-4' />
        </a>
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <a href='/'>Home</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#gallery'>Get Involved</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#deals'>Prayer</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#contact'>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
