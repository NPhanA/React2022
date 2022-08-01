import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from 'react-dom/client';
import UserAgent from './Components/UserAgent';
import App1 from './Components/ProfileCard';
import ProfileCard from './Components/ProfileCard';
import SignInForm from './Components/SignInForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SignInForm />);

