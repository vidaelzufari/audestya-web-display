import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, FileText, ShieldCheck, Users, Building, Gavel, ArrowRight } from 'lucide-react';

const DomainsSection = () => {
  const domains = [
    {
      icon: Building,
      title: "Réseaux de Distribution",
      description: "Structuration et accompagnement juridique des réseaux de distribution, contrats de franchise, de distribution sélective et exclusive.",
      details: [
        "Contrats de franchise",
        "Distribution sélective",
        "Distribution exclusive",
        "Réseaux intégrés"
      ],
      link: "/reseaux-distribution",
      hasPage: true
    },
    {
      icon: FileText,
      title: "Relations et Pratiques Commerciales",
      description: "Sécurisation des relations commerciales et conformité des pratiques promotionnelles dans le respect du droit de la concurrence.",
      details: [
        "Conditions générales de vente",
        "Pratiques promotionnelles",
        "Relations fournisseurs",
        "Contentieux commerciaux"
      ],
      link: "/relations-commerciales",
      hasPage: true
    },
    {
      icon: Users,
      title: "Accompagnement Juridique Externalisé",
      description: "Pilotage juridique de projets structurants et missions ponctuelles adaptées aux besoins spécifiques de votre entreprise.",
      details: [
        "Direction juridique externalisée",
        "Missions ponctuelles",
        "Audits juridiques",
        "Formation équipes"
      ],
      link: "/accompagnement-juridique",
      hasPage: true
    }
  ];

  return (
    <section id="domaines" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Domaines d'Intervention
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une expertise juridique alignée sur vos enjeux business et opérationnels.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <Card 
                key={index}
                className="bg-background shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group border-0"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-secondary rounded-full w-fit group-hover:shadow-glow transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">
                    {domain.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {domain.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {domain.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                  
                  {domain.hasPage ? (
                    <Button asChild className="w-full group/btn">
                      <a href={domain.link}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full">
                      <a href={domain.link}>
                        Me contacter
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DomainsSection;