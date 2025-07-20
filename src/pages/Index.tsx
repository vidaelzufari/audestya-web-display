import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Scale, ShieldCheck, Handshake, Award, Shield, Target, Users, Lightbulb, Heart } from 'lucide-react';
import expertiseIcon from '@/assets/expertise-icon.jpg';
import pragmaticIcon from '@/assets/pragmatic-icon.jpg';
import trustIcon from '@/assets/trust-icon.jpg';
import lawyerPortrait from '/lovable-uploads/a6b7efa7-8358-4a4c-be9e-dc837df084c2.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      

      {/* Mon Intervention Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Hero content */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 leading-tight">
                Structurer, sécuriser, accompagner vos décisions
              </h2>
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl">
                  <p className="text-xl md:text-2xl font-light text-primary leading-relaxed">
                    Des solutions juridiques ancrées dans vos enjeux business
                  </p>
                </div>
                <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-2xl">
                  <p className="text-xl md:text-2xl font-light text-primary leading-relaxed">
                    Clarté, méthode, exigence à chaque étape
                  </p>
                </div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-medium italic">
                Le droit n'a d'impact que s'il éclaire l'action.
              </p>
            </div>

            {/* Main content - Single flowing section */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
                  Deux leviers d'intervention complémentaires
                </h3>
              </div>
              
              {/* Combined content in a flowing layout */}
              <div className="space-y-8">
                {/* First section - Distribution Contrats Consommation */}
                <Card className="bg-gradient-to-br from-background to-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <h3 className="font-serif text-3xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                          Distribution - Contrats - Consommation
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 mb-2"></div>
                        <p className="text-muted-foreground italic mt-2 text-lg">
                          Structurer l'action, prévenir le risque, accompagner vos activités.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Négociation et sécurisation de contrats, qu'ils soient standards, complexes ou stratégiques
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Structuration, sécurisation et accompagnement juridique de réseaux de distribution
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Rédaction et mise en place d'outils juridiques (contrats cadres, CGV, politiques commerciales, etc.)
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Audits contractuels adaptés à vos enjeux du moment
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Conseil dans vos relations commerciales avec vos fournisseurs, distributeurs ou partenaires
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Encadrement de vos pratiques promotionnelles et protection du consommateur
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Second section - Accompagnement */}
                <Card className="bg-gradient-to-br from-background to-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <h3 className="font-serif text-3xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                          Accompagnement Juridique Externalisé
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 mb-2"></div>
                        <p className="text-muted-foreground italic mt-2 text-lg">
                          Appui juridique ciblé pour vos projets, vos décisions et vos équipes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Pilotage juridique de projets structurants
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Missions ponctuelles
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Call to action */}
              <div className="mt-16 text-center">
                <a 
                  href="#domaines" 
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-elegant text-lg"
                >
                  En savoir plus
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>





      



      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
