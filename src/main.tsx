import { createRoot } from 'react-dom/client'
import './index.css'

// Version ultra-simplifiée pour debug
function SimpleApp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Test - Site fonctionne</h1>
      <p>Si vous voyez ce message, React fonctionne correctement.</p>
    </div>
  )
}

// Fonction de debug avec logs détaillés
function debugAndRender() {
  console.log('=== DEBUG START ===')
  console.log('Document ready state:', document.readyState)
  console.log('Window location:', window.location.href)
  
  const container = document.getElementById('root')
  console.log('Root container found:', !!container)
  
  if (!container) {
    console.error('ERREUR: Élément root non trouvé')
    document.body.innerHTML = `
      <div style="padding: 20px; color: red; font-family: Arial;">
        <h1>ERREUR: Élément root non trouvé</h1>
        <p>Le conteneur avec id="root" n'existe pas dans le DOM.</p>
      </div>
    `
    return
  }

  try {
    console.log('Tentative de création du root React...')
    const root = createRoot(container)
    console.log('Root React créé avec succès')
    
    console.log('Tentative de rendu du composant...')
    root.render(<SimpleApp />)
    console.log('Composant rendu avec succès')
    console.log('=== DEBUG END ===')
  } catch (error) {
    console.error('ERREUR lors du rendu:', error)
    container.innerHTML = `
      <div style="padding: 20px; color: red; font-family: Arial;">
        <h1>ERREUR de rendu React</h1>
        <p>Erreur: ${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `
  }
}

// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', debugAndRender)
} else {
  debugAndRender()
}