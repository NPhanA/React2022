import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import ReactDOM from "react-dom/client";
const container = document.getElementById('root');
// const root = createRoot(container);
root.render(<App />)


const name = "Your name";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
React.createElement("h1", { style: { textAlign: "center" } }, name)
);