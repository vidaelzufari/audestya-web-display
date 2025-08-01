import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("=== MAIN.TSX STARTING ===");
console.log("Document ready state:", document.readyState);

const rootElement = document.getElementById("root");
console.log("Root element found:", !!rootElement);

if (!rootElement) {
  console.error("ROOT ELEMENT NOT FOUND!");
  document.body.innerHTML = '<div style="padding: 20px; color: red; font-size: 24px;">ERROR: Root element not found!</div>';
} else {
  console.log("Creating React root...");
  try {
    const root = createRoot(rootElement);
    console.log("React root created, rendering app...");
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log("App rendered successfully!");
  } catch (error) {
    console.error("Error rendering app:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-size: 24px;">Error: ' + error.message + '</div>';
  }
}