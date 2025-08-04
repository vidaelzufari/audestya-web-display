// LinkedIn Feed Service - Enhanced for real-time integration
export interface LinkedInPost {
  id: string;
  author: {
    name: string;
    title: string;
    profileImage: string;
    profileUrl: string;
  };
  content: string;
  publishedDate: string;
  likes: number;
  comments: number;
  shares: number;
  media?: {
    type: 'image' | 'video' | 'document';
    url: string;
    thumbnail?: string;
  };
  engagement: {
    reactions: number;
    commentsList: Array<{
      author: string;
      content: string;
      date: string;
    }>;
  };
}

// Service to fetch LinkedIn posts
export class LinkedInService {
  private static instance: LinkedInService;
  private posts: LinkedInPost[] = [];

  public static getInstance(): LinkedInService {
    if (!LinkedInService.instance) {
      LinkedInService.instance = new LinkedInService();
    }
    return LinkedInService.instance;
  }

  // Simulate fetching real LinkedIn posts
  async fetchLatestPosts(): Promise<LinkedInPost[]> {
    // In a real implementation, this would call LinkedIn API
    // For now, we'll use realistic mock data
    const mockPosts: LinkedInPost[] = [
      {
        id: '1',
        author: {
          name: 'Haia El Zufari',
          title: 'Avocat au Barreau de Paris | Droit de la Distribution',
          profileImage: '/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png',
          profileUrl: 'https://www.linkedin.com/in/haiaelzufari'
        },
        content: `🚀 Nouvelle réglementation européenne sur les contrats de distribution : ce qu'il faut savoir

La Commission européenne vient d'adopter de nouvelles directives qui impacteront significativement les réseaux de distribution en 2024.

Points clés à retenir :
✅ Renforcement de la protection des distributeurs
✅ Nouvelles obligations de transparence
✅ Délais de préavis étendus

Une adaptation urgente des contrats existants s'impose. N'hésitez pas à me consulter pour une mise en conformité.

#DroitDistribution #Reglementation #Franchise #ContratCommercial`,
        publishedDate: '2024-01-15T10:30:00Z',
        likes: 127,
        comments: 23,
        shares: 18,
        engagement: {
          reactions: 127,
          commentsList: [
            {
              author: 'Marie Dubois',
              content: 'Excellente analyse ! Merci pour ce partage.',
              date: '2024-01-15T11:00:00Z'
            },
            {
              author: 'Jean Martin',
              content: 'Très utile pour notre réseau de franchise.',
              date: '2024-01-15T12:15:00Z'
            }
          ]
        }
      },
      {
        id: '2',
        author: {
          name: 'Haia El Zufari',
          title: 'Avocat au Barreau de Paris | Droit de la Distribution',
          profileImage: '/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png',
          profileUrl: 'https://www.linkedin.com/in/haiaelzufari'
        },
        content: `⚖️ Décision marquante de la Cour de Cassation : résiliation abusive de contrat de franchise

La Chambre commerciale vient de rendre un arrêt important concernant les conditions de résiliation des contrats de franchise.

Les faits :
Un franchiseur avait résilié unilatéralement un contrat pour "mésentente", sans respecter la procédure contradictoire.

La Cour rappelle que :
🔹 La résiliation doit être justifiée par une cause réelle et sérieuse
🔹 Le contradictoire doit être respecté
🔹 Le préavis doit être raisonnable

Dommages-intérêts : 350 000€ alloués au franchisé !

#Jurisprudence #Franchise #DroitCommercial #CassationCommerciale`,
        publishedDate: '2024-01-10T14:45:00Z',
        likes: 89,
        comments: 15,
        shares: 12,
        engagement: {
          reactions: 89,
          commentsList: [
            {
              author: 'Pierre Lefebvre',
              content: 'Décision importante pour la sécurité juridique.',
              date: '2024-01-10T15:00:00Z'
            }
          ]
        }
      },
      {
        id: '3',
        author: {
          name: 'Haia El Zufari',
          title: 'Avocat au Barreau de Paris | Droit de la Distribution',
          profileImage: '/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png',
          profileUrl: 'https://www.linkedin.com/in/haiaelzufari'
        },
        content: `📋 Guide pratique : Comment négocier un contrat de distribution sélective ?

Après 10 ans d'expérience dans ce domaine, voici mes conseils essentiels :

1️⃣ CRITÈRES DE SÉLECTION
• Ils doivent être objectifs, uniformes et proportionnés
• Éviter toute discrimination

2️⃣ OBLIGATIONS RESPECTIVES
• Détailler précisément les obligations de chaque partie
• Prévoir des objectifs réalisables

3️⃣ TERRITORIALITÉ
• Définir clairement les zones d'exclusivité
• Anticiper les ventes en ligne

4️⃣ DURÉE ET RÉSILIATION
• Prévoir des délais de préavis suffisants
• Organiser les modalités de fin de contrat

Besoin d'accompagnement ? Je suis là pour vous conseiller ! 💼

#DistributionSelective #NegociationContrat #DroitDistribution #ConseilJuridique`,
        publishedDate: '2024-01-05T09:15:00Z',
        likes: 156,
        comments: 31,
        shares: 24,
        engagement: {
          reactions: 156,
          commentsList: [
            {
              author: 'Sophie Bernard',
              content: 'Guide très complet, merci !',
              date: '2024-01-05T09:30:00Z'
            },
            {
              author: 'Antoine Rousseau',
              content: 'Parfait pour notre projet de réseau.',
              date: '2024-01-05T10:45:00Z'
            }
          ]
        }
      }
    ];

    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        this.posts = mockPosts;
        resolve(mockPosts);
      }, 800);
    });
  }

  async getPostById(id: string): Promise<LinkedInPost | null> {
    const post = this.posts.find(p => p.id === id);
    return post || null;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Il y a 1 jour';
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaine${Math.floor(diffDays / 7) > 1 ? 's' : ''}`;
    
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  formatEngagement(count: number): string {
    if (count < 1000) return count.toString();
    if (count < 1000000) return `${Math.floor(count / 1000)}k`;
    return `${Math.floor(count / 1000000)}M`;
  }
}