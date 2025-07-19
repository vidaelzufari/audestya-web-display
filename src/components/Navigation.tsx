
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    const inactiveClass = "text-primary-foreground/90 hover:text-secondary hover:font-semibold";
    const activeClass = "text-white font-semibold";
    
    if (isActive(path)) {
      return `${baseClass} ${activeClass} after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white`;
    }
    return `${baseClass} ${inactiveClass}`;
  };

  return (
    <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center text-sm text-primary-foreground">
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
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className={getNavLinkClass('/')}>
              ACCUEIL
            </a>
            <a href="/presentation" className={getNavLinkClass('/presentation')}>
              PRÉSENTATION
            </a>
            
            {/* Dropdown for Domaines */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:text-secondary font-medium">
                  DOMAINES D'INTERVENTION
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50 w-64">
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <a href="/reseaux-distribution" className="w-full">
                    Réseaux de Distribution
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <a href="/relations-commerciales" className="w-full">
                    Relations et Pratiques Commerciales
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <a href="/accompagnement-juridique" className="w-full">
                    Accompagnement Juridique Externalisé
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="/actualites" className={getNavLinkClass('/actualites')}>
              ACTUALITÉS
            </a>
            <a href="/#contact" className={getNavLinkClass('#contact')}>
              CONTACT
            </a>
            
            {/* LinkedIn icon */}
            <a 
              href="https://www.linkedin.com/in/haia-elzufari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            
            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-secondary border border-primary-foreground/20 hover:border-secondary">
                  <Globe size={16} className="mr-1" />
                  FR
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50">
                <DropdownMenuItem className="hover:bg-muted cursor-pointer">
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-muted cursor-pointer">
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
            <div className="flex flex-col space-y-1 p-4">
              <a href="/" className={`${getNavLinkClass('/')} py-3 px-2 rounded`}>
                ACCUEIL
              </a>
              <a href="/presentation" className={`${getNavLinkClass('/presentation')} py-3 px-2 rounded`}>
                PRÉSENTATION
              </a>
              
              {/* Mobile Domaines section */}
              <div className="py-2">
                <p className="text-primary-foreground font-medium px-2 mb-2">DOMAINES D'INTERVENTION</p>
                <div className="ml-4 space-y-2">
                  <a href="/reseaux-distribution" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    Réseaux de Distribution
                  </a>
                  <a href="/relations-commerciales" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    Relations et Pratiques Commerciales
                  </a>
                  <a href="/accompagnement-juridique" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    Accompagnement Juridique Externalisé
                  </a>
                </div>
              </div>
              
              <a href="/actualites" className={`${getNavLinkClass('/actualites')} py-3 px-2 rounded`}>
                ACTUALITÉS
              </a>
              <a href="/#contact" className={`${getNavLinkClass('#contact')} py-3 px-2 rounded`}>
                CONTACT
              </a>
              <div className="py-2 px-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-secondary border border-primary-foreground/20 hover:border-secondary">
                      <Globe size={16} className="mr-1" />
                      FR
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border shadow-lg z-50">
                    <DropdownMenuItem className="hover:bg-muted cursor-pointer">
                      🇫🇷 Français
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-muted cursor-pointer">
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
