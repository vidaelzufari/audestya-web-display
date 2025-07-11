import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-primary-foreground">
            <div className="flex items-center gap-6">
              <a href="tel:+33685353781" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone size={14} />
                +33 6 85 35 37 81
              </a>
              <a href="mailto:haia.elzufari@audestya-avocat.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail size={14} />
                haia.elzufari@audestya-avocat.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-serif text-2xl font-bold text-primary-foreground">
              AUDESTYA
            </h1>
            <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-primary-foreground hover:text-secondary transition-colors font-medium">
              ACCUEIL
            </a>
            <a href="#presentation" className="text-primary-foreground hover:text-secondary transition-colors font-medium">
              PRÉSENTATION
            </a>
            <a href="#domaines" className="text-primary-foreground hover:text-secondary transition-colors font-medium">
              DOMAINES D'INTERVENTION
            </a>
            <a href="#contact" className="text-primary-foreground hover:text-secondary transition-colors font-medium">
              CONTACT
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-primary-foreground hover:text-secondary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#accueil" className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2">
                ACCUEIL
              </a>
              <a href="#presentation" className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2">
                PRÉSENTATION
              </a>
              <a href="#domaines" className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2">
                DOMAINES D'INTERVENTION
              </a>
              <a href="#contact" className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2">
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;