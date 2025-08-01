console.log("=== APP.TSX LOADING ===");

function App() {
  console.log("=== APP COMPONENT RENDERING ===");
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'green' }}>✅ React App is Working!</h1>
      <p>If you see this, React is successfully loaded and rendering.</p>
      <div style={{ 
        background: '#f0f0f0', 
        padding: '10px', 
        marginTop: '20px',
        borderRadius: '5px'
      }}>
        <strong>Debug Info:</strong>
        <ul>
          <li>React: ✅ Loaded</li>
          <li>App Component: ✅ Rendering</li>
          <li>DOM: ✅ Working</li>
        </ul>
      </div>
    </div>
  );
}

console.log("=== APP COMPONENT DEFINED ===");
export default App;