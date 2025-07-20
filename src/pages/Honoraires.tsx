import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Euro, FileText, Scale, Users } from 'lucide-react';

const Honoraires = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Honoraires
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Transparence et flexibilité dans notre politique tarifaire
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Une tarification adaptée à vos besoins
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous privilégions la transparence et proposons différentes modalités de facturation 
                selon la nature de votre dossier et vos préférences.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Euro className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Honoraires au temps passé
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Facturation basée sur le temps effectivement consacré à votre dossier, 
                    avec un taux horaire transparent communiqué dès le début de la mission.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Suivi détaillé du temps</li>
                    <li>• Facturation mensuelle</li>
                    <li>• Devis préalable possible</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Forfait par mission
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Prix fixe établi en fonction de la complexité et de l'étendue de la mission, 
                    vous offrant une visibilité complète sur les coûts.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Prix défini à l'avance</li>
                    <li>• Aucune surprise</li>
                    <li>• Adapté aux missions délimitées</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-muted/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Scale className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Consultation initiale
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Premier rendez-vous pour analyser votre situation et définir la stratégie juridique adaptée. 
                    Devis personnalisé fourni à l'issue de cette consultation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Accompagnement sur mesure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Modalités de paiement flexibles et adaptées à votre structure. 
                    Possibilité d'échelonnement selon la durée et la nature de la mission.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-primary p-8 rounded-2xl">
                <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-4">
                  Discutons de votre projet
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Chaque situation est unique. Contactez-nous pour obtenir un devis personnalisé 
                  et découvrir la solution tarifaire la plus adaptée à vos besoins.
                </p>
                <a 
                  href="mailto:haia.elzufari@audestya-avocat.com"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Honoraires;