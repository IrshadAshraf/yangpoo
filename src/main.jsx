import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig
        reducedMotion="user"
        transition={{ type: "spring", stiffness: 185, damping: 24, mass: 0.8 }}
      >
        <App />
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
);
