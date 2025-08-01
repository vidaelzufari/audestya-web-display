import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Debug logs
console.log("=== MAIN.TSX DEBUG ===");
console.log("1. Main.tsx loaded");
console.log("2. Document ready state:", document.readyState);
console.log("3. Document body:", document.body);

const rootElement = document.getElementById("root");
console.log("4. Root element found:", rootElement);

if (rootElement) {
  console.log("5. Creating React root...");
  try {
    const root = createRoot(rootElement);
    console.log("6. React root created successfully");
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log("7. React app rendered successfully");
  } catch (error) {
    console.error("8. Error creating/rendering React app:", error);
  }
} else {
  console.error("8. ERROR: Root element not found!");
  // Créer un message d'erreur visible
  document.body.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial;">ERROR: Root element not found!</div>';
}