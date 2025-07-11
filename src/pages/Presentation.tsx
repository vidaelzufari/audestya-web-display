import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Award, Users, Target } from 'lucide-react';
import lawyerPortrait from '@/assets/lawyer-portrait.jpg';

const Presentation = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Présentation
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Découvrez mon parcours, ma vision et mon approche pour vous accompagner dans vos enjeux juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-serif text-4xl font-bold text-primary mb-8">
                      Bio
                    </h2>
                    
                    <div className="space-y-6 text-lg text-muted-foreground">
                      <p className="leading-relaxed">
                        Après de plus de quinze années d'expérience en entreprise, d'abord comme juriste, puis comme directrice juridique, j'ai choisi d'exercer en toute indépendance pour mettre mon expertise au service des entreprises.
                      </p>
                      
                      <div className="space-y-4">
                        <p className="text-primary font-semibold">Ce choix repose sur :</p>
                        <div className="pl-4 border-l-4 border-secondary space-y-3">
                          <p><strong>– Une conviction forte :</strong> le droit est un levier de structuration, de sécurisation et de création de valeur, lorsqu'il est compris, bien appliqué, et aligné avec la réalité opérationnelle de l'entreprise ;</p>
                          <p><strong>– Une ambition claire :</strong> accompagner les entreprises différemment, en m'appuyant sur ma connaissance de leurs enjeux internes.</p>
                        </div>
                      </div>
                      
                      <p className="leading-relaxed">
                        J'ai évolué, au sein d'ETI en croissance ou en transformation, dans des secteurs aussi divers que le textile, la restauration, l'exploitation cinématographique ou encore l'exploitation de salles de sport. Cette diversité m'a permis de développer une vision transversale et stratégique du droit, ainsi qu'une capacité à dialoguer avec les directions générales comme avec les équipes opérationnelles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant">
                      <img 
                        src={lawyerPortrait} 
                        alt="Portrait de Haïa El Zufari" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formation et Qualifications */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-background shadow-soft border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-secondary rounded-full">
                      <Award className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary">Formation</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-primary">Master II en droit européen des affaires</h4>
                      <p>Université Paris XI – Jean Monnet</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Maîtrise en droit européen</h4>
                      <p>Université Paris II – Panthéon Assas</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Maîtrise en droit international</h4>
                      <p>Université Paris II – Panthéon Assas</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-semibold text-primary mb-2">Inscription au Barreau</h4>
                    <p className="text-muted-foreground">Paris 2025</p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-primary mb-2">Langues</h4>
                    <p className="text-muted-foreground">Français – Anglais – Arabe</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background shadow-soft border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-secondary rounded-full">
                      <Target className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary">Domaines d'intervention</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-primary text-lg mb-2">Distribution</h4>
                      <p>Structuration de réseaux, franchise, concession, licence de marque</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg mb-2">Contrats</h4>
                      <p>Négociation, rédaction, sécurisation contractuelle</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg mb-2">Consommation</h4>
                      <p>Protection du consommateur, pratiques commerciales, e-commerce</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ma Mission */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant mb-16">
              <CardContent className="p-12 text-center">
                <h2 className="font-serif text-4xl font-bold mb-8">Ma Mission</h2>
                <div className="space-y-6 text-lg opacity-90 max-w-4xl mx-auto">
                  <p>
                    Accompagner les entreprises dans la structuration et la sécurisation juridique de leur activité avec une vision claire et porteuse de sens.
                  </p>
                  <p className="text-xl font-medium">
                    Mon objectif : faire du droit un véritable allié de leur développement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ma Vision */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">Ma Vision</h2>
                
                <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
                  <p className="text-xl text-primary font-semibold">
                    <strong>Audestya</strong> est née d'un choix audacieux : sortir de ma zone de confort, reprendre mon destin professionnel en main.
                  </p>
                  
                  <p>Ce nom symbolise une conviction profonde :</p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <p className="font-medium text-primary">Oser prendre sa place</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <p className="font-medium text-primary">Se réinventer quand tout semble figé</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <p className="font-medium text-primary">Croire que la maîtrise juridique est un levier de transformation</p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-primary font-medium mt-8">
                    C'est cette énergie que je souhaite transmettre à mes clients.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mes Valeurs */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">Mes Valeurs</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">Authenticité</h3>
                    <p className="text-muted-foreground">Une relation simple, directe, sans jargon inutile.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">Confiance</h3>
                    <p className="text-muted-foreground">Un engagement loyal et transparent.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">Proximité</h3>
                    <p className="text-muted-foreground">Une compréhension fine de votre réalité et de vos besoins.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">Excellence</h3>
                    <p className="text-muted-foreground">Une exigence constante dans la qualité des prestations et des conseils.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mon Approche */}
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">Mon Approche</h2>
                <p className="text-xl text-center text-muted-foreground mb-12">
                  Mon accompagnement s'appuie sur trois piliers
                </p>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-12 h-12 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">Une expertise confirmée</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mon parcours en entreprise m'a permis de développer une solide culture business, une compréhension fine des enjeux métiers et une capacité à dialoguer avec les directions générales, les directions juridiques qu'avec les équipes opérationnelles.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-12 h-12 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">Une approche pragmatique</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Je ne me contente pas de vous exposer des règles de droit, je les mets en perspective avec votre environnement, vos objectifs et vos contraintes, pour vous apporter des solutions concrètes.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-12 h-12 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">Une relation de confiance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Je m'investis avec loyauté, clarté et exigence. Je vous informe en toute transparence lorsque vos besoins sortent de mon domaine de compétence, et je m'attache à construire avec vous une relation de proximité, fondée sur l'écoute et l'anticipation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">Contact</h2>
                
                <form className="max-w-2xl mx-auto space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-primary font-medium">
                        Prénom *
                      </Label>
                      <Input 
                        id="firstName" 
                        placeholder="Votre prénom"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-primary font-medium">
                        Nom *
                      </Label>
                      <Input 
                        id="lastName" 
                        placeholder="Votre nom"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary font-medium">
                      E-mail *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-primary font-medium">
                      Objet *
                    </Label>
                    <Input 
                      id="subject" 
                      placeholder="Objet de votre message"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-medium">
                      Message *
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Votre message..."
                      rows={6}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                  >
                    Envoyer le message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;