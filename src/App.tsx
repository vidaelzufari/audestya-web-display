import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Index from "./pages/Index";
import Presentation from "./pages/Presentation";
import ReseauxDistribution from "./pages/ReseauxDistribution";
import RelationsCommerciales from "./pages/RelationsCommerciales";
import AccompagnementJuridique from "./pages/AccompagnementJuridique";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ConditionsGeneralesVente from "./pages/ConditionsGeneralesVente";
import Actualites from "./pages/Actualites";
import Honoraires from "./pages/Honoraires";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ErrorFallback({error}: {error: Error}) {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2>Quelque chose s'est mal passé :</h2>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={() => window.location.reload()}>
        Recharger la page
      </button>
    </div>
  )
}

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
              <Route path="/conditions-generales-vente" element={<ConditionsGeneralesVente />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
