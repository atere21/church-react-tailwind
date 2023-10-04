import React, { useState } from 'react';
import image from "../assets/churchpray.jpg";
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';

function PrayerRequest() {
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [formData, setFormData] = useState({
    whoNeedsPrayers: '',
    firstName: '',
    lastName: '',
    relationship: '',
    prayerNeed: '',
    phoneNumber: '',
    privateRequest: 'no',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPrayerRequest = { ...formData };
    setPrayerRequests([...prayerRequests, newPrayerRequest]);
    // You can handle form submission logic here (e.g., sending to a server).
    // Reset the form data after submission.
    setFormData({
      whoNeedsPrayers: '',
      firstName: '',
      lastName: '',
      relationship: '',
      prayerNeed: '',
      phoneNumber: '',
      privateRequest: 'no',
    });
  };

  return (
    <>
     <TopBar/>
     <Navbar/>
    
    <div className="min-h-screen w-full flex items-center justify-center bg-center bg-fixed bg-cover md:bg-contain" style={{ backgroundImage: `url(${image})`, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>

    
      <div className="bg-white md:min-w-[860px] rounded-md overflow-hidden shadow-lg mt-[6rem] mb-8">
        <h1 className="text-4xl font-semibold p-6 text-center bg-[#5651e5] text-white">Prayer Requests</h1>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="whoNeedsPrayers" className="block font-semibold text-xl">Who Needs Prayers?</label>
              <input type="text" id="whoNeedsPrayers" name="whoNeedsPrayers" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.whoNeedsPrayers} required />
            </div>
            <div>
              <label htmlFor="firstName" className="block font-semibold text-xl">First Name:</label>
              <input type="text" id="firstName" name="firstName" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.firstName} required />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-semibold text-xl">Last Name:</label>
              <input type="text" id="lastName" name="lastName" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.lastName} required />
            </div>
            <div>
              <label htmlFor="relationship" className="block font-semibold text-xl">Relationship:</label>
              <input type="text" id="relationship" name="relationship" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.relationship} required />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="prayerNeed" className="block font-semibold text-xl">Prayer Need:</label>
              <textarea id="prayerNeed" name="prayerNeed" className="w-full p-2 border border-gray-300 rounded-md resize-none" onChange={handleChange} value={formData.prayerNeed} required />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block font-semibold text-xl">Phone Number:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.phoneNumber} required />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="privateRequest" className="block font-semibold text-xl">Keep Request Private:</label>
              <select id="privateRequest" name="privateRequest" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.privateRequest} required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <button type="submit" className="block w-full bg-[#5651e5] text-white py-2 rounded-md hover:bg-[#36347c]">Submit</button>
        </form>
      </div>
      
    </div>
    </>
  );
}

export default PrayerRequest;
