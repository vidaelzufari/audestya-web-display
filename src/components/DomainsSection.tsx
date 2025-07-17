import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, FileText, ShieldCheck, Users, Building, Gavel, ArrowRight } from 'lucide-react';

const DomainsSection = () => {
  const domains = [
    {
      icon: Building,
      title: "Réseaux de Distribution",
      description: "Structurer un réseau, c'est construire un cadre juridique robuste, évolutif et aligné sur votre stratégie.\nJe vous accompagne à chaque étape :",
      details: [
        "Choix du modèle (franchise, licence, commission-affiliation…)",
        "Rédaction des documents clés (DIP, contrats, CGV…)",
        "Sécurisation des supports et prévention des risques commerciaux ou concurrentiels"
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
    <section id="domaines" className="py-24 bg-gradient-to-br from-background via-background/95 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block p-3 bg-gradient-secondary rounded-full mb-6">
            <Scale className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
            Domaines d'Intervention
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Une expertise juridique alignée sur vos enjeux business et opérationnels.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-background to-background/90 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl w-fit group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                    {domain.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {domain.description}
                  </p>
                  
                  {domain.details.length > 0 && (
                    <div className="space-y-3 mb-8">
                      {domain.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start text-sm text-muted-foreground group/item">
                          <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mr-4 flex-shrink-0 mt-1 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="group-hover/item:text-foreground transition-colors duration-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {domain.hasPage ? (
                    <Button asChild className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium">
                      <a href={domain.link}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-base font-medium">
                      <a href={domain.link}>
                        Me contacter
                      </a>
                    </Button>
                  )}
                </CardContent>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </Card>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;