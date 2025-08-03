import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+33 6 85 35 37 81</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">haia.elzufari@audestya-avocat.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Paris, France</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold mb-6">Navigation</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-sm hover:text-secondary transition-colors">
                  Accueil
                </Link>
                <Link to="/presentation" className="block text-sm hover:text-secondary transition-colors">
                  Présentation
                </Link>
                <Link to="/honoraires" className="block text-sm hover:text-secondary transition-colors">
                  Honoraires
                </Link>
                <Link to="/actualites" className="block text-sm hover:text-secondary transition-colors">
                  Actualités
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold mb-6">Domaines</h3>
              <div className="space-y-2">
                <Link to="/reseaux-distribution" className="block text-sm hover:text-secondary transition-colors">
                  Réseaux de Distribution
                </Link>
                <Link to="/relations-commerciales" className="block text-sm hover:text-secondary transition-colors">
                  Relations Commerciales
                </Link>
                <Link to="/accompagnement-juridique" className="block text-sm hover:text-secondary transition-colors">
                  Accompagnement Juridique
                </Link>
              </div>
            </div>

            {/* Legal & Social */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold mb-6">Légal</h3>
              <div className="space-y-2">
                <Link to="/mentions-legales" className="block text-sm hover:text-secondary transition-colors">
                  Mentions Légales
                </Link>
                <Link to="/politique-confidentialite" className="block text-sm hover:text-secondary transition-colors">
                  Politique de Confidentialité
                </Link>
                <Link to="/cookie-policy" className="block text-sm hover:text-secondary transition-colors">
                  Politique Cookies
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="pt-4">
                <a 
                  href="https://www.linkedin.com/in/haiaelzufari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2025 Audestya Avocat - Haia El Zufari. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;