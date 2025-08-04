import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import DomainsSection from '@/components/DomainsSection';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LinkedinIcon, Award, Shield, Target, Users, Lightbulb, Compass, Handshake, Briefcase, Wrench } from 'lucide-react';
import lawyerPortrait from '/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png';

const Presentation = () => {
  // Gérer le scroll automatique vers l'ancre après le chargement
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Attendre que le contenu soit rendu
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      // Si pas d'ancre, aller au début de la page
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              IDENTITÉ ET APPROCHE
            </h1>
          </div>
        </div>
      </section>

      {/* Mon Approche Section */}
      <section id="mon-approche" className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
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
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Une démarche structurée, articulée autour de trois principes d'intervention.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Expertise Card */}
              <div>
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden transition-all duration-500 relative group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                        <Briefcase className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Une expertise confirmée
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>
                        Mon parcours en entreprise m'a permis de développer une solide culture business, une compréhension fine des enjeux métiers et une capacité à dialoguer avec les directions générales, les directions juridiques aussi bien qu'avec les équipes opérationnelles.
                      </p>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </Card>
              </div>

              {/* Pragmatic Card */}
              <div>
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden transition-all duration-500 relative lg:mt-8 group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                        <Wrench className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Une approche pragmatique
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg text-justify text-left">
                        Je ne me contente pas de vous exposer des règles de droit, je les mets en perspective avec votre environnement, vos objectifs et vos contraintes, pour vous apporter des solutions concrètes.
                      </p>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </Card>
              </div>

              {/* Trust Card */}
              <div>
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden transition-all duration-500 relative group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                        <Handshake className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Une relation de confiance
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg text-justify text-left">
                        Je m'investis avec loyauté, clarté et exigence. Je vous informe en toute transparence lorsque vos besoins sortent de mon domaine de compétence, et je m'attache à construire avec vous une relation de proximité, fondée sur l'écoute et l'anticipation.
                      </p>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
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

      {/* Ma Mission, Ma Vision et Mes Valeurs Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Ma Mission */}
              <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 transition-all duration-500 group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-left relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                      <Target className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                    Ma Mission
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p className="leading-relaxed text-justify">
                      Donner aux entreprises les leviers juridiques pour structurer, sécuriser et faire grandir leur modèle économique.
                    </p>
                    <p className="leading-relaxed text-justify">
                      Transformer la complexité du droit en décisions claires, concrètes et utiles.
                    </p>
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </Card>

              {/* Ma Vision */}
              <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 transition-all duration-500 group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                      <Lightbulb className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                    Ma Vision
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p className="leading-relaxed text-justify">
                      Je crois au pouvoir du droit comme moteur de mouvement : décider avec clarté, challenger ses pratiques, affirmer son modèle, avancer avec confiance.
                    </p>
                    <p className="leading-relaxed text-justify">
                      C'est cette dynamique que je mets au service de mes clients.
                    </p>
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </Card>

              {/* Mes Valeurs */}
              <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 transition-all duration-500 group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-left relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                      <Compass className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                    Mes valeurs
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6"></div>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p className="leading-relaxed text-justify">
                      Authenticité — Une relation directe, sans jargon inutile
                    </p>
                    
                    <p className="leading-relaxed text-justify">
                      Confiance — Un engagement loyal, clair et transparent
                    </p>
                    
                    <p className="leading-relaxed text-justify">
                      Proximité — Une compréhension fine de votre réalité terrain
                    </p>
                    
                    <p className="leading-relaxed text-justify">
                      Excellence — Une exigence constante, dans le fond comme dans la forme
                    </p>
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section with Decorative Elements */}
      <section id="presentation" className="py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-lg"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <div className="bg-background rounded-xl p-8 shadow-soft mb-12 border">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="flex-1 space-y-6 text-lg text-muted-foreground">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 text-left">
                    Bio
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-6"></div>
                  <p className="text-left leading-relaxed text-justify">
                    Après plus de quinze années d'expérience en entreprise, d'abord comme juriste, puis comme directrice juridique, j'ai choisi d'exercer en toute indépendance pour mettre mon expertise au service des entreprises.
                  </p>
                  <div className="text-left leading-relaxed text-justify">
                    <p className="mb-3">Ce choix repose sur :</p>
                    <ul className="space-y-2 ml-4 list-disc">
                      <li><strong>Une conviction forte :</strong> le droit est un levier de structuration, de sécurisation et de création de valeur, lorsqu'il est compris, bien appliqué, et aligné avec la réalité opérationnelle de l'entreprise ;</li>
                      <li><strong>Une ambition claire :</strong> accompagner les entreprises différemment, en m'appuyant sur ma connaissance de leurs enjeux internes.</li>
                    </ul>
                  </div>
                  <p className="text-left leading-relaxed text-justify">
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
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-muted/30 border-0 p-6">
                    <h5 className="font-medium text-primary mb-3">Principaux domaines d'intervention</h5>
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
                    <div className="space-y-2 text-muted-foreground text-sm text-center">
                      <p>Master II Droit européen des affaires</p>
                      <p>Université Paris XI – Jean Monnet</p>
                      <p>Maîtrise Droit européen & international</p>
                      <p>Université Paris II – Panthéon-Assas</p>
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

      <DomainsSection />

      <Footer />
    </div>
  );
};

export default Presentation;