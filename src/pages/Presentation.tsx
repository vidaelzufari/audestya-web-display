
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LinkedinIcon } from 'lucide-react';
import lawyerPortrait from '@/assets/lawyer-portrait.jpg';

const Presentation = () => {
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
      <section className="py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-12">
              Présentation
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Découvrez mon parcours, ma mission et mes valeurs
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-20 text-center">
              Bio
            </h2>
            <Card className="bg-background shadow-soft border-0 mb-20">
              <CardContent className="p-16">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-card flex-shrink-0">
                    <img 
                      src={lawyerPortrait} 
                      alt="Portrait de l'avocate" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-8 text-lg text-muted-foreground">
                    <p className="text-xl font-medium text-primary">
                      Avocate indépendante spécialisée en droit des affaires
                    </p>
                    <p className="leading-relaxed">
                      Après plusieurs années d'expérience au sein de cabinets d'avocats d'affaires reconnus, 
                      j'ai choisi de développer une pratique indépendante pour offrir un accompagnement 
                      juridique sur mesure, adapté aux besoins spécifiques de chaque entreprise.
                    </p>
                    <p className="leading-relaxed">
                      Ma spécialisation en droit de la distribution, des contrats et de la consommation 
                      me permet d'apporter une expertise pointue et des solutions concrètes aux défis 
                      juridiques que rencontrent les entreprises dans leurs activités commerciales.
                    </p>
                    <p className="leading-relaxed">
                      Mon approche se distingue par un équilibre entre rigueur juridique et pragmatisme 
                      opérationnel, pour vous accompagner efficacement dans la sécurisation et le 
                      développement de vos activités.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ma Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Ma Mission
            </h2>
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12 text-center">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p className="text-xl font-medium text-primary">
                    Accompagner les entreprises dans la sécurisation juridique de leurs activités commerciales
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Ma mission est de fournir un conseil juridique de qualité, adapté aux réalités économiques 
                    et opérationnelles de chaque entreprise. Je m'engage à être un partenaire de confiance 
                    dans le développement de vos projets, en apportant des solutions juridiques concrètes 
                    et efficaces.
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Mon objectif est de transformer la complexité juridique en opportunités business, 
                    en vous permettant de vous concentrer sur votre cœur de métier tout en sécurisant 
                    vos activités.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ma Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Ma Vision
            </h2>
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12 text-center">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p className="text-xl font-medium text-primary">
                    Un droit des affaires accessible, pragmatique et créateur de valeur
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Je crois en un accompagnement juridique qui va au-delà du simple conseil : 
                    un véritable partenariat stratégique qui contribue à la croissance et au 
                    succès de votre entreprise.
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Ma vision est celle d'un droit des affaires moderne, où l'expertise juridique 
                    s'allie à la compréhension des enjeux business pour créer des solutions 
                    innovantes et durables.
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    L'avenir du conseil juridique réside dans l'adaptabilité, la proximité 
                    avec les clients et la capacité à anticiper les évolutions du marché.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mes Valeurs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Mes Valeurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-12 text-center">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                    Excellence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Recherche constante de la qualité dans chaque mission, 
                    formation continue et veille juridique permanente pour 
                    offrir le meilleur service à mes clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-12 text-center">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                    Intégrité
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transparence, honnêteté et respect des règles déontologiques 
                    dans toutes mes relations professionnelles. La confiance 
                    est la base de tout accompagnement réussi.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-12 text-center">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                    Pragmatisme
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Solutions concrètes et adaptées à la réalité de votre entreprise. 
                    Le droit doit servir votre business, pas le contraindre 
                    inutilement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-12 text-center">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                    Proximité
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Écoute active, disponibilité et réactivité. Chaque client 
                    mérite une attention personnalisée et un service adapté 
                    à ses besoins spécifiques.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-12 text-center">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                    Innovation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Anticipation des évolutions juridiques et adoption des 
                    nouvelles technologies pour optimiser la qualité du 
                    service et l'efficacité des missions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-12 text-center">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                    Engagement
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implication totale dans chaque dossier et engagement 
                    personnel dans la réussite de vos projets. Votre succès 
                    est ma priorité.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mon Intervention Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-20 text-center">
              Mon Intervention
            </h2>
            <Card className="bg-background shadow-soft border-0 mb-20">
              <CardContent className="p-16">
                <div className="space-y-12 text-lg text-muted-foreground">
                  <div className="text-center space-y-6">
                    <p className="text-xl font-medium text-primary">
                      Une collaboration sur mesure, adaptée à vos enjeux
                    </p>
                    <p className="text-xl font-medium text-primary">
                      Une approche concrète, à vos côtés à chaque étape
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    <p className="text-lg font-medium text-primary">
                      J'interviens pour répondre à vos besoins variés :
                    </p>
                    
                    <ul className="space-y-6 text-muted-foreground">
                      <li className="flex items-start gap-4">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Négociation et sécurisation de contrats, qu'ils soient standards, complexes ou stratégiques</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Structuration, sécurisation et accompagnement juridique de réseaux de distribution</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Rédaction et mise en place d'outils juridiques (contrats cadres, CGV, politiques commerciales, etc.)</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Audits contractuels adaptés à vos enjeux du moment</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Conseil dans vos relations commerciales avec vos fournisseurs, distributeurs ou partenaires</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Encadrement de vos pratiques promotionnelles et protection du consommateur</span>
                      </li>
                    </ul>
                    
                    <p className="text-center leading-relaxed max-w-3xl mx-auto font-medium">
                      Chaque intervention que je mènerai sera pensée pour générer une valeur juridique 
                      et opérationnelle concrète, alignée avec vos objectifs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Honoraires Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-20 text-center">
              Honoraires
            </h2>
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-16">
                <div className="space-y-8 text-lg text-muted-foreground">
                  <div className="text-center">
                    <p className="text-xl font-medium text-primary mb-6">
                      Des honoraires fondées sur la réalité de vos enjeux
                    </p>
                    <p className="leading-relaxed max-w-3xl mx-auto">
                      Les modalités d'intervention et les honoraires sont définis en amont, avec clarté et sérénité.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="leading-relaxed">
                      Les honoraires sont fixés en fonction de plusieurs critères : nature et complexité du dossier, 
                      volume des diligences, et usages de la profession.
                    </p>
                    
                    <div>
                      <p className="text-lg font-medium text-primary mb-4">
                        Trois modes de facturation peuvent être proposés :
                      </p>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>Forfait (avec ou sans honoraire de résultat)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>Temps passé, sur la base d'un taux horaire</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>Abonnement, pour un accompagnement régulier</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="leading-relaxed">
                      Sauf urgence, les modalités sont définies d'un commun accord au début de la mission, 
                      via une convention d'honoraires. Les honoraires ne couvrent pas les frais externes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Actualités
            </h2>
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12 text-center">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p className="text-xl font-medium text-primary">
                    Restez informé des dernières évolutions juridiques
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Cette section sera prochainement enrichie d'actualités juridiques, 
                    d'analyses des dernières réformes et de conseils pratiques pour 
                    vous aider à naviguer dans l'environnement juridique en constante évolution.
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    Suivez les dernières nouveautés en droit de la distribution, 
                    des contrats et de la consommation qui peuvent impacter votre activité.
                  </p>
                </div>
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

export default Presentation;
