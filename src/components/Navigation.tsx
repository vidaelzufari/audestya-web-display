import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDomainesOpen, setIsDomainesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDomainesOpen(false);
  };

  const toggleDomaines = () => {
    setIsDomainesOpen(!isDomainesOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              } group-hover:text-secondary`}>
                AUDESTYA
              </span>
              <span className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
              } group-hover:text-secondary`}>
                AVOCAT
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-300 hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/') ? 'text-secondary' : ''}`}
            >
              Accueil
            </Link>
            
            <Link 
              to="/presentation" 
              className={`font-medium transition-colors duration-300 hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/presentation') ? 'text-secondary' : ''}`}
            >
              Présentation
            </Link>

            {/* Domaines Dropdown */}
            <div className="relative group">
              <button 
                className={`font-medium transition-colors duration-300 hover:text-secondary flex items-center gap-1 ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                } ${['/reseaux-distribution', '/relations-commerciales', '/accompagnement-juridique'].includes(location.pathname) ? 'text-secondary' : ''}`}
                onMouseEnter={() => setIsDomainesOpen(true)}
                onMouseLeave={() => setIsDomainesOpen(false)}
              >
                Domaines
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDomainesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-elegant transition-all duration-200 ${
                  isDomainesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsDomainesOpen(true)}
                onMouseLeave={() => setIsDomainesOpen(false)}
              >
                <div className="py-2">
                  <Link 
                    to="/reseaux-distribution" 
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                  >
                    Réseaux de Distribution
                  </Link>
                  <Link 
                    to="/relations-commerciales" 
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                  >
                    Relations Commerciales
                  </Link>
                  <Link 
                    to="/accompagnement-juridique" 
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                  >
                    Accompagnement Juridique
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/honoraires" 
              className={`font-medium transition-colors duration-300 hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/honoraires') ? 'text-secondary' : ''}`}
            >
              Honoraires
            </Link>
            
            <Link 
              to="/actualites" 
              className={`font-medium transition-colors duration-300 hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              } ${isActive('/actualites') ? 'text-secondary' : ''}`}
            >
              Actualités
            </Link>

            <Button 
              asChild 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-glow"
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:text-secondary' : 'text-primary-foreground hover:text-secondary'
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border/50">
            <Link 
              to="/" 
              className={`block px-4 py-3 text-foreground hover:text-secondary hover:bg-muted transition-colors ${
                isActive('/') ? 'text-secondary bg-muted' : ''
              }`}
              onClick={closeMenu}
            >
              Accueil
            </Link>
            
            <Link 
              to="/presentation" 
              className={`block px-4 py-3 text-foreground hover:text-secondary hover:bg-muted transition-colors ${
                isActive('/presentation') ? 'text-secondary bg-muted' : ''
              }`}
              onClick={closeMenu}
            >
              Présentation
            </Link>

            {/* Mobile Domaines */}
            <div>
              <button 
                className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:text-secondary hover:bg-muted transition-colors"
                onClick={toggleDomaines}
              >
                Domaines
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDomainesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`transition-all duration-200 overflow-hidden ${
                isDomainesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  to="/reseaux-distribution" 
                  className="block px-8 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-muted transition-colors"
                  onClick={closeMenu}
                >
                  Réseaux de Distribution
                </Link>
                <Link 
                  to="/relations-commerciales" 
                  className="block px-8 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-muted transition-colors"
                  onClick={closeMenu}
                >
                  Relations Commerciales
                </Link>
                <Link 
                  to="/accompagnement-juridique" 
                  className="block px-8 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-muted transition-colors"
                  onClick={closeMenu}
                >
                  Accompagnement Juridique
                </Link>
              </div>
            </div>

            <Link 
              to="/honoraires" 
              className={`block px-4 py-3 text-foreground hover:text-secondary hover:bg-muted transition-colors ${
                isActive('/honoraires') ? 'text-secondary bg-muted' : ''
              }`}
              onClick={closeMenu}
            >
              Honoraires
            </Link>
            
            <Link 
              to="/actualites" 
              className={`block px-4 py-3 text-foreground hover:text-secondary hover:bg-muted transition-colors ${
                isActive('/actualites') ? 'text-secondary bg-muted' : ''
              }`}
              onClick={closeMenu}
            >
              Actualités
            </Link>

            <div className="px-4 py-3">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full font-medium"
              >
                <a href="#contact" onClick={closeMenu}>Contact</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;