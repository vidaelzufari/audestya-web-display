import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Settings, Cookie, Shield, BarChart3 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';

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
  }
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
      loadCookies(savedPreferences);
    }
  }, []);

  const loadCookies = (prefs: CookiePreferences) => {
    // Load analytics cookies if accepted
    if (prefs.analytics) {
      // Initialize Google Analytics
      console.log('Loading analytics cookies...');
      if (window.gtag && !window.gtagInitialized) {
        window.gtag('config', 'G-SS9XZ6T6VQ');
        window.gtagInitialized = true;
        console.log('Google Analytics activated');
      }
    }

    // Load marketing cookies if accepted
    if (prefs.marketing) {
      // Here you would load marketing/advertising cookies
      console.log('Loading marketing cookies...');
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    loadCookies(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    loadCookies(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-primary/95 to-primary backdrop-blur-sm border-t border-primary-foreground/20">
        <Card className="max-w-6xl mx-auto bg-background/95 backdrop-blur-sm border-0 shadow-elegant">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary text-lg">
                    Gestion des cookies
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ce site utilise des cookies pour améliorer votre expérience de navigation, 
                    analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
                    cookies accepter.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Dialog open={showSettings} onOpenChange={setShowSettings}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Personnaliser
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Cookie className="w-5 h-5" />
                        Paramètres des cookies
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6 py-4">
                      {/* Necessary Cookies */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-primary" />
                            <div>
                              <h4 className="font-medium">Cookies nécessaires</h4>
                              <p className="text-sm text-muted-foreground">
                                Indispensables au fonctionnement du site
                              </p>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.necessary}
                            disabled={true}
                            className="opacity-50"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground ml-8">
                          Ces cookies sont essentiels pour le fonctionnement du site et ne peuvent pas être désactivés.
                        </p>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            <div>
                              <h4 className="font-medium">Cookies d'analyse</h4>
                              <p className="text-sm text-muted-foreground">
                                Pour analyser l'utilisation du site
                              </p>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.analytics}
                            onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground ml-8">
                          Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                        </p>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Cookie className="w-5 h-5 text-primary" />
                            <div>
                              <h4 className="font-medium">Cookies marketing</h4>
                              <p className="text-sm text-muted-foreground">
                                Pour personnaliser la publicité
                              </p>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.marketing}
                            onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground ml-8">
                          Ces cookies permettent de vous proposer des contenus personnalisés.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t">
                      <Button variant="outline" onClick={() => setShowSettings(false)}>
                        Annuler
                      </Button>
                      <Button onClick={handleSavePreferences}>
                        Enregistrer les préférences
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" onClick={handleRejectAll}>
                  Refuser tout
                </Button>
                
                <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                  Accepter tout
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CookieConsent;