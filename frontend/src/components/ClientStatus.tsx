import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, CheckCircle, AlertCircle, Users, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import api, { StatusCheck } from '@/lib/api';

const ClientStatus = () => {
  const [clientName, setClientName] = useState('');
  const [statusChecks, setStatusChecks] = useState<StatusCheck[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const { toast } = useToast();

  // Test backend connection on component mount
  useEffect(() => {
    testConnection();
    loadStatusChecks();
  }, []);

  const testConnection = async () => {
    const result = await api.testConnection();
    if (result.error) {
      setConnectionStatus('error');
      toast({
        title: "Connection Error",
        description: "Unable to connect to backend services.",
        variant: "destructive",
      });
    } else {
      setConnectionStatus('connected');
    }
  };

  const loadStatusChecks = async () => {
    setIsLoading(true);
    const result = await api.getStatusChecks();
    
    if (result.error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les statuts clients.",
        variant: "destructive",
      });
    } else {
      setStatusChecks(result.data || []);
    }
    
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!clientName.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre nom.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const result = await api.createStatusCheck(clientName.trim());
    
    if (result.error) {
      toast({
        title: "Erreur",
        description: "Impossible d'enregistrer votre check-in.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Votre check-in a été enregistré avec succès.",
        variant: "default",
      });
      setClientName('');
      // Reload the status checks to show the new entry
      await loadStatusChecks();
    }
    
    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Connection Status */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            {connectionStatus === 'checking' && <Loader2 className="w-5 h-5 animate-spin text-gray-500" />}
            {connectionStatus === 'connected' && <CheckCircle className="w-5 h-5 text-green-500" />}
            {connectionStatus === 'error' && <AlertCircle className="w-5 h-5 text-red-500" />}
            <CardTitle className="text-lg">
              {connectionStatus === 'checking' && 'Vérification de la connexion...'}
              {connectionStatus === 'connected' && 'Service en ligne'}
              {connectionStatus === 'error' && 'Service indisponible'}
            </CardTitle>
          </div>
          <CardDescription>
            Statut de connexion avec nos services backend
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Client Check-in Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary" />
            <span>Check-in Client</span>
          </CardTitle>
          <CardDescription>
            Enregistrez votre présence ou votre demande de suivi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Entrez votre nom complet"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                disabled={isSubmitting || connectionStatus !== 'connected'}
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting || connectionStatus !== 'connected'}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {isSubmitting ? 'Enregistrement...' : 'Enregistrer mon check-in'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Status Checks Display */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Derniers Check-ins</span>
          </CardTitle>
          <CardDescription>
            Historique des enregistrements récents
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
              <span className="ml-2 text-gray-500">Chargement...</span>
            </div>
          ) : statusChecks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Aucun check-in enregistré pour le moment</p>
            </div>
          ) : (
            <div className="space-y-3">
              {statusChecks.slice(0, 10).map((check) => (
                <div
                  key={check.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900">{check.client_name}</p>
                    <p className="text-sm text-gray-500">
                      {formatDate(check.timestamp)}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Enregistré
                  </Badge>
                </div>
              ))}
              {statusChecks.length > 10 && (
                <p className="text-sm text-gray-500 text-center pt-2">
                  Et {statusChecks.length - 10} autres check-ins...
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientStatus;