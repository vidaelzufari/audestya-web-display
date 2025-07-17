import Navigation from '@/components/Navigation';
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
                  <p className="text-lg text-muted-foreground">
                    <strong>Mon rôle :</strong> sécuriser juridiquement et accompagner stratégiquement chaque étape de votre trajectoire de développement.
                  </p>
                  <p className="text-lg text-muted-foreground">
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
                        <p>Choix du modèle : licence, franchise, commission-affiliation, concession</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Vérification de la protection de votre marque (en lien avec un CPI)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Sécurisation de la relation précontractuelle avec les membres du réseau</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Relecture du Manuel opératoire</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Définition du mode d'approvisionnement entre tête de réseau et ses membres</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Accompagnement juridique dans la stratégie de développement</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Formations sur les fondamentaux du modèle choisi</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Conseil pour prévenir les pratiques anticoncurrentielles ou restrictives</p>
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
                        <p>Contrats informatiques, d'approvisionnement, de partenariat</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary" />
                        <p>Relecture de vos supports de prospection et recrutement</p>
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

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Analyse juridique de votre offre commerciale</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Sécurisation de votre site e-commerce</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Rédaction des CGV, CGU, politique de confidentialité</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Validation de vos supports de communication</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Conseil sur vos campagnes et opérations promotionnelles</p>
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Handshake className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Réunions de co-construction</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Identification des points-clés stratégiques</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Entretiens avec les opérationnels</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Conception de packs contractuels personnalisés</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12 text-center">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Besoin d'accompagnement pour votre réseau de distribution ?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contactez-moi pour discuter de votre projet et définir ensemble la stratégie juridique la plus adaptée.
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

export default ReseauxDistribution;