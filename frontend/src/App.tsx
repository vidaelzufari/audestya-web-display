import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import CookieConsent from '@/components/CookieConsent';

// Import pages
import Index from '@/pages/Index';
import Presentation from '@/pages/Presentation';
import ReseauxDistribution from '@/pages/ReseauxDistribution';
import RelationsCommerciales from '@/pages/RelationsCommerciales';
import AccompagnementJuridique from '@/pages/AccompagnementJuridique';
import Actualites from '@/pages/Actualites';
import Honoraires from '@/pages/Honoraires';
import CMSAdmin from '@/pages/CMSAdmin';
import MentionsLegales from '@/pages/MentionsLegales';
import PolitiqueConfidentialite from '@/pages/PolitiqueConfidentialite';
import CookiePolicy from '@/pages/CookiePolicy';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/reseaux-distribution" element={<ReseauxDistribution />} />
        <Route path="/relations-commerciales" element={<RelationsCommerciales />} />
        <Route path="/accompagnement-juridique" element={<AccompagnementJuridique />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/honoraires" element={<Honoraires />} />
        <Route path="/portail-client" element={<ClientPortal />} />
        <Route path="/admin" element={<CMSAdmin />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/politique-cookies" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <CookieConsent />
    </>
  );
}

export default App;