import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "./index.css";

import Index from "@/pages/Index";
import Presentation from "@/pages/Presentation";
import ReseauxDistribution from "@/pages/ReseauxDistribution";
import RelationsCommerciales from "@/pages/RelationsCommerciales";
import AccompagnementJuridique from "@/pages/AccompagnementJuridique";
import Actualites from "@/pages/Actualites";
import Honoraires from "@/pages/Honoraires";
import MentionsLegales from "@/pages/MentionsLegales";
import PolitiqueConfidentialite from "@/pages/PolitiqueConfidentialite";
import CookiePolicy from "@/pages/CookiePolicy";
import ConditionsGeneralesVente from "@/pages/ConditionsGeneralesVente";
import NotFound from "@/pages/NotFound";
import CookieConsent from "@/components/CookieConsent";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/reseaux-distribution" element={<ReseauxDistribution />} />
            <Route path="/relations-commerciales" element={<RelationsCommerciales />} />
            <Route path="/accompagnement-juridique" element={<AccompagnementJuridique />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/honoraires" element={<Honoraires />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/politique-cookies" element={<CookiePolicy />} />
            <Route path="/conditions-generales-vente" element={<ConditionsGeneralesVente />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>
);