import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, FileText, Shield, Target, Users, AlertTriangle, Network, Building, ArrowRight, Layers } from 'lucide-react';

// Custom SVG icon for Accompagnement Juridique Externalisé
const AccompagnementIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
  </svg>
);

const RelationsCommerciales = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Relations et Pratiques Commerciales
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction Section */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                </div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                  Sécurisation de vos relations et pratiques commerciales BtoB et BtoC
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                <div className="space-y-4 max-w-4xl mx-auto text-left">
                  <p className="text-lg text-muted-foreground text-justify">
                    <strong>Dans un environnement commercial en mutation rapide, la solidité de vos relations commerciales conditionne la performance, la résilience et l'image de votre entreprise.</strong>
                  </p>
                   <p className="text-lg text-muted-foreground text-justify">
                     <strong>Mon rôle :</strong> sécuriser, structurer et renforcer vos relations commerciales à forts enjeux, à chaque étape de la vie de votre activité.
                   </p>
                </div>
              </CardContent>
            </Card>
            
            {/* BtoB - Encadrement contractuel & prévention des risques commerciaux */}
            <Card className="group bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Shield className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    BtoB – Encadrement contractuel et prévention des risques commerciaux
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
                </div>

                <p className="text-lg text-primary mb-8 text-justify">
                  Vos relations commerciales structurent votre modèle économique. J'interviens pour encadrer vos contrats stratégiques, fiabiliser vos pratiques et anticiper les situations à risque.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Structuration contractuelle
                  </h3>
                  
                  <div className="space-y-3 text-muted-foreground">
                     <div className="flex items-start gap-3">
                       <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                       <p className="text-justify">CGV, CGA, contrat d'achat ou de vente, convention unique, contrat de prestation, de référencement, de sous-traitance, partenariat complexe, etc.</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                       <p className="text-justify">Contrats de distribution : franchise, concession, distribution exclusive ou sélective, agents commerciaux, commissionnaires, e-commerce, plateformes, etc.</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                       <p className="text-justify">Accompagnement dans la négociation de vos baux commerciaux</p>
                     </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Prévention des risques commerciaux
                  </h3>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Anticipation des risques liés à la rupture des relations commerciales établies</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Audit de vos pratiques commerciales : politique tarifaire, remises, délais de paiement, remises</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Prévention des pratiques restrictives de concurrence et déséquilibres significatifs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* BtoC Section */}
            <Card className="group bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Shield className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    BtoC – Sécurisation des offres, supports et campagnes
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
                </div>

                <p className="text-lg font-bold mb-8 text-justify text-primary">
                  Dans un contexte de vigilance accrue sur les droits des consommateurs et la transparence commerciale, chaque offre mal encadrée, chaque support imprécis, chaque campagne non conforme peut exposer votre marque à un risque juridique ou réputationnel.
                </p>
                <p className="text-lg font-bold mb-8 text-justify text-primary">
                  J'interviens pour sécuriser juridiquement votre relation client, protéger votre image et fiabiliser vos actions commerciales.
                </p>

                <div className="space-y-4 text-muted-foreground">
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                     <p className="text-justify">Rédaction ou validation de vos CGV, CGU, politiques de confidentialité, pour garantir la conformité et la lisibilité de votre offre</p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                     <p className="text-justify">Sécurisation de vos supports d'information précontractuelle, tout au long du parcours client : fiches produits, conditions d'abonnement, devis, etc.</p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                     <p className="text-justify">Audit juridique et encadrement de vos campagnes commerciales, incluant vos messages, supports et mécaniques promotionnelles (publicités, jeux-concours, cadeaux, etc.), afin de prévenir les pratiques commerciales trompeuses, déloyales ou à risque réputationnel</p>
                   </div>
                </div>
              </CardContent>
            </Card>

            {/* Méthodologie */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant mb-12">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Layers className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-white mb-6">
                    Une approche sur-mesure
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-white/30 to-white/60 mx-auto mb-6"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-secondary-foreground font-bold text-sm">1</span>
                      </div>
                       <div>
                         <h3 className="font-semibold text-white mb-2">Analyse de vos besoins</h3>
                         <p className="text-white/80 text-justify">Compréhension fine de votre activité et de vos enjeux commerciaux</p>
                       </div>
                     </div>
                     
                     <div className="flex items-start gap-4">
                       <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <span className="text-secondary-foreground font-bold text-sm">2</span>
                       </div>
                       <div>
                         <h3 className="font-semibold text-white mb-2">Audit juridique</h3>
                         <p className="text-white/80 text-justify">Évaluation de vos pratiques actuelles et identification des risques</p>
                       </div>
                     </div>
                     
                     <div className="flex items-start gap-4">
                       <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <span className="text-secondary-foreground font-bold text-sm">3</span>
                       </div>
                       <div>
                         <h3 className="font-semibold text-white mb-2">Solutions personnalisées</h3>
                         <p className="text-white/80 text-justify">Rédaction et négociation adaptées à votre secteur d'activité</p>
                       </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-accent p-8 rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-6">Secteurs d'activité</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>Grande distribution et commerce de détail</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>E-commerce et marketplaces</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>Franchises et réseaux organisés</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>Services aux entreprises</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>Industrie et production</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background/95 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* Réseaux de Distribution */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10 h-full flex flex-col">
                <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                  <Building className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-8 flex-grow">
                  Réseaux de Distribution
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8"></div>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium mt-auto">
                  <a href="/reseaux-distribution">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Accompagnement Juridique Externalisé */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10 h-full flex flex-col">
                 <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                   <AccompagnementIcon className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" />
                 </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-8 flex-grow">
                  Accompagnement Juridique Externalisé
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8"></div>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium mt-auto">
                  <a href="/accompagnement-juridique">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>
          </div>

          {/* Decorative elements */}
          <div className="relative mt-16">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RelationsCommerciales;