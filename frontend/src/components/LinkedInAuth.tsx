import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Loader2, AlertCircle } from 'lucide-react';
import { LinkedInService } from '@/lib/linkedin-service';

interface LinkedInAuthProps {
  onAuthenticated: () => void;
}

export const LinkedInAuth: React.FC<LinkedInAuthProps> = ({ onAuthenticated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const linkedInService = LinkedInService.getInstance();

  // Handle OAuth callback
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');

    if (error) {
      setError(`LinkedIn authentication error: ${error}`);
      return;
    }

    if (code && state) {
      handleCallback(code, state);
    }
  }, []);

  const handleCallback = async (code: string, state: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await linkedInService.handleCallback(code, state);
      onAuthenticated();
      
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { authUrl } = await linkedInService.initiateLogin();
      window.location.href = authUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initiate login');
      setIsLoading(false);
    }
  };

  if (linkedInService.isAuthenticated()) {
    return null; // Already authenticated
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Linkedin className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Connexion LinkedIn requise
          </h3>
          <p className="text-muted-foreground">
            Connectez-vous à LinkedIn pour afficher vos dernières publications.
          </p>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center text-red-700">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span className="text-sm">{error}</span>
            </div>
          </div>
        )}
        
        <Button 
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Connexion en cours...
            </>
          ) : (
            <>
              <Linkedin className="w-4 h-4 mr-2" />
              Se connecter avec LinkedIn
            </>
          )}
        </Button>
        
        <p className="text-xs text-muted-foreground mt-4">
          Vous serez redirigé vers LinkedIn pour vous authentifier en toute sécurité.
        </p>
      </CardContent>
    </Card>
  );
};