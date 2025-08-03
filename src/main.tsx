import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Index from './pages/Index'
import Presentation from './pages/Presentation'
import ReseauxDistribution from './pages/ReseauxDistribution'
import RelationsCommerciales from './pages/RelationsCommerciales'
import ConditionsGeneralesVente from './pages/ConditionsGeneralesVente'
import AccompagnementJuridique from './pages/AccompagnementJuridique'
import Honoraires from './pages/Honoraires'
import Actualites from './pages/Actualites'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import CookiePolicy from './pages/CookiePolicy'
import NotFound from './pages/NotFound'
import { Toaster } from './components/ui/toaster'
import CookieConsent from './components/CookieConsent'

// Global error handlers for production debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/reseaux-distribution" element={<ReseauxDistribution />} />
        <Route path="/relations-commerciales" element={<RelationsCommerciales />} />
        <Route path="/conditions-generales-vente" element={<ConditionsGeneralesVente />} />
        <Route path="/accompagnement-juridique" element={<AccompagnementJuridique />} />
        <Route path="/honoraires" element={<Honoraires />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <CookieConsent />
    </Router>
  </StrictMode>,
)