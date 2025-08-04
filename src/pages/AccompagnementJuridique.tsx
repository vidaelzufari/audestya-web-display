import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LinkedInFeed from '@/components/LinkedInFeed';

const AccompagnementJuridique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Accompagnement Juridique
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Un accompagnement personnalisé pour sécuriser vos projets et optimiser vos relations d'affaires
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                    Votre partenaire juridique de confiance
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Je vous accompagne dans tous vos projets juridiques avec une approche personnalisée, 
                    alliant expertise technique et compréhension de vos enjeux business.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Conseil stratégique */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Conseil Stratégique
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Analyse juridique approfondie de vos projets et recommandations stratégiques 
                      pour sécuriser vos opérations.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Audit juridique de vos contrats existants
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Identification des risques juridiques
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Recommandations d'optimisation
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Rédaction contractuelle */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Rédaction Contractuelle
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Élaboration de contrats sur-mesure adaptés à vos besoins spécifiques 
                      et à votre secteur d'activité.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Contrats de distribution et franchise
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Accords commerciaux complexes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Conditions générales personnalisées
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Négociation */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Négociation & Médiation
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Accompagnement dans vos négociations commerciales et résolution 
                      amiable des différends.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Négociation de contrats complexes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Médiation commerciale
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Résolution de conflits
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Formation */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Formation & Sensibilisation
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Sessions de formation personnalisées pour vos équipes sur les enjeux 
                      juridiques de votre secteur.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Formations sur-mesure
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Sensibilisation aux risques
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Veille juridique partagée
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Approche */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0 mb-12">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                    Une approche collaborative
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Écoute</h3>
                    <p className="text-sm text-muted-foreground">
                      Compréhension approfondie de vos enjeux et objectifs business
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-xl">2</span>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Analyse</h3>
                    <p className="text-sm text-muted-foreground">
                      Étude juridique détaillée et identification des solutions optimales
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-xl">3</span>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Action</h3>
                    <p className="text-sm text-muted-foreground">
                      Mise en œuvre concrète et suivi personnalisé de vos dossiers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn Feed Section */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Linkedin className="w-8 h-8 text-primary" />
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    Suivez-moi sur LinkedIn
                  </h2>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Retrouvez mes dernières analyses juridiques, actualités du droit de la distribution 
                    et conseils pratiques directement sur mon profil LinkedIn.
                  </p>
                  
                  <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-lg font-medium">
                    <a 
                      href="https://www.linkedin.com/in/haiaelzufari" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3"
                    >
                      <Linkedin className="w-5 h-5" />
                      Voir mon profil LinkedIn
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <LinkedInFeed />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccompagnementJuridique;