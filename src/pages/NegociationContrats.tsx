import { Card, CardContent } from '@/components/ui/card';
import { LinkedinIcon, Scale } from 'lucide-react';

const NegociationContrats = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Navigation */}
      <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
        <div className="bg-primary">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center text-sm text-primary-foreground">
              <div className="flex items-center gap-6">
                <a href="tel:+33685353781" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <span>📞</span>
                  +33 6 85 35 37 81
                </a>
                <a href="mailto:haia.elzufari@audestya-avocat.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <span>✉️</span>
                  haia.elzufari@audestya-avocat.com
                </a>
              </div>
              <a 
                href="https://www.linkedin.com/in/haia-elzufari/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="font-serif text-2xl font-bold text-primary-foreground">
                AUDESTYA
              </h1>
              <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mx-auto mb-6 p-4 bg-secondary/20 rounded-full w-fit">
              <Scale className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Négociation de Contrats
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Négociation et rédaction de contrats commerciaux sécurisés, adaptés aux enjeux de votre activité
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Excellence en négociation contractuelle
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  La négociation contractuelle est un art qui requiert à la fois une expertise juridique 
                  pointue et une compréhension fine des enjeux business. Notre approche vous garantit 
                  des contrats équilibrés et sécurisés.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous vous accompagnons à chaque étape, de la préparation de la négociation à la 
                  finalisation du contrat, en veillant à protéger vos intérêts tout en préservant 
                  la relation commerciale.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Nos domaines d'intervention
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Contrats de partenariat</h4>
                    <p className="text-muted-foreground">
                      Structuration et négociation de partenariats stratégiques
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Accords de distribution</h4>
                    <p className="text-muted-foreground">
                      Négociation d'accords de distribution exclusifs ou sélectifs
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Contrats cadres</h4>
                    <p className="text-muted-foreground">
                      Élaboration de contrats cadres pour relations commerciales durables
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Négociation commerciale</h4>
                    <p className="text-muted-foreground">
                      Accompagnement stratégique dans les négociations complexes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Notre méthode
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Analyse préalable des enjeux et objectifs stratégiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Préparation rigoureuse de la stratégie de négociation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Accompagnement durant toute la phase de négociation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rédaction finale sécurisée et équilibrée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <h3 className="font-serif text-2xl font-bold">AUDESTYA</h3>
              <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
            </div>
            <div className="space-y-2 text-sm opacity-90">
              <p>
                <a href="tel:+33685353781" className="hover:text-secondary transition-colors">
                  +33 6 85 35 37 81
                </a>
              </p>
              <p>
                <a href="mailto:haia.elzufari@audestya-avocat.com" className="hover:text-secondary transition-colors">
                  haia.elzufari@audestya-avocat.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NegociationContrats;