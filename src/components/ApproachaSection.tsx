import { Card, CardContent } from "@/components/ui/card";
import expertiseIcon from "@/assets/expertise-icon.jpg";
import pragmaticIcon from "@/assets/pragmatic-icon.jpg";
import trustIcon from "@/assets/trust-icon.jpg";

export function ApproachaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Mon Approche
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={expertiseIcon} 
                    alt="Expertise confirmée" 
                    className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Une expertise confirmée
                </h3>
                <p className="text-muted-foreground">
                  Une connaissance approfondie du droit de la distribution et des contrats, 
                  acquise par une expérience solide et une formation continue.
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
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Une approche pragmatique
                </h3>
                <p className="text-muted-foreground">
                  Des solutions juridiques adaptées à la réalité de votre entreprise, 
                  alliant rigueur juridique et efficacité opérationnelle.
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
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Une relation de confiance
                </h3>
                <p className="text-muted-foreground">
                  Un accompagnement basé sur l'écoute, la transparence et l'engagement, 
                  pour une collaboration durable et fructueuse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}