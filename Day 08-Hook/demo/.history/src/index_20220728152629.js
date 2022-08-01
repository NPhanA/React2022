import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import ClickCount from './Components/ClickCount';
import ChangeName from './Components/ChangeName';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
