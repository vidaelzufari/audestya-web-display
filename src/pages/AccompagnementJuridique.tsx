import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Handshake, Clock, CheckCircle, ArrowRight, Shirt, UtensilsCrossed, Film, Dumbbell, Network, FileText } from 'lucide-react';

const AccompagnementJuridique = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Accompagnement Juridique Externalisé
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto text-justify text-left">
              Un appui juridique intégré à vos enjeux business, pour structurer, fluidifier et faire avancer vos projets.
            </p>
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
                  <Handshake className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                  Une collaboration juridique agile et structurante
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-justify text-left">
                   J'interviens en autonomie ou en lien étroit avec vos équipes, selon vos priorités stratégiques ou opérationnelles.
                 </p>
              </CardContent>
            </Card>

            {/* Types d'accompagnement */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
                  Mes axes d'intervention
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                        Pilotage juridique de projets structurants
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed text-justify text-left">
                        Réorganisation, développement de réseau, lancement de nouveaux modèles ou outils contractuels
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                        Renfort ponctuel ou continu
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed text-justify text-left">
                        Auprès de directions juridiques ou d'équipes opérationnelles, selon vos besoins spécifiques
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Handshake className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                        Appui transversal aux dirigeants
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed text-justify text-left">
                        Ou responsables métiers, sur des enjeux contractuels, commerciaux ou concurrentiels
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* Processus de collaboration */}
            <Card className="bg-gradient-accent rounded-lg mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
                  Processus de collaboration
                </h2>
                
                <div className="max-w-5xl mx-auto">
                  <p className="text-xl text-muted-foreground leading-relaxed text-left mb-4">
                    Chaque mission s'ouvre sur une phase d'échange approfondi.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-12 text-left">
                    <strong className="text-primary">Objectif :</strong> cerner vos besoins, définir un périmètre d'action précis, et mettre en œuvre une collaboration utile, lisible et alignée.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg">
                          1
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-primary mb-2">
                            Écoute & analyse
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Compréhension de vos besoins, enjeux stratégiques et contextes opérationnels.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg">
                          2
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-primary mb-2">
                            Proposition sur-mesure
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Définition du périmètre, du calendrier et des modalités d'intervention.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg">
                          3
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-primary mb-2">
                            Mise en œuvre
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Déploiement de la mission, en lien étroit avec vos équipes internes ou partenaires.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg">
                          4
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-primary mb-2">
                            Suivi & ajustement
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Points d'étape réguliers et adaptations selon l'évolution de vos priorités.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secteurs d'activité */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
                  Secteurs d'activité
                </h2>
                <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                  Fort de mon expérience en entreprise, j'interviens dans des secteurs variés.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shirt className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Textile et Mode</h3>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <UtensilsCrossed className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Restauration</h3>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Film className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Cinéma et Loisirs</h3>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Dumbbell className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Sport et Bien-être</h3>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    <strong className="text-primary">Tous exigeants</strong> en structuration contractuelle, conformité commerciale et accompagnement opérationnel.
                  </p>
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
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10">
                <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl w-fit group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <Network className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-8">
                  Réseaux de Distribution
                </h3>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium">
                  <a href="/reseaux-distribution">
                    En savoir plus
                    <Target className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

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

export default AccompagnementJuridique;