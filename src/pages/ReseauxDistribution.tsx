import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Network, Users, Scale, FileText, ArrowRight, CheckCircle } from 'lucide-react';

const ReseauxDistribution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Network className="w-12 h-12 text-primary" />
              <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Réseaux de Distribution
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Expertise juridique spécialisée dans l'accompagnement des réseaux de distribution, 
              franchises et partenariats commerciaux
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Relations et Pratiques Commerciales */}
            <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    Relations et Pratiques Commerciales
                  </h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Conseil et accompagnement dans la structuration et la gestion de vos relations commerciales.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Négociation et rédaction de contrats de distribution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Gestion des conflits commerciaux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Conformité aux pratiques commerciales</span>
                    </li>
                  </ul>
                </div>
                
                <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground group">
                  <a 
                    href="https://audestya-avocat.com/relations-commerciales"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Accompagnement Juridique Externalisé */}
            <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Scale className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-secondary">
                    Accompagnement Juridique Externalisé
                  </h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Service juridique externalisé pour les entreprises souhaitant bénéficier d'un accompagnement régulier.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Conseil juridique permanent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Veille réglementaire personnalisée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Formation des équipes</span>
                    </li>
                  </ul>
                </div>
                
                <Button asChild className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground group">
                  <a 
                    href="https://audestya-avocat.com/accompagnement-juridique"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Expertise Complète en Droit de la Distribution
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Une approche globale pour sécuriser et optimiser vos réseaux de distribution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-background shadow-soft border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-primary mb-4">Contrats de Franchise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rédaction et négociation de contrats de franchise conformes à la réglementation
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background shadow-soft border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Network className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl text-secondary mb-4">Réseaux Intégrés</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Structuration juridique et accompagnement des réseaux de distribution intégrés
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background shadow-soft border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-primary mb-4">Partenariats</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conseil dans la mise en place et la gestion de partenariats commerciaux stratégiques
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReseauxDistribution;