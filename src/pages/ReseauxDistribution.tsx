import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Network, Shield, Users, FileText, Handshake, Target } from 'lucide-react';

const ReseauxDistribution = () => {
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
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Network className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                  Structuration de votre réseau de distribution
                </h2>
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
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-secondary rounded-full">
                    <Shield className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    Volet BtoB – Sécuriser votre réseau
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 text-left">
                  Je vous accompagne dans la conception, l'ajustement ou l'optimisation de votre modèle de distribution :
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Choix du cadre juridique adapté à votre stratégie : licence, franchise, commission-affiliation, concession</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Vérification de la protection de votre marque (en lien avec un CPI)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Encadrement de la phase précontractuelle : prévention des risques et construction de la relation de confiance</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Relecture stratégique de votre manuel opératoire : cohérence, articulation avec les contrats</p>
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
                  <h3 className="text-xl font-semibold text-primary mb-6">Accompagnement / rédaction sur-mesure :</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary" />
                        <p>Document d'Information Précontractuelle (DIP)</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary" />
                        <p>Contrats : réservation, franchise, licence de marque, concession exclusive</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary" />
                        <p>Conditions générales de vente (CGV) internes au réseau</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary" />
                        <p>Contrats d'approvisionnement, informatiques, logistiques, partenariats</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary" />
                        <p>Supports de prospection et documents de recrutement réseau</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Volet BtoC */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-secondary rounded-full">
                    <Users className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    Volet BtoC – Sécuriser la relation client-consommateur
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 text-left">
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
            </Card>

            {/* Méthodologie */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant mb-12">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-6">Méthodologie</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Une approche collaborative pour des solutions adaptées à votre réalité
                  </p>
                </div>

                <div className="relative">
                  {/* Lignes de connexion - placées en arrière-plan */}
                  <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-white/30 z-0"></div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 bg-gradient-primary">
                        <Handshake className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Réunions de co-construction</h3>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 bg-gradient-primary">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Identification des points-clés stratégiques</h3>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 bg-gradient-primary">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Entretiens avec les opérationnels</h3>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 bg-gradient-primary">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Conception de packs contractuels personnalisés</h3>
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
            {/* Relations et Pratiques Commerciales */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10">
                <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl w-fit group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <FileText className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-8">
                  Relations et Pratiques Commerciales
                </h3>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium">
                  <a href="/relations-commerciales">
                    En savoir plus
                    <Target className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Accompagnement Juridique Externalisé */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10">
                <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl w-fit group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <Users className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-8">
                  Accompagnement Juridique Externalisé
                </h3>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium">
                  <a href="/accompagnement-juridique">
                    En savoir plus
                    <Target className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
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