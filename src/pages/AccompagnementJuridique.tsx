import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Target, Users, CheckCircle, ArrowRight, Shield, Scale } from 'lucide-react';

const AccompagnementJuridique = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-8">
              Accompagnement Juridique Externalisé
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl font-semibold text-primary-foreground mb-4">
                Appui juridique ciblé pour vos projets, vos décisions et vos équipes
              </p>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Un pilotage juridique externalisé adapté à vos besoins spécifiques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-8">
                Deux modalités d'intervention
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Un accompagnement juridique flexible qui s'adapte à vos besoins et à votre organisation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              
              {/* Pilotage juridique */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 group">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Target className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
                      Pilotage juridique de projets structurants
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                        Accompagnement stratégique sur des projets de transformation ou de développement
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                        Coordination juridique multi-expertises
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                        Suivi et pilotage de dossiers complexes
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                        Interface avec vos équipes internes et partenaires externes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Missions ponctuelles */}
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:transform hover:scale-105 group">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Briefcase className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
                      Missions ponctuelles
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                        Expertise juridique ciblée sur des sujets spécifiques
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                        Support juridique temporaire pour vos équipes
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                        Analyse et conseil sur des problématiques urgentes
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">
                        Formation et sensibilisation de vos collaborateurs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Avantages */}
            <Card className="bg-gradient-primary border-0 mb-16">
              <CardContent className="p-12">
                <div className="text-center mb-10">
                  <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-6">
                    Les avantages de l'accompagnement externalisé
                  </h3>
                  <div className="w-24 h-1 bg-white/30 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 text-primary-foreground">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-lg mb-3">Flexibilité</h4>
                    <p className="text-primary-foreground/90">
                      Adaptation aux besoins et aux ressources de votre entreprise
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-lg mb-3">Expertise</h4>
                    <p className="text-primary-foreground/90">
                      Accès à une expertise spécialisée sans recrutement
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Scale className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-lg mb-3">Efficacité</h4>
                    <p className="text-primary-foreground/90">
                      Intervention rapide et ciblée sur vos enjeux prioritaires
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-background shadow-elegant border-0">
                <CardContent className="p-10">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Besoin d'un accompagnement juridique sur mesure ?
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Discutons de vos besoins et définissons ensemble la modalité d'intervention 
                    la plus adaptée à votre organisation et à vos objectifs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      <a href="#contact" className="inline-flex items-center gap-2">
                        Prendre contact
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/honoraires" className="inline-flex items-center gap-2">
                        Voir les modalités tarifaires
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccompagnementJuridique;