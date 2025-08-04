import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DomainsSection = () => {
  const domains = [
    {
      title: "Réseaux de distribution",
      description: "Conseil et accompagnement dans la structuration et la gestion des réseaux de distribution commerciale.",
      features: [
        "Contrats de franchise",
        "Contrats de concession",
        "Contrats d'agent commercial",
        "Réseaux de distribution sélective"
      ],
      link: "/reseaux-distribution"
    },
    {
      title: "Relations commerciales",
      description: "Expertise en droit des pratiques commerciales et accompagnement dans vos relations d'affaires.",
      features: [
        "Négociation commerciale",
        "Rupture de relations commerciales",
        "Pratiques restrictives de concurrence",
        "Contentieux commercial"
      ],
      link: "/relations-commerciales"
    },
    {
      title: "Accompagnement juridique",
      description: "Conseil stratégique et accompagnement personnalisé pour sécuriser vos projets commerciaux.",
      features: [
        "Audit juridique",
        "Rédaction contractuelle",
        "Formation équipes",
        "Veille réglementaire"
      ],
      link: "/accompagnement-juridique"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Domaines d'expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une expertise spécialisée en droit de la distribution et des relations commerciales, 
            au service de votre développement commercial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {domains.map((domain, index) => (
            <Card key={index} className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {domain.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {domain.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground w-full group-hover:shadow-lg transition-all duration-300">
                  <Link to={domain.link} className="inline-flex items-center justify-center gap-2">
                    En savoir plus
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;