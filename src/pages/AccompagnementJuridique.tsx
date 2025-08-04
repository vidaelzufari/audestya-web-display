import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AccompagnementJuridique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Accompagnement Juridique Externalisé
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Un appui juridique ciblé pour vos projets, vos décisions et vos équipes
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
                    Un partenaire juridique flexible et réactif
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    L'accompagnement juridique externalisé vous permet de bénéficier d'une expertise 
                    juridique de haut niveau, adaptée à vos besoins spécifiques, sans les contraintes 
                    d'un recrutement en interne.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Types d'accompagnement */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Pilotage de projets */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h2m0-13h10a2 2 0 012 2v11a2 2 0 01-2 2H9m0-13v13" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Pilotage juridique de projets
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Accompagnement stratégique pour vos projets structurants nécessitant 
                      une expertise juridique approfondie.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Restructuration d'activités
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Lancement de nouveaux produits/services
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Développement à l'international
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Mise en conformité réglementaire
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Missions ponctuelles */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Missions ponctuelles
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Interventions ciblées pour répondre à des besoins juridiques 
                      spécifiques et urgents.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Analyse juridique express
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Rédaction de documents urgents
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Support en négociation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Conseil stratégique ponctuel
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Avantages */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0 mb-12">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                    Les avantages de l'externalisation
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Flexibilité</h3>
                    <p className="text-sm text-muted-foreground">
                      Adaptation aux besoins et à la charge de travail
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Accès immédiat à une expertise spécialisée
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Réactivité</h3>
                    <p className="text-sm text-muted-foreground">
                      Réponse rapide aux urgences juridiques
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Efficacité</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimisation des coûts et des ressources
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12 text-center">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Construisons ensemble votre solution juridique
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                  Que vous ayez besoin d'un accompagnement ponctuel ou d'un partenariat 
                  juridique de long terme, je m'adapte à vos besoins et à votre organisation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-lg font-medium">
                    <a href="/#contact">
                      Discutons de votre projet
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium">
                    <a href="/presentation">
                      Découvrir mon approche
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccompagnementJuridique;