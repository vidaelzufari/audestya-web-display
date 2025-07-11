import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import expertiseIcon from '@/assets/expertise-icon.jpg';
import pragmaticIcon from '@/assets/pragmatic-icon.jpg';
import trustIcon from '@/assets/trust-icon.jpg';

const AboutSection = () => {
  return (
    <section id="presentation" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Mon intervention section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            Mon Intervention
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="text-xl font-medium text-primary">
              Une collaboration sur mesure, adaptée à vos enjeux
            </p>
            <p className="text-xl font-medium text-primary">
              Une approche concrète, à vos côtés à chaque étape
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Chaque intervention que je mènerai sera pensée pour générer une valeur juridique 
              et opérationnelle concrète, alignée avec vos objectifs.
            </p>
          </div>
          <Button 
            variant="outline" 
            size="lg" 
            className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            En savoir plus
          </Button>
        </div>

        {/* Expertise areas */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold text-primary text-center mb-12">
            Distribution - Contrats - Consommation
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Négociation de contrats – Sécurisation contractuelle – Réseaux de distribution – 
              Structuration juridique – Contrats cadres – CGV – Politiques commerciales – 
              Outils juridiques – Audits contractuels – Relations commerciales – 
              Pratiques promotionnelles – Protection du consommateur
            </p>
          </div>
        </div>

        {/* Accompaniment section */}
        <div className="text-center mb-20">
          <h3 className="font-serif text-3xl font-bold text-primary mb-6">
            Accompagnement Juridique Externalisé
          </h3>
          <p className="text-lg text-muted-foreground">
            Pilotage juridique de projets structurants – Missions ponctuelles
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img 
                  src={expertiseIcon} 
                  alt="Expertise confirmée" 
                  className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary mb-4">
                Une expertise confirmée
              </h4>
              <p className="text-muted-foreground mb-6">
                Une connaissance approfondie du droit de la distribution et des contrats, 
                acquise par une expérience solide et une formation continue.
              </p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                En savoir plus
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img 
                  src={pragmaticIcon} 
                  alt="Approche pragmatique" 
                  className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary mb-4">
                Une approche pragmatique
              </h4>
              <p className="text-muted-foreground mb-6">
                Des solutions juridiques adaptées à la réalité de votre entreprise, 
                alliant rigueur juridique et efficacité opérationnelle.
              </p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                En savoir plus
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img 
                  src={trustIcon} 
                  alt="Relation de confiance" 
                  className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary mb-4">
                Une relation de confiance
              </h4>
              <p className="text-muted-foreground mb-6">
                Un accompagnement basé sur l'écoute, la transparence et l'engagement, 
                pour une collaboration durable et fructueuse.
              </p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                En savoir plus
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;