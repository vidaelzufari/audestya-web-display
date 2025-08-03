import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

// Lazy load components for better performance
import { lazy, Suspense } from 'react'

const Index = lazy(() => import('./pages/Index'))
const Presentation = lazy(() => import('./pages/Presentation'))
const ReseauxDistribution = lazy(() => import('./pages/ReseauxDistribution'))
const RelationsCommerciales = lazy(() => import('./pages/RelationsCommerciales'))
const ConditionsGeneralesVente = lazy(() => import('./pages/ConditionsGeneralesVente'))
const AccompagnementJuridique = lazy(() => import('./pages/AccompagnementJuridique'))
const Honoraires = lazy(() => import('./pages/Honoraires'))
const Actualites = lazy(() => import('./pages/Actualites'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'))
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))

import { Toaster } from './components/ui/toaster'
import CookieConsent from './components/CookieConsent'

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

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
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
      <Toaster />
      <CookieConsent />
    </Router>
  </StrictMode>,
)