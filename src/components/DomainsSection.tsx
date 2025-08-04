import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, ExternalLink, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LinkedInFeed from '@/components/LinkedInFeed';

const Actualites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Actualités
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Suivez mes dernières analyses juridiques et actualités du droit de la distribution
            </p>
          </div>
        </div>
      </section>

      {/* LinkedIn Feed Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
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

            {/* LinkedIn Posts Preview */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Post Example 1 */}
              <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Haia El Zufari</h3>
                      <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      🔍 <strong>Analyse juridique :</strong> Les nouvelles obligations en matière de 
                      protection des consommateurs dans le e-commerce...
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
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

export default Actualites;