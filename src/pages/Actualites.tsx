import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, ExternalLink, Calendar, User, MessageCircle, ThumbsUp, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Actualites = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Actualités
            </h1>
          </div>
        </div>
      </section>

      {/* Actualités Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* LinkedIn Feed Section */}
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Linkedin className="w-8 h-8 text-primary" />
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    Suivez-moi sur LinkedIn
                  </h2>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Retrouvez mes dernières analyses juridiques, actualités du droit de la distribution 
                    et conseils pratiques directement sur mon profil LinkedIn.
                  </p>
                  
                  <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-lg font-medium">
                    <a 
                      href="https://www.linkedin.com/in/haiaelzufari" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3"
                    >
                      <Linkedin className="w-5 h-5" />
                      Voir mon profil LinkedIn
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn Posts Preview */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl font-bold text-primary text-center mb-8">
                Dernières publications
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Post Example 1 */}
                <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Haia El Zufari</h4>
                        <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        🔍 <strong className="text-primary">Analyse juridique :</strong> Les nouvelles obligations en matière de 
                        protection des consommateurs dans le e-commerce. Focus sur les dernières évolutions 
                        réglementaires qui impactent les pratiques commerciales...
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-muted">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Il y a 2 jours</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>24</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>8</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 className="w-4 h-4" />
                            <span>3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Post Example 2 */}
                <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Haia El Zufari</h4>
                        <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        ⚖️ <strong className="text-primary">Conseil pratique :</strong> Comment structurer efficacement 
                        un contrat de franchise ? Les 5 points clés à ne pas manquer pour sécuriser 
                        votre réseau de distribution...
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-muted">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Il y a 5 jours</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>31</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>12</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 className="w-4 h-4" />
                            <span>7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Post Example 3 */}
                <Card className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group md:col-span-2">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Haia El Zufari</h4>
                        <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        📈 <strong className="text-primary">Tendance juridique :</strong> L'évolution du droit de la distribution 
                        face aux nouveaux modèles économiques. Entre digitalisation et réglementation, 
                        comment les entreprises s'adaptent-elles ? Retour sur les principales évolutions 
                        observées cette année et leurs impacts concrets sur les stratégies commerciales.
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-muted">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Il y a 1 semaine</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>45</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>18</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 className="w-4 h-4" />
                            <span>12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <CardContent className="p-12 text-center">
                <h3 className="font-serif text-2xl font-bold mb-6">
                  Ne manquez aucune actualité juridique
                </h3>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Connectez-vous avec moi sur LinkedIn pour recevoir régulièrement mes analyses, 
                  conseils et actualités en droit de la distribution et des contrats.
                </p>
                <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-medium">
                  <a 
                    href="https://www.linkedin.com/in/haiaelzufari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3"
                  >
                    <Linkedin className="w-5 h-5" />
                    Me suivre sur LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default Actualites;