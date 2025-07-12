import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Actualites = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8">
              Actualités
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Restez informé des dernières évolutions juridiques
            </p>
          </div>
        </div>
      </section>

      {/* Actualités Content */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-16 text-center">
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

      
      <Footer />
    </div>
  );
};

export default Actualites;