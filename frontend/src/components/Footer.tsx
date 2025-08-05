
import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePageNavigation = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleAccueilClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand and description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="font-serif text-xl md:text-2xl font-bold">AUDESTYA</h3>
              <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Haia EL ZUFARI<br/>
              Avocat au Barreau de Paris
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/haiaelzufari" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-secondary">Navigation</h4>
            <div className="space-y-2">
              <button onClick={handleAccueilClick} className="block text-primary-foreground/80 hover:text-secondary transition-colors text-left">
                Accueil
              </button>
              <button onClick={() => handlePageNavigation('/presentation')} className="block text-primary-foreground/80 hover:text-secondary transition-colors text-left">
                Identité & Approche
              </button>
              <button onClick={handleContactClick} className="block text-primary-foreground/80 hover:text-secondary transition-colors text-left">
                Contact
              </button>
              <button onClick={() => handlePageNavigation('/honoraires')} className="block text-primary-foreground/80 hover:text-secondary transition-colors text-left">
                Honoraires
              </button>
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
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin size={16} />
                Paris - France
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © 2025 Audestya Avocat. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <button onClick={() => handlePageNavigation('/mentions-legales')} className="hover:text-secondary transition-colors">
                Mentions légales
              </button>
              <button onClick={() => handlePageNavigation('/politique-cookies')} className="hover:text-secondary transition-colors">
                Cookies
              </button>
              <button onClick={() => handlePageNavigation('/politique-confidentialite')} className="hover:text-secondary transition-colors">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
