import { StrictMode } from 'react'
import React from "react"; // ✅ Required for JSX to work
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
