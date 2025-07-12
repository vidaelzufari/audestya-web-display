import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, FileText, Shield, Target, Users, AlertTriangle } from 'lucide-react';

const RelationsCommerciales = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8">
              Relations et Pratiques Commerciales
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Sécurisation de vos relations et pratiques commerciales BtoB et BtoC
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* BtoB - Négociation et rédaction */}
            <Card className="bg-background shadow-soft border-0 mb-24">
              <CardContent className="p-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-secondary rounded-full">
                    <FileText className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    BtoB - Négociation et rédaction de vos contrats
                  </h2>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-6">
                    Relations fournisseurs, distributeurs, partenaires :
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Contrats commerciaux</h4>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p>CGV, CGA, contrat d'achat ou de vente</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p>Convention unique, contrat de prestation</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p>Contrat de référencement, de sous-traitance</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p>Partenariat complexe</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Contrats de distribution</h4>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p>Franchise, concession</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p>Distribution exclusive ou sélective</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p>Agents commerciaux, commissionnaires</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p>E-commerce, plateformes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-accent rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Handshake className="w-6 h-6 text-secondary" />
                    <h4 className="font-semibold text-primary">Accompagnement spécialisé</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Accompagnement dans la négociation de vos baux commerciaux
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* BtoB - Audit et conseil */}
            <Card className="bg-background shadow-soft border-0 mb-24">
              <CardContent className="p-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-secondary rounded-full">
                    <Shield className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    BtoB - Audit et conseil sur vos pratiques
                  </h2>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-6">
                    Relations fournisseurs, distributeurs, partenaires :
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gradient-accent rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-secondary" />
                        <h4 className="font-semibold text-primary">Anticipation des risques</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Anticipation des risques liés à la rupture des relations établies
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-accent rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="w-6 h-6 text-secondary" />
                        <h4 className="font-semibold text-primary">Audit des pratiques</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Audit de vos pratiques tarifaires, délais de paiement, politique commerciale
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-accent rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-6 h-6 text-secondary" />
                        <h4 className="font-semibold text-primary">Prévention</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Prévention des pratiques restrictives de concurrence
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* BtoC Section */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant mb-24">
              <CardContent className="p-16">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-6">
                    BtoC - Protection du consommateur et pratiques commerciales
                  </h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Sécurisation de vos relations avec les consommateurs finaux
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Documentation légale</h3>
                    <p className="text-sm opacity-90">CGV, CGU, mentions légales, politique de confidentialité</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Conformité e-commerce</h3>
                    <p className="text-sm opacity-90">Sécurisation des sites web et plateformes de vente</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Pratiques promotionnelles</h3>
                    <p className="text-sm opacity-90">Conseil sur les campagnes marketing et opérations commerciales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Méthodologie */}
            <Card className="bg-background shadow-soft border-0 mb-24">
              <CardContent className="p-16">
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
    </div>
  );
};

export default RelationsCommerciales;