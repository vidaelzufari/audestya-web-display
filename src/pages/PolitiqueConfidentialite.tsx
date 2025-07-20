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
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    La présente politique (ci-après « Politique ») a pour objet de vous donner plus de visibilité sur le traitement 
                    de vos données à caractère personnel (ci-après « Données »). Il est rappelé que conformément à la réglementation 
                    en vigueur, une Donnée est toute information relative à une personne physique susceptible d'être identifiée, 
                    directement ou indirectement.
                  </p>
                  <p>
                    <strong className="text-primary">La présente politique s'applique :</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Aux clients, prospects ou tout autre contact externe</li>
                    <li>• Aux visiteurs du site www.audestya-avocat.com (ci-après le « Site »)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 1. Responsable de traitement */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  1. Qui est le responsable de traitement ?
                </h2>
                <div className="space-y-2 text-muted-foreground text-justify">
                  <p><strong className="text-primary">Haia El Zufari</strong></p>
                  <p>Avocat au Barreau de Paris</p>
                  <p>Entrepreneur individuel</p>
                  <p>Numéro SIREN : 943 937 789</p>
                </div>
              </CardContent>
            </Card>

            {/* 2. Comment les données sont collectées */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  2. Comment les Données sont-elles collectées ?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Je suis amenée à collecter des Données :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Lorsque vous êtes un prospect ou un client potentiel et vous me contactez directement pour demander des informations ou des conseils ou via le formulaire contact du Site ;</li>
                     <li>• Lorsque vous êtes client, notamment dans le cadre de la conclusion de la convention d'honoraires et l'exécution des missions confiées par ledit client et de tout échange y afférent ;</li>
                     <li>• Lorsque vous êtes un partenaire (experts, prestataires, confrères, etc.), avec qui je suis amenée à collaborer, dans le cadre de l'exécution de mes missions et de mon activité et de tout échange y afférent ;</li>
                    <li>• Lorsque vous naviguez sur mon Site via les cookies et autres traceurs.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 3. Données collectées */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  3. Quelles sont les Données collectées ?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Je collecte et traite notamment :</p>
                  <ul className="space-y-3 ml-4">
                    <li>• <strong className="text-primary">Lors de la prise de contact</strong>, des Données d'identification prospect ou client potentiel qui demande des informations : les données nécessaires à la prise de contact notamment nom, prénom, adresse électronique, numéro de téléphone ;</li>
                    <li>• <strong className="text-primary">Dans le cadre de l'exécution de ma mission</strong> : les Données d'identification des clients (y compris de leurs salariés, représentants, et/ou dirigeants) ainsi que toute Donnée nécessaire à l'exécution de la mission notamment vos nom, prénom, adresse, adresse email, numéro de téléphone, coordonnées bancaires, date de naissance, etc. ;</li>
                    <li>• <strong className="text-primary">Les Données de navigation</strong> des visiteurs du Site : notamment adresse IP, données de navigation.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 4. Finalités */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  4. Pour quelles finalités sont collectées vos Données
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Vos Données peuvent être traitées pour les finalités suivantes :</p>
                  <ul className="space-y-3 ml-4">
                    <li>• <strong className="text-primary">Si vous êtes un prospect ou un client potentiel</strong> : Vos Données sont traitées à des fins de traitement des demandes : répondre à vos questions.</li>
                    <li>• <strong className="text-primary">Si vous êtes un client</strong> : Vos Données sont traitées à des fins (i) d'exécution de la relation contractuelle, (ii) de respect de mes obligations légales (comptables et fiscales ainsi que des règles professionnelles) : traitement des demandes, exécution des missions, gestion de la convention d'honoraires et des factures, gestion de la comptabilité et plus généralement suivi de la relation contractuelle.</li>
                    <li>• <strong className="text-primary">Si vous êtes un partenaire</strong> (experts, prestataires, confrères, etc.) : Vos Données sont traitées à des fins (i) de gestion de mon activité ; (ii) d'exécution d'une relation contractuelle avec un client et (iii) de respect de mes obligations légales (comptables et fiscales ainsi que des règles professionnelles) : traitement des demandes, exécution des missions, gestion du contrat et des factures, de gestion de la comptabilité et plus généralement pour le suivi de la gestion d'activité ou de la relation contractuelle.</li>
                    <li>• <strong className="text-primary">Si vous naviguez sur le Site</strong> : Vos Données sont traitées à des fins (i) d'analyse du trafic du Site et (ii) de navigation sur le Site.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 5. Partage des données */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  5. Avec qui sont partagées vos Données ?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Dans la limite des finalités et des traitements définis à l'article 4, je pourrai être amenée à partager vos Données :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Avec des partenaires avec votre consentement explicite.</li>
                    <li>• Avec des prestataires techniques : notamment hébergeur, prestataire de services informatiques, dans le cadre de l'exécution des services.</li>
                    <li>• Aux autorités compétentes lorsqu'une telle communication est réclamée dans le cadre d'une procédure judiciaire ou administrative engagée.</li>
                    <li>• Pour respecter mes obligations légales, ou pour protéger les droits, l'intégrité physique ou la sûreté des personnes.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 6. Durée de conservation */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  6. Quelle est la durée de conservation de vos Données ?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Pour les clients et les partenaires, les Données sont conservées pendant toute la durée de la relation contractuelle 
                    puis pendant toute la durée de prescription légale (soit cinq (5) ans) qui court à compter du dernier échange avec 
                    la personne concernée.
                  </p>
                  <p>
                    Les Données nécessaires à la comptabilité sont, quant à elles, conservées pendant une durée de 10 ans au total 
                    pour respecter les obligations comptables et fiscales applicables.
                  </p>
                  <p>
                    Les Données des prospects et des clients potentiels sont conservées pendant une durée de 3 ans suivant le dernier 
                    contact établi avec la personne concernée.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 7. Transfert UE */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  7. Vos Données sont-elles transférées en dehors de l'Union Européenne ?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Les Données sont hébergées au sein de l'Union Européenne et ne font l'objet d'aucun transfert en dehors 
                  de l'Union Européenne.
                </p>
              </CardContent>
            </Card>

            {/* 8. Vos droits */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  8. Quels sont vos droits
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
                  <ul className="space-y-3 ml-4">
                    <li>• <strong className="text-primary">Le droit d'accès</strong> : Vous avez le droit d'obtenir (i) la confirmation que des Données vous concernant sont ou ne sont pas traitées et, lorsqu'elles le sont, d'obtenir (ii) l'accès auxdites Données et une copie de ces dernières.</li>
                    <li>• <strong className="text-primary">Le droit de rectification</strong> : Vous avez le droit d'obtenir la rectification des Données vous concernant qui sont inexactes ou incomplètes.</li>
                    <li>• <strong className="text-primary">Le droit à l'effacement</strong> : Vous avez le droit d'obtenir l'effacement de vos Données. Je me réserve néanmoins la possibilité pour des raisons légales ou légitimes de conserver ces Données.</li>
                    <li>• <strong className="text-primary">Le droit à la limitation du traitement</strong> : Dans certains cas, vous avez le droit d'obtenir la limitation du traitement de vos Données.</li>
                    <li>• <strong className="text-primary">Le droit à la portabilité</strong> : vous pouvez demander à recevoir vos Données vous concernant dans un format structuré, couramment utilisé et lisible par machine.</li>
                    <li>• <strong className="text-primary">Le droit d'opposition</strong> : Vous avez le droit de vous opposer à tout moment, pour des raisons tenant à votre situation particulière, à un traitement de Données vous concernant lorsque vos intérêts ou libertés et droits fondamentaux exigent une protection. Je me réserve néanmoins la possibilité d'invoquer des motifs légitimes et impérieux nécessitant la poursuite du traitement. Il en va de même aux fins de constatation, d'exercice ou de défense de droits en justice.</li>
                  </ul>
                  <p className="mt-6">
                    Pour exercer ces droits, vous pouvez adresser une demande, par email à : 
                    <a href="mailto:dp@audestya-avocat.com" className="text-primary hover:text-secondary ml-1">
                      dp@audestya-avocat.com
                    </a>
                  </p>
                  <p>
                     En cas de difficulté en lien avec la gestion des Données, vous pouvez adresser une réclamation auprès des autorités 
                     compétentes et notamment la CNIL via :
                     <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary ml-1">
                       https://www.cnil.fr/fr/plaintes
                     </a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 9. Cookies */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  9. Cookies (traceurs)
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Le Site utilise des cookies, petits fichiers textes déposés sur votre ordinateur lors de la visite d'un site internet.
                  </p>
                  <p>Les cookies utilisés par le Site me permettent de :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong className="text-primary">Cookies indispensables</strong> : pour afficher le Site.</li>
                    <li>• <strong className="text-primary">Cookies de mesure d'audience</strong> : pour analyser le trafic sur le Site.</li>
                  </ul>
                  <p>
                    Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Vous pouvez modifier votre choix à tout moment.
                  </p>
                  <p>
                    Pour en savoir plus et gérer vos cookies, consultez la 
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary ml-1">
                      CNIL
                    </a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 10. Contact */}
            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  10. Contact
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Pour toute question relative à la présente politique de confidentialité ou pour toute demande relative à vos Données, 
                    vous pouvez me contacter en :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Adressant un message via le formulaire Contact du Site</li>
                    <li>• Ou en adressant un email à 
                      <a href="mailto:dp@audestya-avocat.com" className="text-primary hover:text-secondary ml-1">
                        dp@audestya-avocat.com
                      </a>
                    </li>
                  </ul>
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