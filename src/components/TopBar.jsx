import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { TbBuildingChurch } from 'react-icons/tb';

const TopBar = () => {
  return (
    <div className='flex justify-between shadow drop-shadow-xl items-center px-4 py-2'>
      <div className='flex items-center mx-4'>
        <TbBuildingChurch size={30} className='text-[var(--primary-dark)] mr-2'  />
        <a href='/'>
        <h1 className='text-sm font-bold text-gray-700'>The Word Prayer Ministries</h1>
        </a>
      </div>
      <div className='flex'>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
          <p className='text-sm text-gray-700'>11:30AM - 1PM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
          <p className='text-sm text-gray-700'>+447496021086</p>
        </div>
        <a href='/prayer'>
        <button>Submit a prayer request</button>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
