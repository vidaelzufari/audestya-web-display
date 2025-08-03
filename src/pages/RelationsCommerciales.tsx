import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  FileText, 
  Users, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const RelationsCommerciales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Relations Commerciales
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Expertise juridique complète pour sécuriser et optimiser vos relations commerciales
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Sécurisez Vos Relations Commerciales
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Bénéficiez d'un accompagnement juridique expert pour optimiser et protéger 
              vos relations commerciales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                <Link to="/#contact" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/honoraires" className="inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Voir les tarifs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RelationsCommerciales;