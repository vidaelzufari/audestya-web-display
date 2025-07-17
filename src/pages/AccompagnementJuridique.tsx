import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Handshake, Clock, CheckCircle, ArrowRight } from 'lucide-react';

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
                  Mes domaines d'intervention
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
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-secondary-foreground" />
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
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 border-2 border-primary">
                      <Handshake className="w-8 h-8 text-primary" />
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
                  Fort de mon expérience en entreprise, j'interviens dans des secteurs variés
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <h3 className="font-semibold text-primary mb-2">Textile et Mode</h3>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <h3 className="font-semibold text-primary mb-2">Restauration</h3>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <h3 className="font-semibold text-primary mb-2">Cinéma et Loisirs</h3>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
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

            {/* Call to Action */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <CardContent className="p-12 text-center">
                <h2 className="font-serif text-3xl font-bold mb-6">
                  Besoin d'un accompagnement juridique externalisé ?
                </h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Discutons de vos besoins pour définir ensemble la solution la plus adaptée à votre entreprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+33685353781" 
                    className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 inline-block"
                  >
                    Appeler maintenant
                  </a>
                  <a 
                    href="mailto:haia.elzufari@audestya-avocat.com" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-block"
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

export default AccompagnementJuridique;