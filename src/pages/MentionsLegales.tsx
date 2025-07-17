import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
            
            {/* Introduction */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Le site www.Audestya-avocat.com est désigné ci-après par le « Site ».
                </p>
              </CardContent>
            </Card>

            {/* Éditeur du Site */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Éditeur du Site
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-primary">Nom :</strong> Haia El Zufari</p>
                  <p><strong className="text-primary">Profession :</strong> Avocat au Barreau de Paris</p>
                  <p><strong className="text-primary">Statut :</strong> Entrepreneur individuel – Profession libérale réglementée</p>
                  <p><strong className="text-primary">Numéro SIREN :</strong> 943 937 789</p>
                  <p><strong className="text-primary">Numéro de TVA intracommunautaire :</strong> FR 35 943 937 789</p>
                  <p><strong className="text-primary">Téléphone :</strong> +33 6 85 37 81 80</p>
                  <p><strong className="text-primary">Email :</strong> haia.elzufari@audestya-avocat.com</p>
                  <p><strong className="text-primary">Adresse postale :</strong> 2 rue de Poissy - 75005 Paris - France</p>
                </div>
              </CardContent>
            </Card>

            {/* Hébergeur du Site */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Hébergeur du Site
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-primary">Société :</strong> Ionos SARL</p>
                  <p><strong className="text-primary">Numéro RCS :</strong> 431 303 775</p>
                  <p><strong className="text-primary">Adresse postale :</strong> 7, place de la Gare - BP 70109 - 57200 Sarreguemines – France</p>
                  <p><strong className="text-primary">Téléphone :</strong> +33 9 70 80 89 11</p>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Propriété intellectuelle
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Le contenu du Site (textes, images, logos, graphismes, etc.) est protégé par le droit de la propriété intellectuelle 
                    et est la propriété exclusive de Haia El Zufari, sauf mention contraire.
                  </p>
                  <p>
                    Toute reproduction ou utilisation, totale ou partielle, sans autorisation écrite préalable est interdite.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MentionsLegales;