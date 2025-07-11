
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, LinkedinIcon, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    if (path === '/' || path === '#accueil') return location.pathname === '/' && (!location.hash || location.hash === '#accueil');
    if (path === '/actualites') return location.pathname === '/actualites';
    if (path.startsWith('#')) {
      return location.pathname === '/' && location.hash === path;
    }
    return location.pathname === path;
  };

  const getNavLinkClass = (path: string) => {
    const baseClass = "transition-colors font-medium relative";
    const inactiveClass = "text-primary-foreground hover:text-secondary";
    const activeClass = "text-secondary";
    
    if (isActive(path)) {
      return `${baseClass} ${activeClass} after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-secondary`;
    }
    return `${baseClass} ${inactiveClass}`;
  };

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
            <a 
              href="https://www.linkedin.com/in/haia-elzufari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <h1 className="font-serif text-2xl font-bold text-primary-foreground">
              AUDESTYA
            </h1>
            <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getNavLinkClass('/')}>
              ACCUEIL
            </Link>
            <Link to="/#presentation" className={getNavLinkClass('#presentation')}>
              PRÉSENTATION
            </Link>
            
            {/* Dropdown for Domaines */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:text-secondary font-medium">
                  DOMAINES D'INTERVENTION
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50 w-64 p-2">
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer rounded-md p-3">
                  <Link to="/reseaux-distribution" className="w-full text-foreground">
                    Réseaux de Distribution
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer rounded-md p-3">
                  <Link to="/relations-commerciales" className="w-full text-foreground">
                    Relations et Pratiques Commerciales
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer rounded-md p-3">
                  <Link to="/accompagnement-juridique" className="w-full text-foreground">
                    Accompagnement Juridique Externalisé
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/actualites" className={getNavLinkClass('/actualites')}>
              ACTUALITÉS
            </Link>
            <Link to="/#contact" className={getNavLinkClass('#contact')}>
              CONTACT
            </Link>
            
            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-secondary border border-primary-foreground/20 hover:border-secondary">
                  <Globe size={16} className="mr-1" />
                  FR
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50 p-2">
                <DropdownMenuItem className="hover:bg-muted cursor-pointer rounded-md p-3">
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-muted cursor-pointer rounded-md p-3">
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <div className="md:hidden pb-4 bg-primary/10 rounded-lg mx-2">
            <div className="flex flex-col space-y-2 p-6">
              <Link to="/" className={`${getNavLinkClass('/')} py-4 px-3 rounded`}>
                ACCUEIL
              </Link>
              <Link to="/#presentation" className={`${getNavLinkClass('#presentation')} py-4 px-3 rounded`}>
                PRÉSENTATION
              </Link>
              
              {/* Mobile Domaines section */}
              <div className="py-3">
                <p className="text-primary-foreground font-medium px-3 mb-3 text-lg">DOMAINES D'INTERVENTION</p>
                <div className="ml-4 space-y-3">
                  <Link to="/reseaux-distribution" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-2 px-3 text-base rounded">
                    Réseaux de Distribution
                  </Link>
                  <Link to="/relations-commerciales" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-2 px-3 text-base rounded">
                    Relations et Pratiques Commerciales
                  </Link>
                  <Link to="/accompagnement-juridique" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-2 px-3 text-base rounded">
                    Accompagnement Juridique Externalisé
                  </Link>
                </div>
              </div>
              
              <Link to="/actualites" className={`${getNavLinkClass('/actualites')} py-4 px-3 rounded`}>
                ACTUALITÉS
              </Link>
              <Link to="/#contact" className={`${getNavLinkClass('#contact')} py-4 px-3 rounded`}>
                CONTACT
              </Link>
              <div className="py-3 px-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-secondary border border-primary-foreground/20 hover:border-secondary">
                      <Globe size={16} className="mr-1" />
                      FR
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border shadow-lg z-50 p-2">
                    <DropdownMenuItem className="hover:bg-muted cursor-pointer rounded-md p-3">
                      🇫🇷 Français
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-muted cursor-pointer rounded-md p-3">
                      🇬🇧 English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

// IMPORTANT: This file is getting too long (213 lines). Consider refactoring into smaller components.
