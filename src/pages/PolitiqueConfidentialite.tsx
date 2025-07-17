import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-xl opacity-90">
              Protection et traitement de vos données personnelles
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
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Préambule
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Le cabinet d'avocat Audestya, représenté par Maître Haia El Zufari, s'engage à protéger la confidentialité 
                    et la sécurité des données personnelles de ses clients et visiteurs de son site web.
                  </p>
                  <p>
                    Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons 
                    vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) 
                    et à la loi "Informatique et Libertés".
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Responsable du traitement */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Responsable du traitement
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-primary">Nom :</strong> Haia El Zufari</p>
                  <p><strong className="text-primary">Qualité :</strong> Avocat au Barreau de Paris</p>
                  <p><strong className="text-primary">Adresse :</strong> 2 rue de Poissy - 75005 Paris - France</p>
                  <p><strong className="text-primary">Email :</strong> haia.elzufari@audestya-avocat.com</p>
                  <p><strong className="text-primary">Téléphone :</strong> +33 6 85 37 81 80</p>
                </div>
              </CardContent>
            </Card>

            {/* Données collectées */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Données personnelles collectées
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-primary text-xl mb-3">Lors de votre visite sur le site :</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Données de navigation (adresse IP, navigateur, pages visitées)</li>
                      <li>• Données de connexion (date et heure de visite)</li>
                      <li>• Cookies techniques nécessaires au fonctionnement du site</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary text-xl mb-3">Lors de votre prise de contact :</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Nom et prénom</li>
                      <li>• Adresse email</li>
                      <li>• Numéro de téléphone</li>
                      <li>• Objet et contenu de votre demande</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Finalités du traitement */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Finalités du traitement
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Répondre à vos demandes d'information</li>
                    <li>• Établir un premier contact en vue d'une consultation</li>
                    <li>• Vous recontacter dans le cadre de votre demande</li>
                    <li>• Assurer le bon fonctionnement et la sécurité du site web</li>
                    <li>• Respecter nos obligations légales et déontologiques</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Base légale */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Base légale du traitement
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Le traitement de vos données personnelles est fondé sur :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Votre consentement pour la prise de contact</li>
                    <li>• L'intérêt légitime pour la sécurité du site</li>
                    <li>• Les obligations légales du cabinet d'avocat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Conservation des données */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Conservation des données
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Vos données personnelles sont conservées pendant les durées suivantes :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Demandes de contact : 3 ans à compter du dernier contact</li>
                    <li>• Données de navigation : 13 mois maximum</li>
                    <li>• Dossiers clients : conformément aux obligations déontologiques de l'avocat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Droits des personnes */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Vos droits
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong className="text-primary">Droit d'accès :</strong> connaître les données vous concernant</li>
                    <li>• <strong className="text-primary">Droit de rectification :</strong> corriger vos données inexactes</li>
                    <li>• <strong className="text-primary">Droit d'effacement :</strong> demander la suppression de vos données</li>
                    <li>• <strong className="text-primary">Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                    <li>• <strong className="text-primary">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                    <li>• <strong className="text-primary">Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  </ul>
                  <p className="mt-6">
                    Pour exercer ces droits, contactez-nous à l'adresse : 
                    <a href="mailto:haia.elzufari@audestya-avocat.com" className="text-primary hover:text-secondary ml-1">
                      haia.elzufari@audestya-avocat.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sécurité */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Sécurité des données
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                    vos données personnelles contre :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• La destruction accidentelle ou illicite</li>
                    <li>• La perte accidentelle</li>
                    <li>• L'altération, la diffusion ou l'accès non autorisé</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact et réclamation */}
            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Contact et réclamation
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits, 
                    contactez-nous :
                  </p>
                  <p>
                    <strong className="text-primary">Email :</strong> haia.elzufari@audestya-avocat.com<br/>
                    <strong className="text-primary">Téléphone :</strong> +33 6 85 37 81 80
                  </p>
                  <p>
                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                    auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : 
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary ml-1">
                      www.cnil.fr
                    </a>
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

export default PolitiqueConfidentialite;