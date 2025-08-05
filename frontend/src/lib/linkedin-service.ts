// LinkedIn Feed Service - Real API Integration
export interface LinkedInPost {
  id: string;
  author: string;
  created_at: string;
  text: string;
  visibility: string;
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface LinkedInProfile {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

// Service to fetch LinkedIn posts
export class LinkedInService {
  private static instance: LinkedInService;
  private baseUrl: string;
  private accessToken: string | null = null;

  constructor() {
    // Get backend URL from environment variables
    this.baseUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
    // Load token from localStorage on initialization
    this.accessToken = localStorage.getItem('linkedin_token');
  }

  public static getInstance(): LinkedInService {
    if (!LinkedInService.instance) {
      LinkedInService.instance = new LinkedInService();
    }
    return LinkedInService.instance;
  }

  async initiateLogin(): Promise<{ authUrl: string; state: string }> {
    const response = await fetch(`${this.baseUrl}/api/auth/linkedin/login`);
    if (!response.ok) {
      throw new Error('Failed to initiate LinkedIn login');
    }
    const data = await response.json();
    
    // Store state for verification
    localStorage.setItem('linkedin_state', data.state);
    
    return {
      authUrl: data.authorization_url,
      state: data.state
    };
  }

  async handleCallback(code: string, state: string): Promise<AuthResponse> {
    // Verify state matches what we stored
    const storedState = localStorage.getItem('linkedin_state');
    if (state !== storedState) {
      throw new Error('Invalid state parameter');
    }

    const response = await fetch(
      `${this.baseUrl}/api/auth/linkedin/callback?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Authentication failed');
    }

    const authData: AuthResponse = await response.json();
    
    // Store token for future requests
    this.accessToken = authData.access_token;
    localStorage.setItem('linkedin_token', authData.access_token);
    localStorage.removeItem('linkedin_state');

    return authData;
  }

  async fetchLatestPosts(limit: number = 10): Promise<LinkedInPost[]> {
    if (!this.accessToken) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(
      `${this.baseUrl}/api/linkedin/posts?limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        this.clearToken();
        throw new Error('Authentication expired');
      }
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();
    return posts.map((post: any) => ({
      id: post.id,
      author: {
        name: 'Haia El Zufari',
        title: 'Avocat au Barreau de Paris | Droit de la Distribution',
        profileImage: '/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png',
        profileUrl: 'https://www.linkedin.com/in/haiaelzufari'
      },
      content: post.text,
      publishedDate: post.created_at,
      likes: post.engagement?.likes || 0,
      comments: post.engagement?.comments || 0,
      shares: post.engagement?.shares || 0,
      engagement: {
        reactions: post.engagement?.likes || 0,
        commentsList: []
      }
    }));
  }

  async getUserProfile(): Promise<LinkedInProfile> {
    if (!this.accessToken) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(`${this.baseUrl}/api/linkedin/profile`, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        this.clearToken();
        throw new Error('Authentication expired');
      }
      throw new Error('Failed to fetch profile');
    }

    return response.json();
  }

  isAuthenticated(): boolean {
    return this.accessToken !== null;
  }

  clearToken(): void {
    this.accessToken = null;
    localStorage.removeItem('linkedin_token');
  }

  logout(): void {
    this.clearToken();
  }

  async getPostById(id: string): Promise<LinkedInPost | null> {
    // For now, return null as we don't have individual post endpoint
    return null;
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