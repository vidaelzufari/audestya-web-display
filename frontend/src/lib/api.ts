// API service for backend communication
const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;

if (!API_BASE_URL) {
  console.error('Backend URL not configured. Please check environment variables.');
}

// API response types
export interface StatusCheck {
  id: string;
  client_name: string;
  timestamp: string;
}

export interface StatusCheckCreate {
  client_name: string;
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
    console.log('Making API call to:', url);
    
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
    console.error('API call failed:', error);
    return {
      data: null as any,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}

// API endpoints
export const api = {
  // Test connection
  async testConnection(): Promise<ApiResponse<{ message: string }>> {
    return apiCall<{ message: string }>('/api/');
  },

  // Get all status checks
  async getStatusChecks(): Promise<ApiResponse<StatusCheck[]>> {
    return apiCall<StatusCheck[]>('/api/status');
  },

  // Create a new status check
  async createStatusCheck(clientName: string): Promise<ApiResponse<StatusCheck>> {
    return apiCall<StatusCheck>('/api/status', {
      method: 'POST',
      body: JSON.stringify({ client_name: clientName }),
    });
  },
};

export default api;