import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import HelloFunctionComp from './Components/HelloFunctionComp';
import FormFc from './Components/FormFC';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<FormFc>);