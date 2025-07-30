import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('=== MAIN.TSX START ===')
console.log('Document ready state:', document.readyState)

function initApp() {
  console.log('Initializing app...')
  
  const container = document.getElementById('root')
  if (!container) {
    console.error('Root container not found!')
    return
  }

  console.log('Root container found, creating React root...')
  
  try {
    const root = createRoot(container)
    console.log('React root created successfully')
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
    console.log('App rendered successfully')
  } catch (error) {
    console.error('Error rendering app:', error)
    container.innerHTML = `
      <div style="padding: 20px; color: red; font-family: Arial;">
        <h1>Erreur de rendu</h1>
        <p>Erreur: ${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}

console.log('=== MAIN.TSX END ===')