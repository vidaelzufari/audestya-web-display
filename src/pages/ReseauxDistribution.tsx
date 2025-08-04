import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LinkedInFeed from '@/components/LinkedInFeed';

const ReseauxDistribution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Réseaux de Distribution
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Expertise spécialisée dans la structuration et l'optimisation de vos réseaux de distribution
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
                    Structurez et développez vos réseaux
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Fort d'une expertise approfondie en droit de la distribution, je vous accompagne 
                    dans la création, le développement et l'optimisation de vos réseaux commerciaux.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Types de réseaux */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Franchise */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Franchise
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Création et structuration de réseaux de franchise avec une approche 
                      juridique complète et stratégique.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Rédaction du Document d'Information Précontractuelle (DIP)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Contrats de franchise sur-mesure
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Manuels opérationnels et savoir-faire
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Gestion des relations franchiseur-franchisé
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Distribution sélective */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Distribution Sélective
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Mise en place de réseaux de distribution sélective respectant 
                      le droit de la concurrence.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Critères de sélection conformes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Contrats de distribution agréée
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Politique de prix et de territoire
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Contrôle et animation du réseau
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Concession */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Concession
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Structuration de réseaux de concession avec exclusivité 
                      territoriale et obligations réciproques.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Contrats de concession exclusive
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Définition des territoires
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Obligations d'approvisionnement
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Standards et image de marque
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Partenariats */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Partenariats Commerciaux
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Développement de partenariats stratégiques et d'alliances 
                      commerciales durables.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Accords de partenariat
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Joint-ventures commerciales
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Accords de co-distribution
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Alliances stratégiques
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Services complémentaires */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0 mb-12">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                    Services complémentaires
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h2m0-13h10a2 2 0 012 2v11a2 2 0 01-2 2H9m0-13v13" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Audit juridique</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyse complète de vos contrats existants
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Formation</h3>
                    <p className="text-sm text-muted-foreground">
                      Sensibilisation de vos équipes aux enjeux juridiques
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Veille juridique</h3>
                    <p className="text-sm text-muted-foreground">
                      Suivi des évolutions réglementaires
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Support continu</h3>
                    <p className="text-sm text-muted-foreground">
                      Accompagnement dans la durée
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12 text-center">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Développons ensemble votre réseau
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                  Chaque réseau de distribution est unique. Je vous propose un accompagnement 
                  personnalisé pour structurer et optimiser votre stratégie commerciale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-lg font-medium">
                    <a href="/relations-commerciales">
                      Relations Commerciales
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium">
                    <a href="/accompagnement-juridique">
                      Accompagnement Juridique
                    </a>
                  </Button>
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

export default ReseauxDistribution;