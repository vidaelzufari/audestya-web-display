import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction pour initialiser l'application
function initApp() {
  try {
    const container = document.getElementById('root')
    if (!container) {
      console.error('Root element not found')
      return
    }

    const root = createRoot(container)
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
    console.log('App rendered successfully')
  } catch (error) {
    console.error('Error rendering app:', error)
    // Fallback: afficher un message d'erreur dans le DOM
    const container = document.getElementById('root')
    if (container) {
      container.innerHTML = `
        <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
          <h1>Erreur de chargement</h1>
          <p>Une erreur s'est produite lors du chargement de l'application.</p>
          <p>Veuillez rafraîchir la page ou contacter le support.</p>
        </div>
      `
    }
  }
}

// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}