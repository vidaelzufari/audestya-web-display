import { Card, CardContent } from '@/components/ui/card';
import { LinkedinIcon, ShieldCheck } from 'lucide-react';

const ProtectionConsommateur = () => {
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
              <ShieldCheck className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Protection du Consommateur
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Mise en conformité avec les réglementations de protection du consommateur et gestion des litiges
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
                  Notre expertise en protection du consommateur
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Dans un environnement juridique de plus en plus protecteur des consommateurs, 
                  il est essentiel pour les entreprises de maîtriser les réglementations applicables 
                  et d'adapter leurs pratiques commerciales en conséquence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre accompagnement vous permet de sécuriser vos relations avec vos clients tout 
                  en respectant scrupuleusement le cadre légal de protection du consommateur.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Nos services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Droit de la consommation</h4>
                    <p className="text-muted-foreground">
                      Conseil et mise en conformité avec les règles du Code de la consommation
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Pratiques déloyales</h4>
                    <p className="text-muted-foreground">
                      Prévention et gestion des pratiques commerciales déloyales
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Garanties légales</h4>
                    <p className="text-muted-foreground">
                      Mise en place et gestion des garanties légales et commerciales
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Médiation consommateur</h4>
                    <p className="text-muted-foreground">
                      Accompagnement dans les procédures de médiation consommateur
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Pourquoi choisir notre accompagnement ?
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expertise approfondie du droit de la consommation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Veille juridique permanente sur les évolutions réglementaires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Approche préventive pour éviter les contentieux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Accompagnement dans la gestion des réclamations</span>
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

export default ProtectionConsommateur;