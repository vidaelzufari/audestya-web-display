import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Network } from 'lucide-react';

// Custom SVG icon for Accompagnement Juridique Externalisé
const AccompagnementIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
  </svg>
);

const DomainsSection = () => {
  return (
    <section id="domaines" className="py-24 bg-gradient-to-br from-background via-background/95 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Domaines d'intervention
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Trois axes d'expertise complémentaires pour structurer et sécuriser vos activités commerciales
            </p>
          </div>

          {/* Three main domains */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Réseaux de Distribution */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10 h-full flex flex-col">
                <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                  <Building className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-4 flex-grow">
                  Réseaux de Distribution
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-justify flex-grow">
                  Structuration, sécurisation et accompagnement juridique de vos réseaux : franchise, concession, distribution sélective, agents commerciaux, e-commerce.
                </p>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium mt-auto">
                  <a href="/reseaux-distribution">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Relations et Pratiques Commerciales */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10 h-full flex flex-col">
                <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                  <Network className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-4 flex-grow">
                  Relations et Pratiques Commerciales
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-justify flex-grow">
                  Sécurisation de vos relations commerciales BtoB et BtoC : contrats, CGV, pratiques promotionnelles, protection du consommateur.
                </p>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium mt-auto">
                  <a href="/relations-commerciales">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Accompagnement Juridique Externalisé */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="text-center p-12 relative z-10 h-full flex flex-col">
                <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                  <AccompagnementIcon className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300 mb-4 flex-grow">
                  Accompagnement Juridique Externalisé
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-justify flex-grow">
                  Pilotage juridique de projets structurants, renfort ponctuel ou continu, appui transversal aux équipes.
                </p>
                
                <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium mt-auto">
                  <a href="/accompagnement-juridique">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>
          </div>

          {/* Decorative elements */}
          <div className="relative mt-16">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;