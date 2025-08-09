
import { Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isEN = location.pathname === '/en' || location.pathname.startsWith('/en/');
  const prefix = isEN ? '/en' : '';

  const handleContactClick = () => {
    navigate(prefix || '/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
              {isEN ? 'Lawyer at the Paris Bar' : 'Avocat au Barreau de Paris'}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/haiaelzufari" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-secondary">{isEN ? 'Navigation' : 'Navigation'}</h4>
            <div className="space-y-2">
              <a href={`${prefix}/#accueil`} className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                {isEN ? 'Home' : 'Accueil'}
              </a>
              <a href={`${prefix}/presentation`} className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                {isEN ? 'Identity & Approach' : 'Identité & Approche'}
              </a>
              <a href={isEN ? `${prefix}/presentation` : `/presentation#domaines`} className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                {isEN ? 'Areas of practice' : "Domaines d'intervention"}
              </a>
              <button onClick={handleContactClick} className="block text-primary-foreground/80 hover:text-secondary transition-colors text-left">
                {isEN ? 'Contact' : 'Contact'}
              </button>
              <a href={isEN ? `${prefix}/fees` : `/honoraires`} className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                {isEN ? 'Fees' : 'Honoraires'}
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-secondary">{isEN ? 'Contact' : 'Contact'}</h4>
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
              © 2025 Audestya Avocat. {isEN ? 'All rights reserved.' : 'Tous droits réservés.'}
            </p>
            <div className="flex gap-6">
              <a href={isEN ? `${prefix}/legal-notices` : `/mentions-legales`} className="hover:text-secondary transition-colors">
                {isEN ? 'Legal notices' : 'Mentions légales'}
              </a>
              <a href={isEN ? `${prefix}/privacy-policy` : `/politique-confidentialite`} className="hover:text-secondary transition-colors">
                {isEN ? 'Privacy policy' : 'Politique de confidentialité'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
