import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SelectCar from './Components/CarComponent';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SelectCar />);

