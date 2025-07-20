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
            Des honoraires fondées sur la réalité de vos enjeux
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Les modalités d'intervention et les honoraires sont définis en amont, avec clarté et sérénité.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Les honoraires sont fixés en fonction de plusieurs critères : nature et complexité du dossier, volume des diligences, et usages de la profession.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
                Trois modes de facturation peuvent être proposés :
              </h3>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-foreground">
                    <strong>Forfait</strong> (avec ou sans honoraire de résultat)
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-foreground">
                    <strong>Temps passé</strong>, sur la base d'un taux horaire
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-foreground">
                    <strong>Abonnement</strong>, pour un accompagnement régulier
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Sauf urgence, les modalités sont définies d'un commun accord au début de la mission, via une convention d'honoraires. Les honoraires ne couvrent pas les frais externes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Honoraires;