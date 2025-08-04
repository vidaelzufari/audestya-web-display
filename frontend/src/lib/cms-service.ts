// CMS Service for content management
const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;

// Types
export interface ContentSection {
  id: string;
  type: 'hero' | 'text' | 'image' | 'card_grid' | 'list' | 'cta';
  title?: string;
  content?: string;
  image_url?: string;
  items?: Array<{
    title: string;
    description: string;
    icon?: string;
    image_url?: string;
  }>;
  button?: {
    text: string;
    url: string;
    style: 'primary' | 'secondary' | 'outline';
  };
  background_color?: string;
  text_color?: string;
}

export interface ContentPage {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  hero_title: string;
  hero_description: string;
  sections: ContentSection[];
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

export interface ContentPageCreate {
  slug: string;
  title: string;
  meta_description: string;
  hero_title: string;
  hero_description: string;
  sections: ContentSection[];
  status: 'draft' | 'published';
}

export interface ContentPageUpdate {
  title?: string;
  meta_description?: string;
  hero_title?: string;
  hero_description?: string;
  sections?: ContentSection[];
  status?: 'draft' | 'published';
}

export interface CMSSettings {
  id: string;
  site_title: string;
  site_description: string;
  contact_email: string;
  contact_phone: string;
  linkedin_url: string;
  logo_url?: string;
  primary_color: string;
  secondary_color: string;
  updated_at: string;
}

export interface CMSSettingsUpdate {
  site_title?: string;
  site_description?: string;
  contact_email?: string;
  contact_phone?: string;
  linkedin_url?: string;
  logo_url?: string;
  primary_color?: string;
  secondary_color?: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Generic API call function
async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log('CMS API call to:', url);
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('CMS API call failed:', error);
    return {
      data: null as any,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}

// CMS Service Class
export class CMSService {
  private static instance: CMSService;

  public static getInstance(): CMSService {
    if (!CMSService.instance) {
      CMSService.instance = new CMSService();
    }
    return CMSService.instance;
  }

  // Content Pages
  async getAllPages(): Promise<ApiResponse<ContentPage[]>> {
    return apiCall<ContentPage[]>('/api/cms/pages');
  }

  async getPageBySlug(slug: string): Promise<ApiResponse<ContentPage>> {
    return apiCall<ContentPage>(`/api/cms/pages/${slug}`);
  }

  async createPage(pageData: ContentPageCreate): Promise<ApiResponse<ContentPage>> {
    return apiCall<ContentPage>('/api/cms/pages', {
      method: 'POST',
      body: JSON.stringify(pageData),
    });
  }

  async updatePage(slug: string, pageData: ContentPageUpdate): Promise<ApiResponse<ContentPage>> {
    return apiCall<ContentPage>(`/api/cms/pages/${slug}`, {
      method: 'PUT',
      body: JSON.stringify(pageData),
    });
  }

  async deletePage(slug: string): Promise<ApiResponse<{message: string}>> {
    return apiCall<{message: string}>(`/api/cms/pages/${slug}`, {
      method: 'DELETE',
    });
  }

  // CMS Settings
  async getSettings(): Promise<ApiResponse<CMSSettings>> {
    return apiCall<CMSSettings>('/api/cms/settings');
  }

  async updateSettings(settingsData: CMSSettingsUpdate): Promise<ApiResponse<CMSSettings>> {
    return apiCall<CMSSettings>('/api/cms/settings', {
      method: 'PUT',
      body: JSON.stringify(settingsData),
    });
  }

  // Utility methods
  generateSectionId(): string {
    return `section_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  validateSlug(slug: string): boolean {
    const slugRegex = /^[a-z0-9-]+$/;
    return slugRegex.test(slug) && slug.length > 0;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  // Default section templates
  getDefaultSections(): { [key: string]: ContentSection } {
    return {
      hero: {
        id: this.generateSectionId(),
        type: 'hero',
        title: 'Nouveau titre de section',
        content: 'Description de la section hero',
        background_color: '#f8fafc',
        text_color: '#1e293b'
      },
      text: {
        id: this.generateSectionId(),
        type: 'text',
        title: 'Titre de section',
        content: 'Contenu texte de la section...',
      },
      image: {
        id: this.generateSectionId(),
        type: 'image',
        title: 'Section avec image',
        content: 'Description de l\'image',
        image_url: '/placeholder.svg'
      },
      card_grid: {
        id: this.generateSectionId(),
        type: 'card_grid',
        title: 'Grille de cartes',
        items: [
          {
            title: 'Carte 1',
            description: 'Description de la carte 1',
            icon: '📋'
          },
          {
            title: 'Carte 2', 
            description: 'Description de la carte 2',
            icon: '⚖️'
          },
          {
            title: 'Carte 3',
            description: 'Description de la carte 3', 
            icon: '🏢'
          }
        ]
      },
      cta: {
        id: this.generateSectionId(),
        type: 'cta',
        title: 'Appel à l\'action',
        content: 'Description incitant à l\'action',
        button: {
          text: 'En savoir plus',
          url: '/contact',
          style: 'primary'
        },
        background_color: '#1e40af',
        text_color: '#ffffff'
      }
    };
  }
}

export default CMSService;