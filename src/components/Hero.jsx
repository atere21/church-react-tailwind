import React from 'react';
import image1 from '../assets/church2.jpg';
import image2 from '../assets/church6.jpg';
import image3 from '../assets/praying.jpg';
import pressing2 from '../assets/pressing2.png';
import pointer2 from '../assets/pointer2.png';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className='max-w-[1440px] mx-auto h-[500px] top-[104px] bg-white justify-center py-[4rem] relative'>
      <div className='ml-[5%] grid md:flex'>
        <div className=' p-4'>
          <h3 className='text-3xl md:text-6xl font-bold text-[#120B48]'>
          WELCOME HOME
          </h3>
          <p className='text-[#000000BF] my-6 text-xl'>
          We are a community built on the life and teachings of Jesus. <br />
          God loves you, and his arms are open wide to welcome people home. <br />
          <span className='text-blue-800'>You'll Never Walk Alone</span> 
          </p>
      
          <a href='prayer'>
          <button className='bg-[#120B48] w-[221px] h-[70px] cursor-pointer my-6 text-white p-4 rounded-md'>
            Submit a prayer request
          </button>
          </a>
          
           </div>

        <div className='imagesdiv grid relative mt-20'>
          <div className='grid grid-cols-2 grid-rows-6 h-[200vh] '>
            <img className='row-span-1 object-cover p-2 w-full h-full z-10' src={image1} alt='/' />
            <img className='row-span-2 object-cover p-2 w-full h-full z-10 relative' src={image3} alt='/' />
            <img className='row-span-1 object-cover p-2 w-full h-full z-10' src={image2} alt='/' />
            <img className='absolute bottom-[72%] left-[18%] transform translate-x-[-50%] translate-y-[50%] z-0 hidden md:block' src={pointer2} alt='pointer2' />
            <img className='absolute bottom-[92%] left-[80%] transform translate-x-[-50%] translate-y-[50%] z-0 hidden md:block' src={pressing2} alt='pointer2' />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;






// import React from 'react';
// import worship from '../assets/church-building.jpg'

// const Hero = () => {
//   return (
//     <div className='w-full h-[90vh]'>
//       <img
//         src='https://img.freepik.com/premium-photo/group-people-raising-their-hands-crowd_844008-25.jpg?size=626&ext=jpg&ga=GA1.1.1458791122.1685000212&semt=ais'
//         alt='/'
//         className='w-full h-full object-cover'
//       />
//       <div className='max-w-[1140px] m-auto'>
//         <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
//           <h1 className='font-bold text-4xl md:text-6xl'>WELCOME HOME</h1>
         
//           <p className='my-4'>
//           We are a community built on the life and teachings of Jesus.
//              God loves you, and his arms are open wide to welcome people home.
//           </p>
//           <h2 className='text-4xl py-4 italic'>You'll Never Walk Alone</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
