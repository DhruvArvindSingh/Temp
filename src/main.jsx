import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Password_generator from "./Password_generator.jsx";
import "./Password_generator.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Password_generator />
  </StrictMode>
);
