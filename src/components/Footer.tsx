import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si on n'est pas sur la page d'accueil, rediriger vers l'accueil avec l'ancre
      window.location.href = '/#contact';
    }
  };

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                  AUDESTYA
                </h3>
                <span className="ml-2 text-secondary text-sm font-medium tracking-wider">AVOCAT</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Cabinet d'avocat spécialisé en droit de la distribution, des contrats et de la consommation. 
                Accompagnement juridique des entreprises avec expertise et pragmatisme.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground/80">+33 6 85 35 37 81</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground/80">haia.elzufari@audestya-avocat.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground/80">Paris, France</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Accueil
                </Link>
                <Link to="/presentation" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Identité & Approche
                </Link>
                <a href="https://audestya-avocat.com/presentation#domaines" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Domaines d'intervention
                </a>
                <button onClick={handleContactClick} className="block text-primary-foreground/80 hover:text-secondary transition-colors text-left">
                  Contact
                </button>
              </div>
            </div>

            {/* Liens utiles */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Informations</h4>
              <div className="space-y-2">
                <Link to="/honoraires" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Honoraires
                </Link>
                <Link to="/actualites" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Actualités
                </Link>
                <Link to="/mentions-legales" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Mentions légales
                </Link>
                <Link to="/politique-confidentialite" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © 2025 Audestya Avocat - Haia El Zufari. Tous droits réservés.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/haiaelzufari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;