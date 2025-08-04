import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ClientStatus from '@/components/ClientStatus';
import Breadcrumb from '@/components/Breadcrumb';
import { Users, Shield, Clock, CheckCircle } from 'lucide-react';

const ClientPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Portail Client
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enregistrez votre présence et suivez l'état de vos demandes juridiques
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Check-in Simple</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Enregistrez votre présence en quelques clics
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Suivi en Temps Réel</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Visualisez l'historique de vos interactions
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Sécurisé</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Vos données sont protégées et confidentielles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ClientStatus />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Comment utiliser le portail client ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Enregistrez-vous</h3>
                    <p className="text-muted-foreground">
                      Saisissez votre nom complet dans le formulaire de check-in pour vous enregistrer.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Suivez vos interactions</h3>
                    <p className="text-muted-foreground">
                      Consultez l'historique de vos enregistrements et demandes dans la section "Derniers Check-ins".
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Restez informé</h3>
                    <p className="text-muted-foreground">
                      Le statut de connexion vous indique si nos services sont disponibles.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contactez-nous</h3>
                    <p className="text-muted-foreground">
                      Pour toute question, n'hésitez pas à nous contacter via nos canaux habituels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientPortal;