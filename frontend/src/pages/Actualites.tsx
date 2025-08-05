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
                <span className="text-sm font-medium">Feed LinkedIn Direct</span>
                <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="ml-2"
              >
                {isRefreshing ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-1" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-1" />
                )}
                Actualiser
              </Button>
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

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Chargement des dernières publications...
                  </p>
                </div>
              </div>
            )}

            {/* Posts Feed */}
            {!isLoading && posts.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-primary">
                    Publications récentes
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {posts.length} publication{posts.length > 1 ? 's' : ''} disponible{posts.length > 1 ? 's' : ''}
                  </p>
                </div>
                
                {posts.map((post) => (
                  <LinkedInPostCard
                    key={post.id}
                    post={post}
                    isExpanded={expandedPosts.has(post.id)}
                    onToggleExpand={() => togglePostExpansion(post.id)}
                  />
                ))}
              </div>
            )}

            {/* Empty State */}
            {!isLoading && posts.length === 0 && (
              <div className="text-center py-12">
                <Linkedin className="w-16 h-16 text-blue-600 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Aucune publication disponible
                </h3>
                <p className="text-muted-foreground mb-6">
                  Les dernières publications LinkedIn se chargeront automatiquement.
                </p>
                <Button onClick={handleRefresh} variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Réessayer
                </Button>
              </div>
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