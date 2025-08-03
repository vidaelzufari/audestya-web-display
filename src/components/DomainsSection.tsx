import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Network, Users, FileText, Scale, Shield, Briefcase } from 'lucide-react';

const DomainsSection = () => {
  return (
    <section id="domaines" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
              Domaines d'Intervention
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Une expertise spécialisée en droit de la distribution, des contrats et de la consommation
            </p>
          </div>

          {/* Domains Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Réseaux de Distribution */}
            <Card className="bg-gradient-to-br from-background to-background/90 shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <Network className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 text-center">
                  Réseaux de Distribution
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center mb-6">
                  Structuration et sécurisation de vos réseaux commerciaux
                </p>
                <div className="text-center">
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Link to="/reseaux-distribution">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Relations Commerciales */}
            <Card className="bg-gradient-to-br from-background to-background/90 shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <Users className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 text-center">
                  Relations Commerciales
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center mb-6">
                  Négociation et sécurisation de vos contrats commerciaux
                </p>
                <div className="text-center">
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Link to="/relations-commerciales">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Conditions Générales de Vente */}
            <Card className="bg-gradient-to-br from-background to-background/90 shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <FileText className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 text-center">
                  Conditions Générales
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center mb-6">
                  Rédaction et optimisation de vos CGV et outils juridiques
                </p>
                <div className="text-center">
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Link to="/conditions-generales-vente">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Accompagnement Juridique */}
            <Card className="bg-gradient-to-br from-background to-background/90 shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <Briefcase className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 text-center">
                  Accompagnement Juridique
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center mb-6">
                  Pilotage juridique externalisé pour vos projets stratégiques
                </p>
                <div className="text-center">
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Link to="/accompagnement-juridique">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Protection du Consommateur */}
            <Card className="bg-gradient-to-br from-background to-background/90 shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <Shield className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 text-center">
                  Protection du Consommateur
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center mb-6">
                  Conformité réglementaire et pratiques commerciales
                </p>
                <div className="text-center">
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Link to="/relations-commerciales">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            {/* Droit des Contrats */}
            <Card className="bg-gradient-to-br from-background to-background/90 shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <Scale className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 text-center">
                  Droit des Contrats
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center mb-6">
                  Expertise contractuelle pour sécuriser vos relations d'affaires
                </p>
                <div className="text-center">
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Link to="/relations-commerciales">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;