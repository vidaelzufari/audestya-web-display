
import { Card, CardContent } from '@/components/ui/card';
import expertiseIcon from '@/assets/expertise-icon.jpg';
import pragmaticIcon from '@/assets/pragmatic-icon.jpg';
import trustIcon from '@/assets/trust-icon.jpg';
import lawyerPortrait from '@/assets/lawyer-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="presentation" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        {/* Bio personnelle */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            À Propos
          </h2>
          <div className="bg-background rounded-xl p-8 shadow-soft mb-12 border">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-card flex-shrink-0">
                <img 
                  src={lawyerPortrait} 
                  alt="Portrait de l'avocate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-6 text-lg text-muted-foreground">
              <p className="text-left leading-relaxed">
                Après plusieurs années d'expérience au sein de cabinets d'avocats d'affaires reconnus, 
                j'ai choisi de développer une pratique indépendante pour offrir un accompagnement 
                juridique sur mesure, adapté aux besoins spécifiques de chaque entreprise.
              </p>
              <p className="text-left leading-relaxed">
                Ma spécialisation en droit de la distribution, des contrats et de la consommation 
                me permet d'apporter une expertise pointue et des solutions concrètes aux défis 
                juridiques que rencontrent les entreprises dans leurs activités commerciales.
              </p>
                <p className="text-left leading-relaxed">
                  Mon approche se distingue par un équilibre entre rigueur juridique et pragmatisme 
                  opérationnel, pour vous accompagner efficacement dans la sécurisation et le 
                  développement de vos activités.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mon intervention section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-left">
            Structurer, sécuriser, accompagner vos décisions
          </h3>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="text-xl font-medium text-primary text-left">
              Des solutions juridiques ancrées dans vos enjeux business
            </p>
            <p className="text-xl font-medium text-primary text-left">
              Clarté, méthode, exigence à chaque étape
            </p>
            <p className="text-lg leading-relaxed text-left">
              Le droit n'a d'impact que s'il éclaire l'action.
            </p>
          </div>
        </div>

        {/* Expertise areas */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold text-primary mb-12 text-left">
            Distribution - Contrats - Consommation
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-left">
              Négociation de contrats – Sécurisation contractuelle – Réseaux de distribution – 
              Structuration juridique – Contrats cadres – CGV – Politiques commerciales – 
              Outils juridiques – Audits contractuels – Relations commerciales – 
              Pratiques promotionnelles – Protection du consommateur
            </p>
          </div>
        </div>

        {/* Accompaniment section */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold text-primary mb-6 text-left">
            Accompagnement Juridique Externalisé
          </h3>
          <p className="text-lg text-muted-foreground text-left">
            Pilotage juridique de projets structurants – Missions ponctuelles
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
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
              <p className="text-muted-foreground">
                Mon parcours en entreprise m'a permis de développer une solide culture business, une compréhension fine des enjeux métiers et une capacité à dialoguer avec les directions générales, les directions juridiques qu'avec les équipes opérationnelles.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
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
              <p className="text-muted-foreground">
                Je ne me contente pas de vous exposer des règles de droit, je les mets en perspective avec votre environnement, vos objectifs et vos contraintes, pour vous apporter des solutions concrètes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
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
              <p className="text-muted-foreground">
                Je m'investis avec loyauté, clarté et exigence. Je vous informe en toute transparence lorsque vos besoins sortent de mon domaine de compétence, et je m'attache à construire avec vous une relation de proximité, fondée sur l'écoute et l'anticipation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
