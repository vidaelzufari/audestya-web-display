import { Card, CardContent } from '@/components/ui/card';
import { LinkedinIcon } from 'lucide-react';

const Actualites = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Navigation */}
      <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
        <div className="bg-primary">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center text-sm text-primary-foreground">
              <div className="flex items-center gap-6">
                <a href="tel:+33685353781" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <span>📞</span>
                  +33 6 85 35 37 81
                </a>
                <a href="mailto:haia.elzufari@audestya-avocat.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <span>✉️</span>
                  haia.elzufari@audestya-avocat.com
                </a>
              </div>
              <a 
                href="https://www.linkedin.com/in/haia-elzufari/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="font-serif text-2xl font-bold text-primary-foreground">
                AUDESTYA
              </h1>
              <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Actualités
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Restez informé des dernières évolutions juridiques
            </p>
          </div>
        </div>
      </section>

      {/* Actualités Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-12 text-center">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p className="text-xl font-medium text-primary">
                    Actualités juridiques à venir
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
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Retrouvez régulièrement des articles d'analyse, des commentaires sur les évolutions 
                    législatives et réglementaires, ainsi que des conseils pratiques pour anticiper 
                    et gérer les enjeux juridiques de votre entreprise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <h3 className="font-serif text-2xl font-bold">AUDESTYA</h3>
              <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
            </div>
            <div className="space-y-2 text-sm opacity-90">
              <p>
                <a href="tel:+33685353781" className="hover:text-secondary transition-colors">
                  +33 6 85 35 37 81
                </a>
              </p>
              <p>
                <a href="mailto:haia.elzufari@audestya-avocat.com" className="hover:text-secondary transition-colors">
                  haia.elzufari@audestya-avocat.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Actualites;