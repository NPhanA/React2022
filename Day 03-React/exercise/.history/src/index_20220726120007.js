import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from 'react-dom/client';
import UserAgent from './Components/UserAgent';
import StudentTable from './Components/ProfileCard';
import cardProfile from './Components/ProfileCard';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<cardProfile />);

