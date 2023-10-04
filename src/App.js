import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrayerRequest from './pages/PrayerRequest';
import Home from './pages/Home';

import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/prayer',
    element: <PrayerRequest />
  },
]);

const App = () => (

    <>
      
      <RouterProvider router={router} />
      <Footer/>
    </>
  );


export default App;

