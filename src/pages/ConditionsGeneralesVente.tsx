import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const ConditionsGeneralesVente = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Conditions Générales de Vente
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Préambule */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Préambule
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Les présentes conditions générales de vente (ci-après « CGV ») régissent les relations contractuelles entre 
                    Maître Haia El Zufari, avocat au Barreau de Paris (ci-après « l'Avocat »), et ses clients (ci-après « le Client ») 
                    dans le cadre de la fourniture de services juridiques.
                  </p>
                  <p>
                    Toute prestation de services juridiques implique l'acceptation pleine et entière des présentes CGV, 
                    sauf dérogation expresse convenue par écrit dans la convention d'honoraires.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 1. Identification */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  1. Identification de l'Avocat
                </h2>
                <div className="space-y-2 text-muted-foreground text-justify">
                  <p><strong className="text-primary">Nom :</strong> Haia El Zufari</p>
                  <p><strong className="text-primary">Profession :</strong> Avocat au Barreau de Paris</p>
                  <p><strong className="text-primary">Statut :</strong> Entrepreneur individuel</p>
                  <p><strong className="text-primary">Numéro SIREN :</strong> 943 937 789</p>
                  <p><strong className="text-primary">Numéro de TVA intracommunautaire :</strong> FR 35 943 937 789</p>
                  <p><strong className="text-primary">Adresse :</strong> 2 rue de Poissy - 75005 Paris - France</p>
                  <p><strong className="text-primary">Téléphone :</strong> +33 6 85 37 81 80</p>
                  <p><strong className="text-primary">Email :</strong> haia.elzufari@audestya-avocat.com</p>
                </div>
              </CardContent>
            </Card>

            {/* 2. Objet et champ d'application */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  2. Objet et champ d'application
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Les présentes CGV s'appliquent à toutes les prestations de services juridiques fournies par l'Avocat, 
                    notamment :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Consultations juridiques</li>
                    <li>• Rédaction d'actes et de contrats</li>
                    <li>• Accompagnement juridique</li>
                    <li>• Représentation et assistance devant les juridictions</li>
                    <li>• Négociation et médiation</li>
                    <li>• Formation juridique</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 3. Formation du contrat */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  3. Formation du contrat
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    La relation contractuelle est formalisée par la signature d'une convention d'honoraires conforme 
                    aux dispositions de l'article 10 de la loi n° 71-1130 du 31 décembre 1971.
                  </p>
                  <p>
                    Cette convention précise notamment :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• L'objet et l'étendue de la mission</li>
                    <li>• Les modalités de rémunération</li>
                    <li>• Les conditions d'exécution de la prestation</li>
                    <li>• Les délais prévisionnels</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 4. Honoraires et modalités de paiement */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  4. Honoraires et modalités de paiement
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <h3 className="font-semibold text-primary text-xl mb-3">4.1. Fixation des honoraires</h3>
                  <p>
                    Les honoraires sont librement fixés en accord avec le Client, en tenant compte de la complexité du dossier, 
                    du temps consacré, de la situation de fortune du Client et du résultat obtenu.
                  </p>
                  
                  <h3 className="font-semibold text-primary text-xl mb-3 mt-6">4.2. Modalités de règlement</h3>
                  <p>
                    Les honoraires sont payables selon les modalités définies dans la convention d'honoraires :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Provision sur honoraires à verser avant le début de la mission</li>
                    <li>• Règlement à réception de facture (délai de paiement : 30 jours)</li>
                    <li>• Paiement par virement bancaire, chèque ou espèces (dans la limite légale)</li>
                  </ul>
                  
                  <h3 className="font-semibold text-primary text-xl mb-3 mt-6">4.3. Retard de paiement</h3>
                  <p>
                    En cas de retard de paiement, des pénalités de retard au taux de trois fois le taux d'intérêt légal 
                    seront appliquées, ainsi qu'une indemnité forfaitaire de 40 euros pour frais de recouvrement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 5. Obligations de l'Avocat */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  5. Obligations de l'Avocat
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>L'Avocat s'engage à :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Respecter les règles déontologiques de la profession d'avocat</li>
                    <li>• Assurer la confidentialité et le secret professionnel</li>
                    <li>• Apporter les soins attentifs, consciencieux et diligents conformes aux usages de la profession</li>
                    <li>• Tenir le Client informé du déroulement de sa mission</li>
                    <li>• Respecter les délais convenus dans la mesure du possible</li>
                    <li>• Conseiller le Client en toute indépendance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 6. Obligations du Client */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  6. Obligations du Client
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Le Client s'engage à :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Fournir tous les documents et informations nécessaires à l'exécution de la mission</li>
                    <li>• Communiquer des informations exactes et complètes</li>
                    <li>• Respecter les échéances de paiement convenues</li>
                    <li>• Informer l'Avocat de tout changement susceptible d'affecter la mission</li>
                    <li>• Respecter les conseils et recommandations de l'Avocat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 7. Responsabilité et assurance */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  7. Responsabilité et assurance
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    L'Avocat est assuré au titre de sa responsabilité civile professionnelle conformément aux dispositions 
                    réglementaires en vigueur.
                  </p>
                  <p>
                    La responsabilité de l'Avocat ne peut être engagée qu'en cas de faute professionnelle dûment établie 
                    dans l'exécution de la mission qui lui a été confiée.
                  </p>
                  <p>
                    L'obligation de l'Avocat est une obligation de moyens et non de résultat, sauf engagement exprès contraire.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 8. Propriété intellectuelle */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  8. Propriété intellectuelle
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Les consultations, études, mémoires et tout travail intellectuel réalisés par l'Avocat demeurent 
                    sa propriété intellectuelle.
                  </p>
                  <p>
                    Le Client bénéficie d'un droit d'usage de ces travaux dans le cadre strict de la mission confiée.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 9. Résiliation */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  9. Résiliation
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Conformément aux dispositions de l'article 411 du décret n° 2005-790 du 12 juillet 2005, 
                    l'Avocat peut se décharger de sa mission dans les cas prévus par la réglementation professionnelle.
                  </p>
                  <p>
                    Le Client peut également mettre fin à la mission à tout moment. Dans ce cas, l'Avocat conserve 
                    le droit au paiement des honoraires correspondant aux prestations déjà accomplies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 10. Règlement des différends */}
            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  10. Règlement des différends
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    En cas de différend relatif aux conditions d'exécution de la prestation ou au montant des honoraires, 
                    les parties s'efforcent de trouver une solution amiable.
                  </p>
                  <p>
                    À défaut, le Client peut saisir le Bâtonnier de l'Ordre des avocats du Barreau de Paris aux fins de 
                    conciliation ou d'arbitrage.
                  </p>
                  <p>
                    En dernier recours, tout litige relève de la compétence exclusive des tribunaux de Paris, 
                    nonobstant pluralité de défendeurs ou appel en garantie.
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

export default ConditionsGeneralesVente;