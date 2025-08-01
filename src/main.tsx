console.log("=== MAIN.TSX STARTING ===");

// Test if basic DOM manipulation works
const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.innerHTML = '<div style="padding: 20px; color: green; font-size: 24px;">✅ JavaScript is working! React loading...</div>';
  console.log("✅ DOM manipulation successful");
} else {
  console.error("❌ Root element not found");
}

// Test React import
try {
  console.log("Importing React...");
  import("react").then(() => {
    console.log("✅ React imported successfully");
    
    // Test React DOM import
    import("react-dom/client").then(() => {
      console.log("✅ React DOM imported successfully");
      
      // Now try to render
      import("./App").then((AppModule) => {
        console.log("✅ App component imported successfully");
        
        import("react-dom/client").then((ReactDOMClientModule) => {
          import("react").then((ReactModule) => {
            const { createRoot } = ReactDOMClientModule;
            const { createElement } = ReactModule;
        
            const root = createRoot(rootElement!);
            root.render(createElement(AppModule.default));
            console.log("✅ React app rendered successfully");
          });
        });
        
      }).catch(error => {
        console.error("❌ Failed to import App:", error);
        rootElement!.innerHTML = '<div style="padding: 20px; color: red;">Error importing App: ' + error.message + '</div>';
      });
      
    }).catch(error => {
      console.error("❌ Failed to import React DOM:", error);
      rootElement!.innerHTML = '<div style="padding: 20px; color: red;">Error importing React DOM: ' + error.message + '</div>';
    });
    
  }).catch(error => {
    console.error("❌ Failed to import React:", error);
    rootElement!.innerHTML = '<div style="padding: 20px; color: red;">Error importing React: ' + error.message + '</div>';
  });
  
} catch (error) {
  console.error("❌ Critical error:", error);
  if (rootElement) {
    rootElement.innerHTML = '<div style="padding: 20px; color: red;">Critical error: ' + error.message + '</div>';
  }
}