import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, Users } from 'lucide-react';

// Custom SVG icon for Accompagnement Juridique Externalisé
const AccompagnementIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
  </svg>
);

const DomainsSection = () => {
  const domains = [
    {
      title: "Réseaux de Distribution",
      icon: Network,
      description: "Structurer un réseau, c'est construire un cadre juridique robuste, évolutif et aligné sur votre stratégie.\nJe vous accompagne à chaque étape :",
      features: [
        "Choix du modèle (franchise, licence, commission-affiliation, …)",
        "Rédaction des documents clés (DIP, contrats, CGV, …)",
        "Sécurisation des supports et prévention des risques commerciaux ou concurrentiels"
      ],
      link: "/reseaux-distribution"
    },
    {
      title: "Relations et Pratiques Commerciales",
      icon: Users,
      description: "Vos relations contractuelles structurent la solidité et la performance de votre activité. J'interviens pour :",
      features: [
        "Encadrer juridiquement vos relations fournisseurs, distributeurs ou partenaires",
        "Auditer vos pratiques commerciales",
        "Sécuriser vos supports et campagnes à destination des consommateurs"
      ],
      link: "/relations-commerciales"
    },
    {
      title: "Accompagnement Juridique Externalisé",
      icon: AccompagnementIcon,
      description: "Un appui juridique structuré et aligné sur vos priorités.\nJe vous accompagne en autonomie ou aux côtés de vos équipes, pour :",
      features: [
        "Piloter des projets structurants",
        "Absorber les pics d'activité",
        "Sécuriser des décisions clés"
      ],
      link: "/accompagnement-juridique"
    }
  ];

  return (
    <section id="domaines" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Domaines d'Intervention
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une expertise juridique alignée sur vos enjeux business et opérationnels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {domains.map((domain, index) => (
            <Card key={index} className="relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft transition-all duration-500 group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="mx-auto mb-6 bg-muted rounded-full w-20 h-20 flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                  {React.createElement(domain.icon, {
                    className: "w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300"
                  })}
                </div>
                <CardTitle className="font-serif text-2xl text-primary">{domain.title}</CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                  {domain.description.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < domain.description.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                
                <div className="space-y-3 mb-8">
                  {domain.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mr-4 flex-shrink-0 mt-1"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium">
                  <Link to={domain.link} className="inline-flex items-center justify-center gap-2">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>
          ))}
        </div>
        
        <div className="relative mt-16">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;