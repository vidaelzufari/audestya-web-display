import { Card, CardContent } from '@/components/ui/card';
import { LinkedinIcon, Gavel } from 'lucide-react';

const SecurisationContractuelle = () => {
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
              <Gavel className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Sécurisation Contractuelle
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Audit et optimisation de vos outils juridiques existants pour une sécurisation maximale de vos relations d'affaires
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
                  Optimisation de votre sécurité juridique
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  La sécurisation contractuelle est un enjeu majeur pour toute entreprise. Nos audits 
                  approfondis vous permettent d'identifier les risques potentiels et d'optimiser vos 
                  outils juridiques pour une protection maximale.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre approche méthodique garantit une analyse exhaustive de vos contrats et de vos 
                  pratiques, avec des recommandations concrètes pour renforcer votre sécurité juridique.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Nos prestations de sécurisation
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Audit contractuel</h4>
                    <p className="text-muted-foreground">
                      Analyse complète de vos contrats existants et identification des risques
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Optimisation CGV</h4>
                    <p className="text-muted-foreground">
                      Révision et optimisation de vos conditions générales de vente
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Outils juridiques</h4>
                    <p className="text-muted-foreground">
                      Création d'outils juridiques sur mesure pour votre activité
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Politique commerciale</h4>
                    <p className="text-muted-foreground">
                      Élaboration de politiques commerciales conformes et sécurisées
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Processus d'audit et d'optimisation
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Diagnostic complet de votre documentation contractuelle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Identification des vulnérabilités et des points d'amélioration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommandations personnalisées et plan d'action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mise en œuvre des améliorations et suivi des résultats</span>
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

export default SecurisationContractuelle;