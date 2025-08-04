
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
    const baseClass = "transition-colors font-medium relative text-sm";
    const inactiveClass = "text-primary-foreground/90 hover:text-secondary hover:font-semibold";
    const activeClass = "text-white font-semibold";
    
    if (isActive(path)) {
      return `${baseClass} ${activeClass} after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white`;
    }
    return `${baseClass} ${inactiveClass}`;
  };

  return (
    <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
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
            <Link to="/presentation" className={`${getNavLinkClass('/presentation')} py-3 px-2 rounded`}>
              IDENTITÉ & APPROCHE
            </Link>
            
            {/* Dropdown for Domaines */}
            <div className="relative group">
              <Link to="/presentation#domaines" className="text-primary-foreground hover:text-secondary font-medium text-sm transition-colors flex items-center py-3 px-2">
                  DOMAINES D'INTERVENTION
                  <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              {/* Hover submenu */}
              <div className="absolute top-full left-0 w-64 bg-background/95 backdrop-blur-sm border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/reseaux-distribution" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    Réseaux de Distribution
                </Link>
                <Link to="/relations-commerciales" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    Relations et Pratiques Commerciales
                </Link>
                <Link to="/accompagnement-juridique" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    Accompagnement Juridique Externalisé
                </Link>
              </div>
            </div>
            
            <Link to="/actualites" className={`${getNavLinkClass('/actualites')} py-3 px-2 rounded`}>
              ACTUALITÉS
            </Link>
            <Link to="/portail-client" className={`${getNavLinkClass('/portail-client')} py-3 px-2 rounded bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white px-3 py-2`}>
              PORTAIL CLIENT
            </Link>
            <a href="/#contact" className={getNavLinkClass('#contact')}>
              CONTACT
            </a>
            
            {/* LinkedIn icon */}
            <a 
              href="https://www.linkedin.com/in/haiaelzufari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            
            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-primary-foreground hover:text-secondary border border-primary-foreground/20 hover:border-secondary text-sm transition-colors flex items-center px-3 py-1.5 rounded">
                  <Globe size={16} className="mr-1" />
                  FR
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border shadow-lg z-50">
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
            <button
              onClick={toggleMenu}
              className="text-primary-foreground hover:text-secondary transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-primary/10 rounded-lg mx-2">
            <div className="flex flex-col space-y-1 p-4">
              <a href="/" className={`${getNavLinkClass('/')} py-3 px-2 rounded`}>
                ACCUEIL
              </a>
              <Link to="/presentation" className={`${getNavLinkClass('/presentation')} py-3 px-2 rounded`}>
                IDENTITÉ & APPROCHE
              </Link>
              
              {/* Mobile Domaines section */}
              <div className="py-2">
                <Link to="/presentation#domaines" className="text-primary-foreground font-medium px-2 mb-2 block hover:text-secondary transition-colors">DOMAINES D'INTERVENTION</Link>
                <div className="ml-4 space-y-2">
                  <Link to="/reseaux-distribution" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    Réseaux de Distribution
                  </Link>
                  <Link to="/relations-commerciales" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    Relations et Pratiques Commerciales
                  </Link>
                  <Link to="/accompagnement-juridique" className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    Accompagnement Juridique Externalisé
                  </Link>
                </div>
              </div>
              
              <Link to="/actualites" className={`${getNavLinkClass('/actualites')} py-3 px-2 rounded`}>
                ACTUALITÉS
              </Link>
              <a href="/#contact" className={`${getNavLinkClass('#contact')} py-3 px-2 rounded`}>
                CONTACT
              </a>
              <div className="py-2 px-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-primary-foreground hover:text-secondary border border-primary-foreground/20 hover:border-secondary transition-colors flex items-center px-3 py-1.5 rounded text-sm">
                      <Globe size={16} className="mr-1" />
                      FR
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border shadow-lg z-50">
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
