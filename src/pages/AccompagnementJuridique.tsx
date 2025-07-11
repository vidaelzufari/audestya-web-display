import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Handshake, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const AccompagnementJuridique = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Accompagnement Juridique Externalisé
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Souplesse, proximité, pragmatisme. Chaque mission est construite sur-mesure, en lien direct avec vos enjeux concrets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                  Un partenaire juridique flexible et expérimenté
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Je peux prendre en charge, en toute autonomie ou en collaboration étroite avec vos équipes internes ou externes, le pilotage juridique de projets structurants ou le support juridique ponctuel de votre direction juridique ou de vos directions opérationnelles.
                </p>
              </CardContent>
            </Card>

            {/* Types d'accompagnement */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-6">
                    Pilotage juridique de projets structurants
                  </h3>
                  <div className="space-y-4 text-lg opacity-90">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p>Accompagnement dans les phases de croissance ou de transformation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p>Restructuration juridique d'activités existantes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p>Lancement de nouveaux produits ou services</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p>Mise en conformité réglementaire</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft border-0">
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                    Support juridique ponctuel
                  </h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Renfort de votre direction juridique en cas de surcharge</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Expertise spécialisée sur des dossiers ponctuels</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Support des équipes opérationnelles</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Conseil juridique ad hoc</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Avantages */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
                  Les avantages de l'externalisation juridique
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">Souplesse</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Intervention adaptée à vos besoins ponctuels ou récurrents, sans engagement long terme.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">Proximité</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Collaboration étroite avec vos équipes, compréhension de votre culture d'entreprise.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">Pragmatisme</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Solutions concrètes alignées avec vos objectifs business et vos contraintes opérationnelles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processus de collaboration */}
            <Card className="bg-gradient-accent rounded-lg mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
                  Processus de collaboration
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                      1
                    </div>
                    <h3 className="font-semibold text-primary mb-3">Écoute et analyse</h3>
                    <p className="text-sm text-muted-foreground">Compréhension de vos besoins et enjeux spécifiques</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                      2
                    </div>
                    <h3 className="font-semibold text-primary mb-3">Proposition sur-mesure</h3>
                    <p className="text-sm text-muted-foreground">Définition du périmètre d'intervention et des modalités</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                      3
                    </div>
                    <h3 className="font-semibold text-primary mb-3">Mise en œuvre</h3>
                    <p className="text-sm text-muted-foreground">Exécution de la mission en collaboration avec vos équipes</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                      4
                    </div>
                    <h3 className="font-semibold text-primary mb-3">Suivi et ajustement</h3>
                    <p className="text-sm text-muted-foreground">Adaptation continue selon l'évolution de vos besoins</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secteurs d'intervention */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
                  Secteurs d'intervention
                </h2>
                <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                  Fort de mon expérience en entreprise, j'interviens dans des secteurs variés
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <h3 className="font-semibold text-primary mb-2">Textile et Mode</h3>
                    <p className="text-sm text-muted-foreground">Distribution, e-commerce, licences</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <h3 className="font-semibold text-primary mb-2">Restauration</h3>
                    <p className="text-sm text-muted-foreground">Franchises, baux commerciaux</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <h3 className="font-semibold text-primary mb-2">Cinéma et Loisirs</h3>
                    <p className="text-sm text-muted-foreground">Exploitation, partenariats</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent rounded-lg text-center">
                    <h3 className="font-semibold text-primary mb-2">Sport et Bien-être</h3>
                    <p className="text-sm text-muted-foreground">Réseaux, abonnements</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <CardContent className="p-12 text-center">
                <h2 className="font-serif text-3xl font-bold mb-6">
                  Besoin d'un accompagnement juridique externalisé ?
                </h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Discutons de vos besoins pour définir ensemble la solution la plus adaptée à votre entreprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+33685353781" 
                    className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 inline-block"
                  >
                    Appeler maintenant
                  </a>
                  <a 
                    href="mailto:haia.elzufari@audestya-avocat.com" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-block"
                  >
                    Envoyer un email
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccompagnementJuridique;