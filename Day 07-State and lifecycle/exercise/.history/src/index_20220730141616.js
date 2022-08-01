import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from 'react-dom/client';
import AppState from './Components/AppState';
import 'bootstrap/dist/css/bootstrap.min.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppState />);