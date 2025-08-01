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
              Traitement et protection de vos données personnelles
            </p>
            <p className="text-xl opacity-90">
              Traitement et protection de vos données personnelles
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
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    <strong className="text-primary">La présente politique s'applique :</strong>
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
                    <li>• Lorsque vous êtes un prospect ou un client potentiel et que vous me contactez directement ou via le formulaire de contact du Site pour demander des informations ou des conseils ;</li>
                    <li>• Lorsque vous êtes client, notamment dans le cadre de la conclusion de la convention d'honoraires et de l'exécution des missions confiées et de tout échange y afférent ;</li>
                    <li>• Lorsque vous êtes un partenaire (expert, prestataire, confrère, etc.) avec qui je suis amenée à collaborer, dans le cadre de mon activité et des missions confiées ;</li>
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
                    <li>• <strong className="text-primary">Lors de la prise de contact</strong> : des Données d'identification du prospect ou du client potentiel qui demande des informations : les données nécessaires à la prise de contact, telles que le nom, le prénom, l'adresse électronique, le numéro de téléphone.</li>
                    <li>• <strong className="text-primary">Dans le cadre de l'exécution de ma mission</strong> : des Données d'identification des clients (y compris leurs salariés, représentants ou dirigeants) ainsi que les Données nécessaires à l'exécution de la mission, telles que le nom, le prénom, l'adresse, l'adresse électronique, le numéro de téléphone, les coordonnées bancaires, la date de naissance.</li>
                    <li>• <strong className="text-primary">Les Données de navigation</strong> des visiteurs du Site : telles que l'adresse IP et les données de navigation.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 4. Finalités */}
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  4. Pour quelles finalités sont collectées vos Données ?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Vos Données peuvent être traitées pour les finalités suivantes :</p>
                  <ul className="space-y-3 ml-4">
                    <li>• <strong className="text-primary">Si vous êtes un prospect ou un client potentiel</strong> : pour répondre à vos demandes d'information ou de prise de contact.</li>
                    <li>• <strong className="text-primary">Si vous êtes un client</strong> : pour (i) l'exécution de la relation contractuelle, (ii) le respect de mes obligations légales (comptables et fiscales ainsi que des règles professionnelles) : notamment pour le traitement des demandes, l'exécution des missions, la gestion de la convention d'honoraires, des factures, de la comptabilité et plus généralement le suivi de la relation contractuelle.</li>
                    <li>• <strong className="text-primary">Si vous êtes un partenaire</strong> (expert, prestataire, confrère, etc.) : pour (i) la gestion de mon activité ; (ii) l'exécution d'une relation contractuelle avec un client et (iii) le respect de mes obligations légales (comptables et fiscales ainsi que des règles professionnelles) : notamment pour le traitement des demandes, l'exécution des missions, la gestion du contrat, des factures, de la comptabilité et plus généralement pour le suivi de la gestion de l'activité ou de la relation contractuelle.</li>
                    <li>• <strong className="text-primary">Si vous naviguez sur le Site</strong> : pour (i) analyser le trafic du Site et (ii) faciliter la navigation.</li>
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
                    <li>• Avec des prestataires techniques : notamment hébergeur, prestataires informatiques, dans le cadre de l'exécution de mes services et l'exercice de mon activité.</li>
                    <li>• Aux autorités compétentes lorsqu'une telle communication est réclamée dans le cadre d'une procédure judiciaire ou administrative engagée.</li>
                    <li>• Vos Données peuvent également être partagées pour respecter mes obligations légales, ou pour protéger les droits, l'intégrité physique ou encore la sécurité ou la sûreté des personnes.</li>
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
                    puis pendant toute la durée de prescription légale, soit cinq (5) ans, qui court à compter du dernier échange avec 
                    la personne concernée.
                  </p>
                  <p>
                    Les Données nécessaires à la comptabilité sont, quant à elles, conservées pendant la durée légale de conservation, soit dix (10) ans, 
                    pour respecter les obligations comptables et fiscales applicables.
                  </p>
                  <p>
                    Les Données des prospects et des clients potentiels sont conservées pendant une durée de trois (3) ans suivant le dernier 
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
                  8. Quels sont vos droits ?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
                  <ul className="space-y-3 ml-4">
                    <li>• <strong className="text-primary">Le droit d'accès</strong> : Vous avez le droit (i) d'obtenir la confirmation que des Données vous concernant sont ou ne sont pas traitées et, lorsqu'elles le sont, (ii) d'obtenir l'accès auxdites Données et une copie de ces dernières.</li>
                    <li>• <strong className="text-primary">Le droit de rectification</strong> : Vous avez le droit d'obtenir la rectification des Données vous concernant qui sont inexactes ou incomplètes.</li>
                    <li>• <strong className="text-primary">Le droit à l'effacement</strong> : Vous avez le droit d'obtenir l'effacement de vos Données. Je me réserve néanmoins la possibilité pour des raisons légales ou légitimes de conserver ces Données.</li>
                    <li>• <strong className="text-primary">Le droit à la limitation du traitement</strong> : Dans certains cas, vous avez le droit d'obtenir la limitation du traitement de vos Données.</li>
                    <li>• <strong className="text-primary">Le droit à la portabilité</strong> : Vous pouvez demander à recevoir vos Données vous concernant dans un format structuré, couramment utilisé et lisible par machine.</li>
                    <li>• <strong className="text-primary">Le droit d'opposition</strong> : Vous avez le droit de vous opposer à tout moment, pour des raisons tenant à votre situation particulière, à un traitement de Données vous concernant lorsque vos intérêts ou libertés et droits fondamentaux exigent une protection. Je me réserve néanmoins la possibilité d'invoquer des motifs légitimes et impérieux nécessitant la poursuite du traitement. Il en va de même aux fins de constatation, d'exercice ou de défense de droits en justice.</li>
                  </ul>
                  <p className="mt-6">
                    Pour exercer ces droits, vous pouvez adresser une demande, par courriel à :
                    <a href="mailto:dp@audestya-avocat.com" className="text-primary hover:text-secondary ml-1">
                      dp@audestya-avocat.com
                    </a>
                  </p>
                  <p>
                    En cas de difficulté en lien avec la gestion des Données, vous pouvez adresser une réclamation auprès des autorités 
                    compétentes et notamment la CNIL via
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
                  <p>Les cookies utilisés par le Site permettent notamment :</p>
                  <ul className="space-y-2 ml-4">
                    <li>• D'afficher le Site : <strong className="text-primary">Cookies strictement nécessaires</strong>.</li>
                    <li>• D'analyser le trafic sur le Site : <strong className="text-primary">Cookies de mesure d'audience</strong>.</li>
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
                    vous pouvez me contacter en envoyant :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• un message via le formulaire de contact du Site ;</li>
                    <li>• ou un courriel à
                      <a href="mailto:dp@audestya-avocat.com" className="text-primary hover:text-secondary ml-1">
                        dp@audestya-avocat.com
                      </a>.
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
  )
}