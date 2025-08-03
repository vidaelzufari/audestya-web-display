import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, ExternalLink, Calendar, User, MessageCircle, ThumbsUp, Share2, Loader2 } from 'lucide-react';

interface LinkedInPost {
  id: string;
  text: string;
  publishedAt: string;
  author: {
    name: string;
    profilePicture?: string;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const LinkedInFeed = () => {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simuler le chargement des posts LinkedIn
    // En production, vous devrez utiliser l'API LinkedIn ou un service tiers
    const loadLinkedInPosts = async () => {
      try {
        setLoading(true);
        
        // Simulation d'un appel API
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Posts d'exemple - en production, ces données viendraient de l'API LinkedIn
        const mockPosts: LinkedInPost[] = [
          {
            id: '1',
            text: '🔍 Analyse juridique : Les nouvelles obligations en matière de protection des consommateurs dans le e-commerce. Focus sur les dernières évolutions réglementaires qui impactent les pratiques commerciales des entreprises. Comment adapter vos CGV et processus de vente ? #DroitConsommation #Ecommerce #DroitCommercial',
            publishedAt: '2025-01-02T10:30:00Z',
            author: {
              name: 'Haia El Zufari',
            },
            engagement: {
              likes: 24,
              comments: 8,
              shares: 3,
            }
          },
          {
            id: '2',
            text: '⚖️ Conseil pratique : Comment structurer efficacement un contrat de franchise ? Les 5 points clés à ne pas manquer pour sécuriser votre réseau de distribution : 1️⃣ DIP complet et transparent 2️⃣ Définition claire des obligations 3️⃣ Politique tarifaire équilibrée 4️⃣ Clauses de résiliation maîtrisées 5️⃣ Protection de la marque #Franchise #ReseauxDistribution #DroitCommercial',
            publishedAt: '2024-12-30T14:15:00Z',
            author: {
              name: 'Haia El Zufari',
            },
            engagement: {
              likes: 31,
              comments: 12,
              shares: 7,
            }
          },
          {
            id: '3',
            text: '📈 Tendance juridique : L\'évolution du droit de la distribution face aux nouveaux modèles économiques. Entre digitalisation et réglementation, comment les entreprises s\'adaptent-elles ? Retour sur les principales évolutions observées cette année et leurs impacts concrets sur les stratégies commerciales. Un enjeu majeur pour 2025 ! #DroitDistribution #Innovation #Digitalisation',
            publishedAt: '2024-12-28T09:45:00Z',
            author: {
              name: 'Haia El Zufari',
            },
            engagement: {
              likes: 45,
              comments: 18,
              shares: 12,
            }
          }
        ];
        
        setPosts(mockPosts);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des posts LinkedIn');
        console.error('Erreur LinkedIn Feed:', err);
      } finally {
        setLoading(false);
      }
    };

    loadLinkedInPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Il y a 1 jour';
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 14) return 'Il y a 1 semaine';
    return `Il y a ${Math.floor(diffDays / 7)} semaines`;
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <Card className="bg-background shadow-soft border-0">
          <CardContent className="p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <h2 className="font-serif text-3xl font-bold text-primary">
                Chargement du feed LinkedIn...
              </h2>
            </div>
            <p className="text-muted-foreground">
              Récupération des dernières publications en cours...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="bg-background shadow-soft border-0">
        <CardContent className="p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Linkedin className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-primary">
              Feed LinkedIn temporairement indisponible
            </h2>
          </div>
          <p className="text-muted-foreground mb-6">
            {error}
          </p>
          <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground">
            <a 
              href="https://www.linkedin.com/in/haiaelzufari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <Linkedin className="w-5 h-5" />
              Voir directement sur LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* LinkedIn Header */}
      <Card className="bg-background shadow-soft border-0">
        <CardContent className="p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Linkedin className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-primary">
              Mes dernières publications LinkedIn
            </h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Analyses juridiques, actualités du droit de la distribution et conseils pratiques 
              pour accompagner vos décisions business.
            </p>
            
            <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-lg font-medium">
              <a 
                href="https://www.linkedin.com/in/haiaelzufari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Linkedin className="w-5 h-5" />
                Voir tous mes posts sur LinkedIn
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post, index) => (
          <Card key={post.id} className="bg-background shadow-soft border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{post.author.name}</h4>
                  <p className="text-sm text-muted-foreground">Avocat au Barreau de Paris</p>
                </div>
                <div className="ml-auto">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                  {post.text}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-muted">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.engagement.comments}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                      <Share2 className="w-4 h-4" />
                      <span>{post.engagement.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
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
  );
};

export default LinkedInFeed;