import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

console.log("Main.tsx loaded");

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (rootElement) {
  console.log("Creating React root");
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log("React app rendered");
} else {
  console.error("Root element not found");
}