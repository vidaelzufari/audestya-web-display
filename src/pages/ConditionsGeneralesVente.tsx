import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const ConditionsGeneralesVente = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Honoraires
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
                  Des honoraires fondés sur la réalité de vos enjeux
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed text-justify mb-8">
                  Les modalités d'intervention et les honoraires sont définis en amont, avec clarté et sérénité.
                </p>
              </CardContent>
            </Card>

            {/* Critères de fixation */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-justify mb-8">
                  Les honoraires sont fixés en fonction de plusieurs critères : nature et complexité du dossier, 
                  volume des diligences, et usages de la profession.
                </p>
              </CardContent>
            </Card>

            {/* Modes de facturation */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
                  Trois modes de facturation peuvent être proposés
                </h2>
                
                <div className="space-y-8">
                  <div className="p-6 bg-gradient-accent rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Forfait
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      (avec ou sans honoraire de résultat)
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Temps passé
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      sur la base d'un taux horaire
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                      Abonnement
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      pour un accompagnement régulier
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modalités */}
            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
                  <p className="text-lg">
                    Sauf urgence, les modalités sont définies d'un commun accord au début de la mission, 
                    via une convention d'honoraires.
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">Les honoraires ne couvrent pas les frais externes.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ConditionsGeneralesVente;