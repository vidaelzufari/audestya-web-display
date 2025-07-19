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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                Structurer, sécuriser, accompagner vos décisions
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl font-light text-primary leading-relaxed">
                  Des solutions juridiques ancrées dans vos enjeux business
                </p>
                <p className="text-xl md:text-2xl font-light text-primary leading-relaxed">
                  Clarté, méthode, exigence à chaque étape
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-8"></div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Le droit n'a d'impact que s'il éclaire l'action.
                </p>
              </div>
            </div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto">
              {/* Intervention sections title */}
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                  Deux leviers d'intervention complémentaires
                </h3>
              </div>
              <Card className="bg-background/80 backdrop-blur-sm shadow-elegant border-0 overflow-hidden group hover:shadow-card transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      Distribution - Contrats - Consommation
                    </h3>
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-base">
                    Structurer l'action, prévenir le risque, accompagner vos activités.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed text-justify text-base">
                          Négociation et sécurisation de contrats, qu'ils soient standards, complexes ou stratégiques
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed text-justify text-base">
                          Structuration, sécurisation et accompagnement juridique de réseaux de distribution
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed text-justify text-base">
                          Rédaction et mise en place d'outils juridiques (contrats cadres, CGV, politiques commerciales, etc.)
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed text-justify text-base">
                          Audits contractuels adaptés à vos enjeux du moment
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed text-justify text-base">
                          Conseil dans vos relations commerciales avec vos fournisseurs, distributeurs ou partenaires
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed text-justify text-base">
                          Encadrement de vos pratiques promotionnelles et protection du consommateur
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Accompaniment section */}
              <div className="mt-8">
                <Card className="bg-background/80 backdrop-blur-sm shadow-elegant border-0 overflow-hidden group hover:shadow-card transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Accompagnement Juridique Externalisé
                      </h3>
                    </div>
                    <p className="text-muted-foreground italic mb-4 text-base">
                      Appui juridique ciblé pour vos projets, vos décisions et vos équipes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify text-base">
                            Pilotage juridique de projets structurants
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify text-base">
                            Missions ponctuelles
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Button moved here */}
              <div className="mt-10 text-center">
                <a 
                  href="#domaines" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-soft"
                >
                  En savoir plus
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>





      

      {/* Honoraires Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Honoraires
            </h2>
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <div className="space-y-8 text-lg text-muted-foreground">
                  <div className="text-center">
                    <p className="text-xl font-medium text-primary mb-6">
                      Des honoraires fondées sur la réalité de vos enjeux
                    </p>
                    <p className="leading-relaxed max-w-3xl mx-auto">
                      Les modalités d'intervention et les honoraires sont définis en amont, avec clarté et sérénité.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="leading-relaxed">
                      Les honoraires sont fixés en fonction de plusieurs critères : nature et complexité du dossier, 
                      volume des diligences, et usages de la profession.
                    </p>
                    
                    <div>
                      <p className="text-lg font-medium text-primary mb-4">
                        Trois modes de facturation peuvent être proposés :
                      </p>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>Forfait (avec ou sans honoraire de résultat)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>Temps passé, sur la base d'un taux horaire</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>Abonnement, pour un accompagnement régulier</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="leading-relaxed">
                      Sauf urgence, les modalités sont définies d'un commun accord au début de la mission, 
                      via une convention d'honoraires. Les honoraires ne couvrent pas les frais externes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Actualités
            </h2>
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12 text-center">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p className="text-xl font-medium text-primary">
                    Restez informé des dernières évolutions juridiques
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Cette section sera prochainement enrichie d'actualités juridiques, 
                    d'analyses des dernières réformes et de conseils pratiques pour 
                    vous aider à naviguer dans l'environnement juridique en constante évolution.
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Suivez les dernières nouveautés en droit de la distribution, 
                    des contrats et de la consommation qui peuvent impacter votre activité.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
