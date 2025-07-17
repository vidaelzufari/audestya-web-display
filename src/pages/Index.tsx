import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import DomainsSection from '@/components/DomainsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Scale, ShieldCheck, Handshake, Award, Shield, Target, Users, Lightbulb, Heart } from 'lucide-react';
import expertiseIcon from '@/assets/expertise-icon.jpg';
import pragmaticIcon from '@/assets/pragmatic-icon.jpg';
import trustIcon from '@/assets/trust-icon.jpg';
import lawyerPortrait from '/lovable-uploads/a6b7efa7-8358-4a4c-be9e-dc837df084c2.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Mon Intervention Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Hero content */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                Structurer, sécuriser, accompagner vos décisions
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl font-light text-primary leading-relaxed">
                  Des solutions juridiques ancrées dans vos enjeux business
                </p>
                <p className="text-xl md:text-2xl font-light text-primary leading-relaxed">
                  Clarté, méthode, exigence à chaque étape
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-8"></div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Le droit n'a d'impact que s'il éclaire l'action.
                </p>
              </div>
              <div className="mt-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-soft"
                >
                  En savoir plus
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto">
              {/* Intervention sections title */}
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                  Deux leviers d'intervention complémentaires
                </h3>
              </div>
              <Card className="bg-background/80 backdrop-blur-sm shadow-elegant border-0 overflow-hidden group hover:shadow-card transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      Distribution - Contrats - Consommation
                    </h3>
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-base">
                    Structurer l'action, prévenir le risque, accompagner vos activités.
                  </p>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      <span className="font-medium text-primary">Négociation de contrats</span> – 
                      <span className="font-medium text-primary"> Sécurisation contractuelle</span> – 
                      <span className="font-medium text-primary"> Réseaux de distribution</span> – 
                      <span className="font-medium text-primary"> Structuration juridique</span> – 
                      <span className="font-medium text-primary"> Contrats cadres</span> – 
                      <span className="font-medium text-primary"> CGV</span> – 
                      <span className="font-medium text-primary"> Politiques commerciales</span> – 
                      <span className="font-medium text-primary"> Outils juridiques</span> – 
                      <span className="font-medium text-primary"> Audits contractuels</span> – 
                      <span className="font-medium text-primary"> Relations commerciales</span> – 
                      <span className="font-medium text-primary"> Pratiques promotionnelles</span> – 
                      <span className="font-medium text-primary"> Protection du consommateur</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Accompaniment section */}
              <div className="mt-8">
                <Card className="bg-background/80 backdrop-blur-sm shadow-elegant border-0 overflow-hidden group hover:shadow-card transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Accompagnement Juridique Externalisé
                      </h3>
                    </div>
                    <p className="text-muted-foreground italic mb-4 text-base">
                      Appui juridique ciblé pour vos projets, vos décisions et vos équipes.
                    </p>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground leading-relaxed text-base">
                        <span className="font-medium text-primary">Pilotage juridique de projets structurants</span> – 
                        <span className="font-medium text-primary"> Missions ponctuelles</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les trois piliers de mon approche Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                Mon approche
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Une démarche structurée, articulée autour de trois principes d'intervention.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background/80 backdrop-blur-sm shadow-soft border-0 overflow-hidden group hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-md mb-4">
                      <Scale className="w-8 h-8 text-white" strokeWidth={0.5} />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">
                      Une expertise confirmée
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Mon parcours en entreprise m'a permis de développer une solide culture business, une compréhension fine des enjeux métiers et une capacité à dialoguer avec les directions générales, les directions juridiques qu'avec les équipes opérationnelles.
                    </p>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors text-sm group"
                    >
                      En savoir plus
                      <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/80 backdrop-blur-sm shadow-soft border-0 overflow-hidden group hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-xl flex items-center justify-center shadow-md mb-4">
                      <ShieldCheck className="w-8 h-8 text-white" strokeWidth={0.5} />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">
                      Une approche pragmatique
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Je ne me contente pas de vous exposer des règles de droit, je les mets en perspective avec votre environnement, vos objectifs et vos contraintes, pour vous apporter des solutions concrètes.
                    </p>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors text-sm group"
                    >
                      En savoir plus
                      <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/80 backdrop-blur-sm shadow-soft border-0 overflow-hidden group hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-md mb-4">
                      <Handshake className="w-8 h-8 text-white" strokeWidth={0.5} />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">
                      Une relation de confiance
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Je m'investis avec loyauté, clarté et exigence. Je vous informe en toute transparence lorsque vos besoins sortent de mon domaine de compétence, et je m'attache à construire avec vous une relation de proximité, fondée sur l'écoute et l'anticipation.
                    </p>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors text-sm group"
                    >
                      En savoir plus
                      <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="presentation" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="bg-background rounded-xl p-8 shadow-soft mb-12 border">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="flex-1 space-y-6 text-lg text-muted-foreground">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 text-left">
                    Bio
                  </h2>
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
                <div className="w-full md:w-80 h-96 rounded-lg overflow-hidden shadow-card flex-shrink-0">
                  <img 
                    src={lawyerPortrait} 
                    alt="Portrait de l'avocate" 
                    className="w-full h-full object-cover object-[40%_20%]"
                  />
                </div>
              </div>
              
              {/* Informations professionnelles */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-serif text-xl font-bold text-primary mb-6 text-center">
                  Informations Professionnelles
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-muted/30 border-0 p-6">
                    <h5 className="font-medium text-primary mb-3">Domaines d'intervention</h5>
                    <p className="text-muted-foreground text-sm">
                      Distribution, Contrats, Consommation
                    </p>
                  </Card>
                  
                  <Card className="bg-muted/30 border-0 p-6">
                    <h5 className="font-medium text-primary mb-3">Inscription au Barreau</h5>
                    <p className="text-muted-foreground text-sm">
                      Paris 2025
                    </p>
                  </Card>
                  
                  <Card className="bg-muted/30 border-0 p-6">
                    <h5 className="font-medium text-primary mb-3">Formation</h5>
                    <div className="space-y-1 text-muted-foreground text-sm">
                      <p>Master II Droit européen des affaires</p>
                      <p className="text-xs">Université Paris XI – Jean Monnet</p>
                      <p>Maîtrise Droit européen & international</p>
                      <p className="text-xs">Université Paris II – Panthéon Assas</p>
                    </div>
                  </Card>
                  
                  <Card className="bg-muted/30 border-0 p-6">
                    <h5 className="font-medium text-primary mb-3">Langues</h5>
                    <p className="text-muted-foreground text-sm">
                      Français • Anglais • Arabe
                    </p>
                  </Card>
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
              <CardContent className="p-12">
                <div className="space-y-8 text-lg text-muted-foreground">
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-primary mb-6">
                      Accompagner les entreprises dans la structuration et la sécurisation juridique de leur activité avec une vision claire et porteuse de sens.
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <p className="leading-relaxed text-justify">
                          <span className="font-medium text-primary">Mon objectif :</span> faire du droit un véritable allié de leur développement.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <p className="leading-relaxed text-justify">
                          <span className="font-medium text-primary">Ma méthode :</span> transformer la complexité juridique en solutions concrètes et opérationnelles pour sécuriser et structurer votre activité.
                        </p>
                      </div>
                    </div>
                  </div>
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
              <CardContent className="p-12">
                <div className="space-y-8 text-lg text-muted-foreground">
                  <div className="text-left">
                    <p className="leading-relaxed text-justify mb-6">
                      <span className="font-medium text-primary">Audestya</span> est née d'un choix audacieux : sortir de ma zone de confort, reprendre mon destin professionnel en main.
                    </p>
                    <p className="leading-relaxed text-justify mb-6">
                      Ce nom symbolise une conviction profonde :
                    </p>
                    <div className="space-y-4 ml-4">
                      <div className="flex items-start gap-4">
                        <div className="text-primary font-bold">–</div>
                        <p className="leading-relaxed text-justify">
                          oser prendre sa place ;
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="text-primary font-bold">–</div>
                        <p className="leading-relaxed text-justify">
                          se réinventer quand tout semble figé ;
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="text-primary font-bold">–</div>
                        <p className="leading-relaxed text-justify">
                          et croire que la maîtrise juridique de leur activité est un levier de transformation et de croissance.
                        </p>
                      </div>
                    </div>
                    <p className="leading-relaxed text-justify mt-6">
                      C'est cette énergie que je souhaite transmettre à mes clients.
                    </p>
                  </div>
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
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-md">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4 text-left">
                    Authenticité
                  </h3>
                  <p className="text-muted-foreground text-left text-justify leading-relaxed">
                    Une relation simple, directe, sans jargon inutile.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-md">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4 text-left">
                    Confiance
                  </h3>
                  <p className="text-muted-foreground text-left text-justify leading-relaxed">
                    Un engagement loyal et transparent.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-md">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4 text-left">
                    Proximité
                  </h3>
                  <p className="text-muted-foreground text-left text-justify leading-relaxed">
                    Une compréhension fine de votre réalité et de vos besoins.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-md">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4 text-left">
                    Excellence
                  </h3>
                  <p className="text-muted-foreground text-left text-justify leading-relaxed">
                    Une exigence constante dans la qualité des prestations et des conseils.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-md">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
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
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-md">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
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
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Mon Approche
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Trois piliers fondamentaux pour un accompagnement juridique d'excellence, 
                adapté aux réalités de votre entreprise
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Expertise Card */}
              <div className="group">
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-3 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Scale className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary group-hover:text-primary-light transition-colors duration-300">
                        Une expertise confirmée
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Mon parcours en entreprise m'a permis de développer une solide culture business, une compréhension fine des enjeux métiers et une capacité à dialoguer avec les directions générales, les directions juridiques qu'avec les équipes opérationnelles.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pragmatic Card */}
              <div className="group">
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-3 relative lg:mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <ShieldCheck className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                        Une approche pragmatique
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Je ne me contente pas de vous exposer des règles de droit, je les mets en perspective avec votre environnement, vos objectifs et vos contraintes, pour vous apporter des solutions concrètes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trust Card */}
              <div className="group">
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-3 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Handshake className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        Une relation de confiance
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Je m'investis avec loyauté, clarté et exigence. Je vous informe en toute transparence lorsque vos besoins sortent de mon domaine de compétence, et je m'attache à construire avec vous une relation de proximité, fondée sur l'écoute et l'anticipation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="flex justify-center mt-16">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <DomainsSection />

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

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
