import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import HelloCC from './Components/HelloCC';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<FormFc/>);