import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Component/Hello';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Hello />);

