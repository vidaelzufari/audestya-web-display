import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Network, Scale, Users, Briefcase } from 'lucide-react';

const DomainsSection = () => {
  return (
    <section id="domaines" className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Domaines d'Intervention
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Une expertise spécialisée dans trois domaines complémentaires pour accompagner 
              votre développement commercial et sécuriser vos relations d'affaires.
            </p>
          </div>

          {/* Domains Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* Réseaux de Distribution */}
            <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Network className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                    Réseaux de Distribution
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Structuration et accompagnement juridique de vos réseaux commerciaux : 
                    franchise, distribution sélective, concession.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Création de réseaux de franchise
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Distribution sélective et concession
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Partenariats commerciaux
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/reseaux-distribution">
                        En savoir plus
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Relations Commerciales */}
            <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Scale className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                    Relations et Pratiques Commerciales
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Sécurisation de vos relations d'affaires et conformité de vos 
                    pratiques commerciales avec la réglementation.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Contrats commerciaux
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Pratiques restrictives
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Négociation et contentieux
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/relations-commerciales">
                        En savoir plus
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accompagnement Juridique */}
            <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                    Accompagnement Juridique Externalisé
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Support juridique personnalisé pour vos projets et décisions 
                    stratégiques avec une approche collaborative.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Conseil stratégique
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Rédaction contractuelle
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Formation et sensibilisation
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/accompagnement-juridique">
                        En savoir plus
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-primary border-0 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-6">
                  Prêt à sécuriser et développer votre activité ?
                </h3>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Discutons de vos enjeux juridiques et définissons ensemble 
                  la stratégie la plus adaptée à vos objectifs.
                </p>
                <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-medium">
                  <a href="/#contact">
                    Prendre contact
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;