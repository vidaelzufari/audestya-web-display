
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, LinkedinIcon, Globe, ChevronDown } from 'lucide-react';
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

  // Language helpers
  const isEN = location.pathname === '/en' || location.pathname.startsWith('/en/');
  const prefix = isEN ? '/en' : '';
  const stripEn = (p: string) => (p.startsWith('/en') ? p.replace(/^\/en/, '') || '/' : p || '/');
  const currentWithHash = location.pathname + (location.hash || '');
  const frPath = stripEn(currentWithHash);
  const enPath = '/en' + stripEn(currentWithHash);

  const isActive = (path: string) => {
    if (path.startsWith('#')) return location.hash === path;
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

  // Routes per language
  const routes = {
    home: prefix + '/',
    presentation: prefix + '/presentation',
    domainesLabel: isEN ? 'AREAS OF PRACTICE' : "DOMAINES D'INTERVENTION",
    d1: isEN ? '/en/distribution-networks' : '/reseaux-distribution',
    d2: isEN ? '/en/commercial-relations' : '/relations-commerciales',
    d3: isEN ? '/en/external-legal-support' : '/accompagnement-juridique',
    news: isEN ? '/en/news' : '/actualites',
    contact: prefix + '/#contact',
  } as const;

  return (
    <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href={prefix || '/'} className="flex items-center hover:opacity-80 transition-opacity">
            <h1 className="font-serif text-2xl font-bold text-primary-foreground">
              AUDESTYA
            </h1>
            <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href={routes.home} className={getNavLinkClass(routes.home)}>
              {isEN ? 'HOME' : 'ACCUEIL'}
            </a>
            <a href={routes.presentation} className={getNavLinkClass(routes.presentation)}>
              {isEN ? 'IDENTITY & APPROACH' : "IDENTITÉ & APPROCHE"}
            </a>
            
            {/* Dropdown for Domaines */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-primary-foreground hover:text-secondary font-medium text-sm transition-colors flex items-center">
                  {routes.domainesLabel}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border shadow-lg z-50 w-64">
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <a href={routes.d1} className="w-full">
                    {isEN ? 'Distribution Networks' : 'Réseaux de Distribution'}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <a href={routes.d2} className="w-full">
                    {isEN ? 'Commercial Relations & Practices' : 'Relations et Pratiques Commerciales'}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <a href={routes.d3} className="w-full">
                    {isEN ? 'Externalized Legal Support' : 'Accompagnement Juridique Externalisé'}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href={routes.news} className={getNavLinkClass(routes.news)}>
              {isEN ? 'NEWS' : 'ACTUALITÉS'}
            </a>
            <a href={routes.contact} className={getNavLinkClass('#contact')}>
              {isEN ? 'CONTACT' : 'CONTACT'}
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
                  {isEN ? 'EN' : 'FR'}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border shadow-lg z-50">
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <a href={frPath}>🇫🇷 Français</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <a href={enPath}>🇬🇧 English</a>
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
              <a href={routes.home} className={`${getNavLinkClass(routes.home)} py-3 px-2 rounded`}>
                {isEN ? 'HOME' : 'ACCUEIL'}
              </a>
              <a href={routes.presentation} className={`${getNavLinkClass(routes.presentation)} py-3 px-2 rounded`}>
                {isEN ? 'IDENTITY & APPROACH' : "IDENTITÉ & APPROCHE"}
              </a>
              
              {/* Mobile Domaines section */}
              <div className="py-2">
                <p className="text-primary-foreground font-medium px-2 mb-2">{routes.domainesLabel}</p>
                <div className="ml-4 space-y-2">
                  <a href={routes.d1} className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    {isEN ? 'Distribution Networks' : 'Réseaux de Distribution'}
                  </a>
                  <a href={routes.d2} className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    {isEN ? 'Commercial Relations & Practices' : 'Relations et Pratiques Commerciales'}
                  </a>
                  <a href={routes.d3} className="block text-primary-foreground/80 hover:text-secondary transition-colors py-1 px-2 text-sm">
                    {isEN ? 'Externalized Legal Support' : 'Accompagnement Juridique Externalisé'}
                  </a>
                </div>
              </div>
              
              <a href={routes.news} className={`${getNavLinkClass(routes.news)} py-3 px-2 rounded`}>
                {isEN ? 'NEWS' : 'ACTUALITÉS'}
              </a>
              <a href={routes.contact} className={`${getNavLinkClass('#contact')} py-3 px-2 rounded`}>
                {isEN ? 'CONTACT' : 'CONTACT'}
              </a>
              <div className="py-2 px-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-primary-foreground hover:text-secondary border border-primary-foreground/20 hover:border-secondary transition-colors flex items-center px-3 py-1.5 rounded text-sm">
                      <Globe size={16} className="mr-1" />
                      {isEN ? 'EN' : 'FR'}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border shadow-lg z-50">
                    <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                      <a href={frPath}>🇫🇷 Français</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                      <a href={enPath}>🇬🇧 English</a>
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
