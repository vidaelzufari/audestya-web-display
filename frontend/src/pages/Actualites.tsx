import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { LinkedInAuth } from '@/components/LinkedInAuth';
import { LinkedInPosts } from '@/components/LinkedInPosts';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LinkedInService } from '@/lib/linkedin-service';

const Actualites = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const linkedInService = LinkedInService.getInstance();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Check authentication status
    setIsAuthenticated(linkedInService.isAuthenticated());
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Actualités Juridiques
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            
            {/* LinkedIn Direct Feed Badge */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex items-center bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full border border-blue-200">
                <Linkedin className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  {isAuthenticated ? "Feed LinkedIn Connecté" : "Aperçu Actualités"}
                </span>
                <div className={`w-2 h-2 rounded-full ml-2 ${isAuthenticated ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* LinkedIn Feed Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Follow LinkedIn CTA */}
            <Card className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      Ne ratez aucune actualité juridique
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Suivez-moi sur LinkedIn pour recevoir toutes mes analyses en temps réel 
                      et interagir directement avec mes publications.
                    </p>
                    <div className="flex items-center text-sm text-blue-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      En ligne maintenant
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 ml-6"
                  >
                    <a 
                      href="https://www.linkedin.com/in/haiaelzufari" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Suivre sur LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview Posts - Always visible */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-primary">
                    Publications récentes
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Dernières analyses juridiques
                  </p>
                </div>
                
                {/* Static preview posts */}
                <div className="space-y-6">
                  <div className="border rounded-lg p-6 bg-card">
                    <div className="flex items-center mb-4">
                      <img
                        src="/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png"
                        alt="Haia El Zufari"
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">Haia El Zufari</p>
                        <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris | Droit de la Distribution</p>
                        <p className="text-xs text-muted-foreground">Il y a 2 jours</p>
                      </div>
                    </div>
                    <p className="text-foreground mb-4">
                      🚀 <strong>Nouvelle réglementation européenne sur les contrats de distribution : ce qu'il faut savoir</strong>
                      <br /><br />
                      La Commission européenne vient d'adopter de nouvelles directives qui impacteront significativement les réseaux de distribution en 2024.
                      <br /><br />
                      Points clés à retenir :
                      <br />✅ Renforcement de la protection des distributeurs
                      <br />✅ Nouvelles obligations de transparence
                      <br />✅ Délais de préavis étendus
                      <br /><br />
                      Une adaptation urgente des contrats existants s'impose. N'hésitez pas à me consulter pour une mise en conformité.
                      <br /><br />
                      #DroitDistribution #Reglementation #Franchise #ContratCommercial
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4 pt-3 border-t">
                      <span className="flex items-center"><span className="text-blue-600 mr-1">👍</span> 127</span>
                      <span className="flex items-center"><span className="mr-1">💬</span> 23 commentaires</span>
                      <span className="flex items-center"><span className="mr-1">🔄</span> 18 partages</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 bg-card">
                    <div className="flex items-center mb-4">
                      <img
                        src="/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png"
                        alt="Haia El Zufari"
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">Haia El Zufari</p>
                        <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris | Droit de la Distribution</p>
                        <p className="text-xs text-muted-foreground">Il y a 5 jours</p>
                      </div>
                    </div>
                    <p className="text-foreground mb-4">
                      ⚖️ <strong>Décision marquante de la Cour de Cassation : résiliation abusive de contrat de franchise</strong>
                      <br /><br />
                      La Chambre commerciale vient de rendre un arrêt important concernant les conditions de résiliation des contrats de franchise.
                      <br /><br />
                      Les faits :
                      <br />Un franchiseur avait résilié unilatéralement un contrat pour "mésentente", sans respecter la procédure contradictoire.
                      <br /><br />
                      La Cour rappelle que :
                      <br />🔹 La résiliation doit être justifiée par une cause réelle et sérieuse
                      <br />🔹 Le contradictoire doit être respecté
                      <br />🔹 Le préavis doit être raisonnable
                      <br /><br />
                      <strong>Dommages-intérêts : 350 000€ alloués au franchisé !</strong>
                      <br /><br />
                      #Jurisprudence #Franchise #DroitCommercial #CassationCommerciale
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4 pt-3 border-t">
                      <span className="flex items-center"><span className="text-blue-600 mr-1">👍</span> 89</span>
                      <span className="flex items-center"><span className="mr-1">💬</span> 15 commentaires</span>
                      <span className="flex items-center"><span className="mr-1">🔄</span> 12 partages</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 bg-card">
                    <div className="flex items-center mb-4">
                      <img
                        src="/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png"
                        alt="Haia El Zufari"
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">Haia El Zufari</p>
                        <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris | Droit de la Distribution</p>
                        <p className="text-xs text-muted-foreground">Il y a 1 semaine</p>
                      </div>
                    </div>
                    <p className="text-foreground mb-4">
                      📋 <strong>Guide pratique : Comment négocier un contrat de distribution sélective ?</strong>
                      <br /><br />
                      Après 10 ans d'expérience dans ce domaine, voici mes conseils essentiels :
                      <br /><br />
                      1️⃣ <strong>CRITÈRES DE SÉLECTION</strong>
                      <br />• Ils doivent être objectifs, uniformes et proportionnés
                      <br />• Éviter toute discrimination
                      <br /><br />
                      2️⃣ <strong>OBLIGATIONS RESPECTIVES</strong>
                      <br />• Détailler précisément les obligations de chaque partie
                      <br />• Prévoir des objectifs réalisables
                      <br /><br />
                      3️⃣ <strong>TERRITORIALITÉ</strong>
                      <br />• Définir clairement les zones d'exclusivité
                      <br />• Anticiper les ventes en ligne
                      <br /><br />
                      4️⃣ <strong>DURÉE ET RÉSILIATION</strong>
                      <br />• Prévoir des délais de préavis suffisants
                      <br />• Organiser les modalités de fin de contrat
                      <br /><br />
                      Besoin d'accompagnement ? Je suis là pour vous conseiller ! 💼
                      <br /><br />
                      #DistributionSelective #NegociationContrat #DroitDistribution #ConseilJuridique
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4 pt-3 border-t">
                      <span className="flex items-center"><span className="text-blue-600 mr-1">👍</span> 156</span>
                      <span className="flex items-center"><span className="mr-1">💬</span> 31 commentaires</span>
                      <span className="flex items-center"><span className="mr-1">🔄</span> 24 partages</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional LinkedIn connection for live updates */}
              {!isAuthenticated && (
                <div className="text-center py-6 border-t border-dashed">
                  <p className="text-sm text-muted-foreground mb-3">
                    Pour accéder aux publications en temps réel et interagir
                  </p>
                  <Button
                    onClick={() => {
                      const authComponent = document.querySelector('.linkedin-auth-hidden');
                      if (authComponent) {
                        authComponent.classList.remove('hidden');
                      }
                    }}
                    variant="outline"
                    size="sm"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Se connecter à LinkedIn
                  </Button>
                  <div className="linkedin-auth-hidden hidden mt-4">
                    <LinkedInAuth onAuthenticated={handleAuthenticated} />
                  </div>
                </div>
              )}

              {isAuthenticated && <LinkedInPosts />}
            </div>

            {/* LinkedIn Direct Link */}
            <div className="mt-12 text-center">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Voir toutes les publications
                </h3>
                <p className="text-muted-foreground mb-4">
                  Découvrez l'intégralité de mes analyses et participez aux discussions 
                  directement sur LinkedIn.
                </p>
                <Button asChild variant="outline">
                  <a 
                    href="https://www.linkedin.com/in/haiaelzufari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le profil LinkedIn complet
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actualites;