import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cookie, Shield, BarChart3, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    gtagInitialized: boolean;
    initializeGoogleAnalytics: () => void;
  }
}

const CookieSettings = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Load saved preferences
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (cookieConsent) {
      setPreferences(JSON.parse(cookieConsent));
    }
  }, []);

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    
    const newPreferences = {
      ...preferences,
      [type]: value,
    };
    
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    
    // Apply analytics changes immediately
    if (type === 'analytics') {
      if (value) {
        // Enable analytics
        if (window.initializeGoogleAnalytics) {
          window.initializeGoogleAnalytics();
        }
      } else {
        // Disable analytics (reload required)
        window.location.reload();
      }
    } else {
      // For other changes, reload page
      window.location.reload();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
          <Settings className="w-8 h-8" />
          Paramètres des cookies
        </h2>
        <p className="text-muted-foreground">
          Gérez vos préférences de cookies pour personnaliser votre expérience sur notre site.
        </p>
      </div>

      {/* Necessary Cookies */}
      <Card className="bg-background shadow-soft border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cookies nécessaires</h3>
                <p className="text-muted-foreground">Toujours actifs</p>
              </div>
            </div>
            <Switch
              checked={preferences.necessary}
              disabled={true}
              className="opacity-50"
            />
          </div>
          <p className="text-muted-foreground text-sm">
            Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés. 
            Ils sont généralement définis en réponse à des actions que vous effectuez et qui constituent 
            une demande de services, comme la définition de vos préférences de confidentialité, 
            la connexion ou le remplissage de formulaires.
          </p>
        </CardContent>
      </Card>

      {/* Analytics Cookies */}
      <Card className="bg-background shadow-soft border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cookies d'analyse</h3>
                <p className="text-muted-foreground">
                  {preferences.analytics ? 'Activés' : 'Désactivés'}
                </p>
              </div>
            </div>
            <Switch
              checked={preferences.analytics}
              onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
            />
          </div>
          <p className="text-muted-foreground text-sm">
            Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer 
            et d'améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont 
            les plus et les moins populaires et à voir comment les visiteurs naviguent sur le site.
          </p>
        </CardContent>
      </Card>

      {/* Marketing Cookies */}
      <Card className="bg-background shadow-soft border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cookies marketing</h3>
                <p className="text-muted-foreground">
                  {preferences.marketing ? 'Activés' : 'Désactivés'}
                </p>
              </div>
            </div>
            <Switch
              checked={preferences.marketing}
              onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
            />
          </div>
          <p className="text-muted-foreground text-sm">
            Ces cookies peuvent être définis par nos partenaires publicitaires sur notre site. 
            Ils peuvent être utilisés par ces entreprises pour établir un profil de vos intérêts 
            et vous montrer des publicités pertinentes sur d'autres sites.
          </p>
        </CardContent>
      </Card>

      <div className="text-center pt-6">
        <p className="text-sm text-muted-foreground">
          Pour plus d'informations sur notre utilisation des cookies, consultez notre{' '}
          <a href="/politique-confidentialite" className="text-primary hover:text-secondary underline">
            politique de confidentialité
          </a>.
        </p>
      </div>
    </div>
  );
};

export default CookieSettings;