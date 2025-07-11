import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import DomainsSection from '@/components/DomainsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import expertiseIcon from '@/assets/expertise-icon.jpg';
import pragmaticIcon from '@/assets/pragmatic-icon.jpg';
import trustIcon from '@/assets/trust-icon.jpg';
import lawyerPortrait from '@/assets/lawyer-portrait.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Mon Intervention Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
              Mon Intervention
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
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
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  En savoir plus
                </a>
              </div>
            </div>
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
                <p className="text-muted-foreground mb-4">
                  Une connaissance approfondie du droit de la distribution et des contrats, 
                  acquise par une expérience solide et une formation continue.
                </p>
                <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  En savoir plus
                </a>
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
                <p className="text-muted-foreground mb-4">
                  Des solutions juridiques adaptées à la réalité de votre entreprise, 
                  alliant rigueur juridique et efficacité opérationnelle.
                </p>
                <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  En savoir plus
                </a>
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
                <p className="text-muted-foreground mb-4">
                  Un accompagnement basé sur l'écoute, la transparence et l'engagement, 
                  pour une collaboration durable et fructueuse.
                </p>
                <div className="text-primary font-medium">
                  Une relation de confiance
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="presentation" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
              Bio
            </h2>
            <div className="bg-background rounded-xl p-8 shadow-soft mb-12 border">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-card flex-shrink-0">
                  <img 
                    src={lawyerPortrait} 
                    alt="Portrait de l'avocate" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-6 text-lg text-muted-foreground">
                  <p className="text-xl font-medium text-primary">
                    Avocate indépendante spécialisée en droit des affaires
                  </p>
                  <p className="text-left leading-relaxed">
                    Après de plus de quinze années d'expérience en entreprise, d'abord comme juriste, puis comme directrice juridique, j'ai choisi d'exercer en toute indépendance pour mettre mon expertise au service des entreprises.
                  </p>
                  <div className="text-left leading-relaxed">
                    <p className="mb-3">Ce choix repose sur :</p>
                    <ul className="space-y-2 ml-4">
                      <li>– Une conviction forte : le droit est un levier de structuration, de sécurisation et de création de valeur, lorsqu'il est compris, bien appliqué, et aligné avec la réalité opérationnelle de l'entreprise ;</li>
                      <li>– Une ambition claire : accompagner les entreprises différemment, en m'appuyant sur ma connaissance de leurs enjeux internes.</li>
                    </ul>
                  </div>
                  <p className="text-left leading-relaxed">
                    J'ai évolué, au sein d'ETI en croissance ou en transformation, dans des secteurs aussi divers que le textile, la restauration, l'exploitation cinématographique ou encore l'exploitation de salles de sport. Cette diversité m'a permis de développer une vision transversale et stratégique du droit, ainsi qu'une capacité à dialoguer avec les directions générales comme avec les équipes opérationnelles.
                  </p>
                </div>
              </div>
              
              {/* Informations professionnelles */}
              <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t">
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-4">
                    Principaux domaines d'intervention
                  </h4>
                  <p className="text-muted-foreground">
                    Distribution, Contrat, Consommation.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-4">
                    Formation
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Master II en droit européen des affaires, Université Paris XI – Jean Monnet</p>
                    <p>Maîtrise en droit européen, Université Paris II – Panthéon Assas</p>
                    <p>Maîtrise en droit international, Université Paris II – Panthéon Assas</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-4">
                    Inscription au barreau
                  </h4>
                  <p className="text-muted-foreground">
                    Paris 2025
                  </p>
                </div>
                
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-4">
                    Langues
                  </h4>
                  <p className="text-muted-foreground">
                    Français – Anglais – Arabe
                  </p>
                </div>
              </div>
            </div>
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
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={expertiseIcon} 
                      alt="Excellence" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    Recherche constante de la qualité dans chaque mission, 
                    formation continue et veille juridique permanente pour 
                    offrir le meilleur service à mes clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={pragmaticIcon} 
                      alt="Intégrité" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Intégrité
                  </h3>
                  <p className="text-muted-foreground">
                    Transparence, honnêteté et respect des règles déontologiques 
                    dans toutes mes relations professionnelles. La confiance 
                    est la base de tout accompagnement réussi.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={trustIcon} 
                      alt="Pragmatisme" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Pragmatisme
                  </h3>
                  <p className="text-muted-foreground">
                    Solutions concrètes et adaptées à la réalité de votre entreprise. 
                    Le droit doit servir votre business, pas le contraindre 
                    inutilement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={expertiseIcon} 
                      alt="Proximité" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Proximité
                  </h3>
                  <p className="text-muted-foreground">
                    Écoute active, disponibilité et réactivité. Chaque client 
                    mérite une attention personnalisée et un service adapté 
                    à ses besoins spécifiques.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={pragmaticIcon} 
                      alt="Innovation" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Innovation
                  </h3>
                  <p className="text-muted-foreground">
                    Anticipation des évolutions juridiques et adoption des 
                    nouvelles technologies pour optimiser la qualité du 
                    service et l'efficacité des missions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={trustIcon} 
                      alt="Engagement" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Engagement
                  </h3>
                  <p className="text-muted-foreground">
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

      {/* Mon Approche Section */}
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

      {/* Honoraires Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Honoraires
            </h2>
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
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
      <section className="py-20 bg-muted/30">
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

      <DomainsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
