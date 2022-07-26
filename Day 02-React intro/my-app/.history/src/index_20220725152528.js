
import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
const container = document.getElementById('root');
// const root1 = createRoot(container);
root.render(<App />)
import ReactDOM from "react-dom/client";

const name = "Your name";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
React.createElement("h1", { style: { textAlign: "center" } }, name)
);