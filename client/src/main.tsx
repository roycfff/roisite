import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Reading guide tracking
let readingGuideY = 0;
document.addEventListener("mousemove", (e) => {
  readingGuideY = e.clientY;
  document.documentElement.style.setProperty(
    "--reading-guide-y",
    `${readingGuideY}px`
  );
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
