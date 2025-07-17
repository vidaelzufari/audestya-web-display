import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, FileText, Shield, Target, Users, AlertTriangle } from 'lucide-react';

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
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Sécurisation de vos relations et pratiques commerciales BtoB et BtoC
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction Section */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6 text-left">
                  Sécurisation de vos relations et pratiques commerciales
                </h2>
                <p className="text-lg font-bold text-primary text-justify">
                  Dans un environnement commercial en mutation rapide, la solidité de vos relations commerciales conditionne la performance, la résilience et l'image de votre entreprise.
                  J'interviens pour sécuriser, structurer et renforcer vos relations commerciales à forts enjeux, à chaque étape de la vie de votre activité.
                </p>
              </CardContent>
            </Card>
            
            {/* BtoB - Encadrement contractuel & prévention des risques commerciaux */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-secondary rounded-full">
                    <FileText className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    BtoB – Encadrement contractuel & prévention des risques commerciaux
                  </h2>
                </div>

                <p className="text-lg text-primary mb-8 text-justify">
                  Vos relations commerciales structurent votre modèle économique.
                  J'interviens pour encadrer vos contrats stratégiques, fiabiliser vos pratiques et anticiper les situations à risque.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Structuration contractuelle
                  </h3>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>CGV, CGA, contrat d'achat ou de vente, convention unique, contrat de prestation, de référencement, de sous-traitance, partenariat complexe, etc.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Contrats de distribution : franchise, concession, distribution exclusive ou sélective, agents commerciaux, commissionnaires, e-commerce, plateformes, etc.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Accompagnement dans la négociation de vos baux commerciaux.</p>
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
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant mb-12">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold">
                    BtoC – Sécurisation des offres, supports & campagnes
                  </h2>
                </div>

                <p className="text-lg font-bold mb-8 text-justify">
                  Dans un contexte de vigilance accrue sur les droits des consommateurs et la transparence commerciale, chaque offre mal encadrée, chaque support imprécis, chaque campagne non conforme peut exposer votre marque à un risque juridique ou réputationnel.
                </p>
                <p className="text-lg font-bold mb-8 text-justify">
                  J'interviens pour sécuriser juridiquement votre relation client, protéger votre image et fiabiliser vos actions commerciales.
                </p>

                <div className="space-y-4 text-primary-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>Rédaction ou validation de vos CGV, CGU, politiques de confidentialité, pour garantir la conformité et la lisibilité de votre offre.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>Sécurisation de vos supports d'information précontractuelle, tout au long du parcours client : fiches produits, conditions d'abonnement, devis, etc.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>Audit juridique et encadrement de vos campagnes commerciales, incluant vos messages, supports et mécaniques promotionnelles (publicités, jeux-concours, cadeaux, etc.), afin de prévenir les pratiques commerciales trompeuses, déloyales ou à risque réputationnel.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Méthodologie */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
                  Une approche sur-mesure
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-secondary-foreground font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Analyse de vos besoins</h3>
                        <p className="text-muted-foreground">Compréhension fine de votre activité et de vos enjeux commerciaux</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-secondary-foreground font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Audit juridique</h3>
                        <p className="text-muted-foreground">Évaluation de vos pratiques actuelles et identification des risques</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-secondary-foreground font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Solutions personnalisées</h3>
                        <p className="text-muted-foreground">Rédaction et négociation adaptées à votre secteur d'activité</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-accent p-8 rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-6">Secteurs d'expertise</h3>
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

            {/* Call to Action */}
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12 text-center">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Besoin de sécuriser vos relations commerciales ?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contactez-moi pour un audit de vos pratiques ou pour la rédaction de vos contrats commerciaux.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+33685353781" 
                    className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 inline-block"
                  >
                    Appeler maintenant
                  </a>
                  <a 
                    href="mailto:haia.elzufari@audestya-avocat.com" 
                    className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
                  >
                    Envoyer un email
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RelationsCommerciales;