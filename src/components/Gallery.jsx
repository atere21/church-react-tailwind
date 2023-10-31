import React from 'react';
import worship1 from '../assets/church1.jpg';
import worship2 from '../assets/churchpray.jpg';
import worship3 from '../assets/church3.jpg';
import worship4 from '../assets/church4.png';
import worship5 from '../assets/prayer.avif';
import { Link } from 'react-scroll';

const Gallery = () => {
  return (
    <div name="about" className="max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[200vh]">
        <img className="row-span-3 object-cover w-full h-full p-2" src={worship1} alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src={worship2} alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src={worship4} alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src={worship3} alt="/" />
        <img className="row-span-3 object-cover w-full h-full p-2" src={worship5} alt="/" />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">The Word Prayer Ministries</h3>
        <p className="text-2xl py-6 text-blue-700">
          "A Sanctuary of Faith and Community in the Heart of the UK."
        </p>
        <p className="pb-6">
          We are more than just a congregation; we are a diverse and welcoming family of believers, united by our faith and our mission to make a positive impact in the lives of our members and the broader community. We have a long and storied history of service, prayer, and community engagement. For generations, our church has been a cornerstone of the local community, a place where people from all walks of life come together to find spiritual nourishment, fellowship, and purpose.
        </p>
        <div>
          <p className="text-xl font-bold text-yellow-500">New to The Word Prayer Ministries?</p>
          <Link to="footer" target="_blank" rel="noopener noreferrer">
            <button className="rounded-md p-2 my-2 w-40 mb-4 text-white cursor-pointer hover:bg-pink-300">
              Connect With Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
