import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "./index.css";

// Debug logs
console.log("=== APP.TSX DEBUG ===");
console.log("1. App.tsx loaded");

// Import pages with error handling
let Index, Presentation, ReseauxDistribution, RelationsCommerciales, AccompagnementJuridique;
let Actualites, Honoraires, MentionsLegales, PolitiqueConfidentialite, CookiePolicy;
let ConditionsGeneralesVente, NotFound, CookieConsent;

try {
  console.log("2. Importing pages...");
  Index = require("@/pages/Index").default;
  Presentation = require("@/pages/Presentation").default;
  ReseauxDistribution = require("@/pages/ReseauxDistribution").default;
  RelationsCommerciales = require("@/pages/RelationsCommerciales").default;
  AccompagnementJuridique = require("@/pages/AccompagnementJuridique").default;
  Actualites = require("@/pages/Actualites").default;
  Honoraires = require("@/pages/Honoraires").default;
  MentionsLegales = require("@/pages/MentionsLegales").default;
  PolitiqueConfidentialite = require("@/pages/PolitiqueConfidentialite").default;
  CookiePolicy = require("@/pages/CookiePolicy").default;
  ConditionsGeneralesVente = require("@/pages/ConditionsGeneralesVente").default;
  NotFound = require("@/pages/NotFound").default;
  CookieConsent = require("@/components/CookieConsent").default;
  console.log("3. All pages imported successfully");
} catch (error) {
  console.error("3. Error importing pages:", error);
  // Fallback simple component
  const SimplePage = () => <div style={{padding: '20px'}}>Error loading page: {error.message}</div>;
  Index = Presentation = ReseauxDistribution = RelationsCommerciales = AccompagnementJuridique = 
  Actualites = Honoraires = MentionsLegales = PolitiqueConfidentialite = CookiePolicy = 
  ConditionsGeneralesVente = NotFound = CookieConsent = SimplePage;
}

const queryClient = new QueryClient();

function App() {
  console.log("4. App component rendering...");
  
  try {
    return (
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
    );
  } catch (error) {
    console.error("5. Error rendering App:", error);
    return <div style={{padding: '20px', color: 'red'}}>App Error: {error.message}</div>;
  }
}

console.log("6. App component defined");

export default App;