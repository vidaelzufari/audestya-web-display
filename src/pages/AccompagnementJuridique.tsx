import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Briefcase, Clock, CheckCircle, ArrowRight, Building, Network, Layers } from 'lucide-react';

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
                  Un appui juridique structuré et aligné sur vos priorités
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                <div className="space-y-4 max-w-4xl mx-auto text-left">
                  <p className="text-lg text-muted-foreground text-justify">
                    <strong>Vous avez besoin d'un appui juridique ponctuel ou récurrent, mais vous ne souhaitez pas recruter en interne ?</strong>
                  </p>
                  <p className="text-lg text-muted-foreground text-justify">
                    <strong>Vous disposez d'une équipe juridique, mais vous cherchez un renfort sur des projets spécifiques ou des pics d'activité ?</strong>
                  </p>
                  <p className="text-lg text-muted-foreground text-justify">
                    <strong>Mon rôle :</strong> vous accompagner en autonomie ou aux côtés de vos équipes, avec la réactivité et l'expertise d'un juriste expérimenté, sans les contraintes du recrutement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Deux modalités d'intervention */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
                  Deux modalités d'intervention
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Pilotage juridique */}
                <Card className="group bg-background shadow-soft border-0 hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Target className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Pilotage juridique de projets structurants
                      </h3>
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Accompagnement dans vos projets de développement, restructuration ou transformation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Pilotage de la dimension juridique de vos projets stratégiques</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Coordination avec vos équipes internes et partenaires externes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Suivi et reporting régulier sur l'avancement des projets</p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </Card>

                {/* Missions ponctuelles */}
                <Card className="group bg-background shadow-soft border-0 hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Clock className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Missions ponctuelles
                      </h3>
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mb-8"></div>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Renfort sur des pics d'activité ou des urgences</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Expertise spécialisée sur des dossiers complexes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Audit et conseil sur des problématiques spécifiques</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Formation et sensibilisation de vos équipes</p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </Card>
              </div>
            </div>

            {/* Avantages */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant mb-12 group">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-6">Les avantages de l'externalisation</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-white/30 to-white/60 mx-auto mb-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-white">Expertise immédiate</h3>
                    <p className="text-white/80 text-sm">Accès direct à une expertise confirmée sans délai de recrutement</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-white">Flexibilité</h3>
                    <p className="text-white/80 text-sm">Adaptation du niveau d'intervention selon vos besoins</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-white">Optimisation des coûts</h3>
                    <p className="text-white/80 text-sm">Maîtrise budgétaire sans charges fixes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Méthodologie */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <Layers className="w-10 h-10 text-foreground" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                    Une approche collaborative
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Analyse des besoins</h3>
                        <p className="text-muted-foreground text-justify">Compréhension précise de vos enjeux et objectifs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Définition du cadre</h3>
                        <p className="text-muted-foreground text-justify">Modalités d'intervention, planning et livrables</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Exécution et suivi</h3>
                        <p className="text-muted-foreground text-justify">Mise en œuvre avec reporting régulier</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-accent p-8 rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-6">Domaines d'intervention</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>Droit des contrats et relations commerciales</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>Droit de la distribution et réseaux</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>Droit de la consommation</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <p>Conformité et audit juridique</p>
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
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10">
                <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                  <Building className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-8">
                  Réseaux de Distribution
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8"></div>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium">
                  <a href="/reseaux-distribution">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

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