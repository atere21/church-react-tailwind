import React from 'react';
import worship from '../assets/church-building.jpg'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img
        src='https://img.freepik.com/premium-photo/group-people-raising-their-hands-crowd_844008-25.jpg?size=626&ext=jpg&ga=GA1.1.1458791122.1685000212&semt=ais'
        alt='/'
        className='w-full h-full object-cover'
      />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl md:text-6xl'>WELCOME HOME</h1>
         
          <p className='my-4'>
          We are a community built on the life and teachings of Jesus.
             God loves you, and his arms are open wide to welcome people home.
          </p>
          <h2 className='text-4xl py-4 italic'>You'll Never Walk Alone</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
