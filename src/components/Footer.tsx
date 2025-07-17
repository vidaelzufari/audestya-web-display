import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand and description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="font-serif text-2xl font-bold">AUDESTYA</h3>
              <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Haia EL ZUFARI<br/>
              Avocat au Barreau de Paris
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/haia-elzufari/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-secondary">Navigation</h4>
            <div className="space-y-2">
              <a href="#accueil" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Accueil
              </a>
              <a href="#presentation" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Présentation
              </a>
              <a href="#domaines" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Domaines d'intervention
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-secondary">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+33685353781" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Phone size={16} />
                +33 6 85 35 37 81
              </a>
              <a href="mailto:haia.elzufari@audestya-avocat.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Mail size={16} />
                haia.elzufari@audestya-avocat.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © 2024 Audestya Avocat. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="/mentions-legales" className="hover:text-secondary transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="hover:text-secondary transition-colors">
                Politique de confidentialité
              </a>
              <a href="/conditions-generales-vente" className="hover:text-secondary transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;