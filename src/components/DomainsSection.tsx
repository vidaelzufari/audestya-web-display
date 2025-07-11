import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, FileText, ShieldCheck, Users, Building, Gavel } from 'lucide-react';

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
      ]
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
      ]
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
      ]
    },
    {
      icon: ShieldCheck,
      title: "Protection du Consommateur",
      description: "Mise en conformité avec les réglementations de protection du consommateur et gestion des litiges.",
      details: [
        "Droit de la consommation",
        "Pratiques déloyales",
        "Garanties légales",
        "Médiation consommateur"
      ]
    },
    {
      icon: Scale,
      title: "Négociation de Contrats",
      description: "Négociation et rédaction de contrats commerciaux sécurisés, adaptés aux enjeux de votre activité.",
      details: [
        "Contrats de partenariat",
        "Accords de distribution",
        "Contrats cadres",
        "Négociation commerciale"
      ]
    },
    {
      icon: Gavel,
      title: "Sécurisation Contractuelle",
      description: "Audit et optimisation de vos outils juridiques existants pour une sécurisation maximale de vos relations d'affaires.",
      details: [
        "Audit contractuel",
        "Optimisation CGV",
        "Outils juridiques",
        "Politique commerciale"
      ]
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
            Une expertise spécialisée au service de vos enjeux juridiques et commerciaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="space-y-2">
                    {domain.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Besoin d'un accompagnement spécifique ? Contactez-moi pour discuter de vos enjeux.
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:+33685353781" 
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;