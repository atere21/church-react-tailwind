import React from 'react';
import App from './App';
import './index.css';

import { createRoot } from 'react-dom'; // Import createRoot from 'react-dom'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
