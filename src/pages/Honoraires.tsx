import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Clock, Users, CheckCircle } from 'lucide-react';

const Honoraires = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-8">
              Honoraires
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl font-semibold text-primary-foreground mb-4">
                Des honoraires fondés sur la réalité de vos enjeux
              </p>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Les modalités d'intervention et les honoraires sont définis en amont, avec clarté et sérénité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Introduction Card */}
            <Card className="mb-16 border-0 shadow-lg group">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-xl text-foreground leading-relaxed">
                    Les honoraires sont fixés en fonction de plusieurs critères : nature et complexité du dossier, volume des diligences, et usages de la profession.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Three Modes Section */}
            <div className="mb-16">
              <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-12">
                Trois modes de facturation peuvent être proposés
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                      <CreditCard className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Forfait
                    </h3>
                    <p className="text-muted-foreground">
                      (avec ou sans honoraire de résultat)
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:transform hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Clock className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Temps passé
                    </h3>
                    <p className="text-muted-foreground">
                      sur la base d'un taux horaire
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:transform hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Users className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Abonnement
                    </h3>
                    <p className="text-muted-foreground">
                      pour un accompagnement régulier
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Notice */}
            <div className="text-center">
              <Card className="bg-gradient-primary border-0">
                <CardContent className="p-10">
                  <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-primary-foreground leading-relaxed">
                      Sauf urgence, les modalités sont définies d'un commun accord au début de la mission, via une convention d'honoraires. Les honoraires ne couvrent pas les frais externes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Honoraires;