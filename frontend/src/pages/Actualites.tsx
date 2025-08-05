import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { LinkedInAuth } from '@/components/LinkedInAuth';
import { LinkedInPosts } from '@/components/LinkedInPosts';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LinkedInService } from '@/lib/linkedin-service';

const Actualites = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const linkedInService = LinkedInService.getInstance();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Check authentication status
    setIsAuthenticated(linkedInService.isAuthenticated());
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Actualités Juridiques
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            
            {/* LinkedIn Direct Feed Badge */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex items-center bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full border border-blue-200">
                <Linkedin className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  {isAuthenticated ? "Feed LinkedIn Connecté" : "Authentification LinkedIn"}
                </span>
                <div className={`w-2 h-2 rounded-full ml-2 ${isAuthenticated ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* LinkedIn Feed Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Follow LinkedIn CTA */}
            <Card className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      Ne ratez aucune actualité juridique
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Suivez-moi sur LinkedIn pour recevoir toutes mes analyses en temps réel 
                      et interagir directement avec mes publications.
                    </p>
                    <div className="flex items-center text-sm text-blue-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      En ligne maintenant
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 ml-6"
                  >
                    <a 
                      href="https://www.linkedin.com/in/haiaelzufari" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Suivre sur LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Authentication and Posts */}
            {!isAuthenticated ? (
              <div className="space-y-8">
                {/* Preview Posts - Static content */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-primary">
                      Aperçu des Publications
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Extraits des dernières analyses juridiques
                    </p>
                  </div>
                  
                  {/* Static preview posts */}
                  <div className="space-y-6">
                    <div className="border rounded-lg p-6 bg-card relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none z-10" />
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <img
                            src="/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png"
                            alt="Haia El Zufari"
                            className="w-12 h-12 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-semibold">Haia El Zufari</p>
                            <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris | Droit de la Distribution</p>
                          </div>
                        </div>
                        <p className="text-foreground mb-4">
                          🚀 Nouvelle réglementation européenne sur les contrats de distribution : ce qu'il faut savoir
                          <br /><br />
                          La Commission européenne vient d'adopter de nouvelles directives qui impacteront significativement les réseaux de distribution en 2024...
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                          <span>👍 127</span>
                          <span>💬 23 commentaires</span>
                          <span>🔄 18 partages</span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6 bg-card relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none z-10" />
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <img
                            src="/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png"
                            alt="Haia El Zufari"
                            className="w-12 h-12 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-semibold">Haia El Zufari</p>
                            <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris | Droit de la Distribution</p>
                          </div>
                        </div>
                        <p className="text-foreground mb-4">
                          ⚖️ Décision marquante de la Cour de Cassation : résiliation abusive de contrat de franchise
                          <br /><br />
                          La Chambre commerciale vient de rendre un arrêt important concernant les conditions de résiliation des contrats de franchise...
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                          <span>👍 89</span>
                          <span>💬 15 commentaires</span>
                          <span>🔄 12 partages</span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6 bg-card relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none z-10" />
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <img
                            src="/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png"
                            alt="Haia El Zufari"
                            className="w-12 h-12 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-semibold">Haia El Zufari</p>
                            <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris | Droit de la Distribution</p>
                          </div>
                        </div>
                        <p className="text-foreground mb-4">
                          📋 Guide pratique : Comment négocier un contrat de distribution sélective ?
                          <br /><br />
                          Après 10 ans d'expérience dans ce domaine, voici mes conseils essentiels...
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                          <span>👍 156</span>
                          <span>💬 31 commentaires</span>
                          <span>🔄 24 partages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Connection CTA */}
                <div className="text-center py-8 border-t">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Voir toutes les publications en temps réel
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Connectez-vous à LinkedIn pour accéder à l'intégralité des publications et analyses juridiques en temps réel.
                    </p>
                    <LinkedInAuth onAuthenticated={handleAuthenticated} />
                  </div>
                </div>
              </div>
            ) : (
              <LinkedInPosts />
            )}

            {/* LinkedIn Direct Link */}
            <div className="mt-12 text-center">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Voir toutes les publications
                </h3>
                <p className="text-muted-foreground mb-4">
                  Découvrez l'intégralité de mes analyses et participez aux discussions 
                  directement sur LinkedIn.
                </p>
                <Button asChild variant="outline">
                  <a 
                    href="https://www.linkedin.com/in/haiaelzufari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le profil LinkedIn complet
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actualites;