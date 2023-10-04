import React from 'react';
import worship1 from "../assets/church1.jpg";
import worship2 from "../assets/churchpray.jpg";
import worship3 from "../assets/church3.jpg";
import worship4 from "../assets/church4.png";
import worship5 from "../assets/prayer.avif";

const Gallery = () => {
    return (
        <div name='contact' className='max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* left-side */}
             <div className='grid grid-cols-2 grid-rows-6 h-[200vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src={worship1} alt='/'/>
                <img className='row-span-2 object-cover w-full h-full p-2' src={worship2} alt='/'/>
                <img className='row-span-2 object-cover w-full h-full p-2' src={worship4} alt='/'/>
                <img className='row-span-2 object-cover w-full h-full p-2' src={worship3} alt='/'/>
                <img className='row-span-3 object-cover w-full h-full p-2' src={worship5} alt='/'/>
                
             </div>
             {/* right-side */}
             <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold '> The Word prayer ministries is a church for </h3>
                <p className='text-2xl py-6'>everyone, everywhere.</p>
                <p className='pb-6'>It’s gathering together wherever you live, with other people, in
                person, to watch weekly services, connect with God through music,
                and conversations. We strive to create an inviting place, one
                that’s extremely approachable no matter what you believe, where you
                come from, or who you know.</p>
                     <div>
             <p className='text-xl font-bold text-yellow-500'>New to The Word prayer ministries? </p>
            
             <a href='/' target="_blank" rel="noopener noreferrer">
             <button className=' text--white rounded-md p-2 my-2 w-40 mb-4 text-white cursor-pointer hover:bg-pink-300'>Connect With Us</button>
             </a>
    
            </div>
            </div>
        </div>
  );
};

export default Gallery;




