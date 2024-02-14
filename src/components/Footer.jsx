import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div name="footer" className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 border-t-2 border-gray-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:flex gap-8">
          <div className="md:col-span-2">
            <h6 className="text-2xl font-bold uppercase mb-4 mx-4">
              Information
            </h6>
            <ul className="text-gray-400">
              <li className="py-2">Email: Twprayerministry@gmail.com</li>
              <li className="py-2">Sunday Service: 11:30 AM - 1:00 PM</li>
              <li className="py-2">Phone: +447496021086</li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl font-bold uppercase mb-4 mx-4">Location</h6>
            <ul className="text-gray-400">
              <li className="py-2 cursor-pointer">
                Address: 115 Cricklade Road, Swindon SN2 1AB United Kingdom
                Office
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl font-bold uppercase mb-4 ">
              Subscribe to our newsletter
            </h6>
            <p className="text-gray-400 py-2">
              Get Sermons, listen to our podcast, we'll have it sent to your
              inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row items-center">
              <input
                className="w-full p-2 mr-4 rounded-md mb-4 sm:w-auto"
                type="email"
                placeholder="Enter email.."
              />
              <button className="p-2 mb-4 text-yellow-900 font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex text-center text-gray-300">
        <p className="py-4">Designed by Webmuse</p>
        <p className="py-4">&copy; 2023 The Word Prayer Ministries</p>
        <div className="flex justify-center  w-full pt-4 text-2xl cursor-pointer">
          <a
            href="https://youtube.com/@TheWordPrayerMinistry?si=5Z5yIuqsFixIGVQg"
            className="mx-2 hover:text-yellow-600"
          >
            <BsYoutube />
          </a>
          <a
            href=" https://instagram.com/twprayerministry?igshid=MzRlODBiNWFlZA=="
            className="mx-2 hover:text-yellow-600"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100066928100987"
            className="mx-2 hover:text-yellow-600"
          >
            <BsFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
