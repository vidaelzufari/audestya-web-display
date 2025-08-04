import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Network, Shield, Users, FileText, Handshake, Target, ArrowRight, Layers } from 'lucide-react';

// Custom SVG icon for Accompagnement Juridique Externalisé
const AccompagnementIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
  </svg>
);

const ReseauxDistribution = () => {
  // Scroller au début de la page lors du chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Réseaux de Distribution
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                </div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                  Structuration de votre réseau de distribution
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                <div className="space-y-4 max-w-4xl mx-auto text-left">
                  <p className="text-lg text-muted-foreground">
                    <strong>Créer un réseau est une chose. Le structurer pour durer, scaler et incarner la marque en est une autre.</strong>
                  </p>
                   <p className="text-lg text-muted-foreground text-justify">
                     <strong>Mon rôle :</strong> sécuriser juridiquement et accompagner stratégiquement chaque étape de votre trajectoire de développement.
                   </p>
                   <p className="text-lg text-muted-foreground text-justify">
                     <strong>Objectif :</strong> poser les fondations juridiques solides d'un modèle de réseau pérenne, aligné avec vos ambitions de croissance et vos contraintes opérationnelles.
                   </p>
                </div>
              </CardContent>
            </Card>

            {/* Volet BtoB */}
            <Card className="group bg-background shadow-soft border-0 mb-12 hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-12 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Shield className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    Volet BtoB – Sécuriser votre réseau
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>
                  Je vous accompagne dans la conception, l'ajustement ou l'optimisation de votre modèle de distribution :
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Choix du cadre juridique adapté à votre stratégie : licence, franchise, commission-affiliation, concession</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Vérification de la protection de votre marque (en lien avec un CPI)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Encadrement de la phase précontractuelle : prévention des risques et construction de la relation de confiance</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Relecture stratégique de votre manuel opératoire : cohérence, articulation avec les contrats</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Définition des flux d'approvisionnement entre la tête de réseau et ses membres</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Conseil juridique dans votre stratégie d'expansion (multisites, master-franchise, …)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Formations sur les fondamentaux du modèle à destination des équipes opérationnelles</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Prévention des pratiques anticoncurrentielles et des risques de déséquilibre significatif</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-accent rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-6">Accompagnement / rédaction sur mesure :</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 text-muted-foreground">
                       <div className="flex items-center gap-3">
                         <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                         <p className="text-justify">Document d'information précontractuelle (DIP)</p>
                       </div>
                       <div className="flex items-center gap-3">
                         <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                         <p className="text-justify">Contrats : réservation, franchise, licence de marque, concession exclusive</p>
                       </div>
                       <div className="flex items-center gap-3">
                         <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                         <p className="text-justify">Conditions générales de vente (CGV) internes au réseau</p>
                       </div>
                     </div>
                     <div className="space-y-3 text-muted-foreground">
                       <div className="flex items-center gap-3">
                         <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                         <p className="text-justify">Contrats d'approvisionnement, informatiques, logistiques, partenariats</p>
                       </div>
                       <div className="flex items-center gap-3">
                         <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                         <p className="text-justify">Supports de prospection et documents de recrutement réseau</p>
                       </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Volet BtoC */}
            <Card className="group bg-background shadow-soft border-0 mb-12 hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-12 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Shield className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    Volet BtoC – Sécuriser la relation client-consommateur
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>
                  Parce que la solidité de votre réseau repose aussi sur la conformité de votre offre vis-à-vis du consommateur, j'interviens également sur :
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Analyse juridique de vos offres commerciales (produits, services, abonnements…)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Sécurisation de votre site e-commerce (vente, livraison, service après-vente)</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Rédaction ou validation de vos CGV, CGU, politique de confidentialité</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Validation juridique de vos supports de communication et de vos campagnes promotionnelles</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Méthodologie */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant mb-12 group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Layers className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-6">Méthodologie</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-white/30 to-white/60 mx-auto mb-6"></div>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Une approche collaborative pour des solutions adaptées à votre réalité
                  </p>
                </div>

                <div className="relative">
                  <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-white/30 z-0"></div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    <div className="text-center group/item">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 group-hover/item:bg-primary transition-colors duration-300">
                        <Handshake className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Réunions de co-construction</h3>
                    </div>
                    
                    <div className="text-center group/item">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 group-hover/item:bg-primary transition-colors duration-300">
                        <Target className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Identification des points-clés stratégiques</h3>
                    </div>
                    
                    <div className="text-center group/item">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 group-hover/item:bg-primary transition-colors duration-300">
                        <Users className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Entretiens avec les opérationnels</h3>
                    </div>
                    
                    <div className="text-center group/item">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 group-hover/item:bg-primary transition-colors duration-300">
                        <FileText className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Conception de packs contractuels personnalisés</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 via-white/60 to-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background/95 to-secondary/5">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* Relations et Pratiques Commerciales */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10">
                 <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                   <Network className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                 </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-8">
                  Relations et Pratiques Commerciales
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8"></div>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium">
                  <a href="/relations-commerciales">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Accompagnement Juridique Externalisé */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10">
                 <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                   <AccompagnementIcon className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" />
                 </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-8">
                  Accompagnement Juridique Externalisé
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8"></div>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium">
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

export default ReseauxDistribution;