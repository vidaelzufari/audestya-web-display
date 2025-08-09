import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// English pages
import IndexEn from "./pages/en/IndexEn";
import PresentationEn from "./pages/en/PresentationEn";
import DistributionNetworks from "./pages/en/ReseauxDistributionEn";
import CommercialRelations from "./pages/en/RelationsCommercialesEn";
import ExternalLegalSupport from "./pages/en/AccompagnementJuridiqueEn";
import News from "./pages/en/ActualitesEn";
import Fees from "./pages/en/HonorairesEn";
import LegalNotices from "./pages/en/MentionsLegalesEn";
import PrivacyPolicy from "./pages/en/PolitiqueConfidentialiteEn";
import TermsOfSale from "./pages/en/ConditionsGeneralesVenteEn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* FR routes */}
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

          {/* EN routes */}
          <Route path="/en" element={<IndexEn />} />
          <Route path="/en/presentation" element={<PresentationEn />} />
          <Route path="/en/distribution-networks" element={<DistributionNetworks />} />
          <Route path="/en/commercial-relations" element={<CommercialRelations />} />
          <Route path="/en/external-legal-support" element={<ExternalLegalSupport />} />
          <Route path="/en/news" element={<News />} />
          <Route path="/en/fees" element={<Fees />} />
          <Route path="/en/legal-notices" element={<LegalNotices />} />
          <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/en/terms-of-sale" element={<TermsOfSale />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
