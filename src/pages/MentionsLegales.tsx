import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl opacity-90">
              Informations légales et éditoriales du cabinet Audestya Avocat
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Identification */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Identification
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-primary">Dénomination :</strong> Cabinet Audestya Avocat</p>
                  <p><strong className="text-primary">Forme juridique :</strong> Profession libérale - Avocat au Barreau de Paris</p>
                  <p><strong className="text-primary">Titulaire :</strong> Maître Haïa EL ZUFARI</p>
                  <p><strong className="text-primary">Email :</strong> haia.elzufari@audestya-avocat.com</p>
                  <p><strong className="text-primary">Téléphone :</strong> +33 6 85 35 37 81</p>
                </div>
              </CardContent>
            </Card>

            {/* Informations professionnelles */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Informations professionnelles
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-primary">Profession :</strong> Avocat</p>
                  <p><strong className="text-primary">Barreau :</strong> Barreau de Paris</p>
                  <p><strong className="text-primary">Autorité de contrôle :</strong> Conseil National des Barreaux (CNB)</p>
                  <p><strong className="text-primary">Règles professionnelles applicables :</strong> Code de déontologie des avocats</p>
                  <p><strong className="text-primary">Assurance responsabilité civile professionnelle :</strong> Souscrite conformément aux dispositions légales</p>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Hébergement du site
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-primary">Hébergeur :</strong> Lovable</p>
                  <p><strong className="text-primary">Plateforme :</strong> lovable.dev</p>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Propriété intellectuelle
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, sons, logiciels) 
                    sont la propriété exclusive du Cabinet Audestya Avocat, à l'exception des marques, logos ou contenus 
                    appartenant à d'autres sociétés partenaires ou auteurs.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                    du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Données personnelles */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Protection des données personnelles
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", 
                    vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles.
                  </p>
                  <p>
                    Pour exercer ces droits ou pour toute question relative au traitement de vos données personnelles, 
                    vous pouvez nous contacter à l'adresse : haia.elzufari@audestya-avocat.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Avertissement
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Les informations contenues sur ce site sont données à titre informatif et ne constituent pas un conseil juridique. 
                    Seule une consultation personnalisée peut permettre d'analyser votre situation particulière.
                  </p>
                  <p>
                    Le Cabinet Audestya Avocat ne saurait être tenu responsable de l'usage qui pourrait être fait des informations 
                    contenues sur ce site.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;