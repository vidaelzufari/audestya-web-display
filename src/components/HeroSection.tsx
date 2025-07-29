
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-aerial-view.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleDiscoverApproach = () => {
    navigate('/presentation');
    // Petit délai pour s'assurer que la page est chargée avant de faire le scroll
    setTimeout(() => {
      const element = document.getElementById('mon-approche');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-center text-background">
          {/* Modern badge-style header */}
          <div className="inline-flex items-center gap-6 mb-16 animate-fade-in">
            <div className="h-px bg-background/40 w-20"></div>
            <span className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-6 py-3 text-base font-medium tracking-wider">
              DISTRIBUTION, CONTRATS ET CONSOMMATION
            </span>
            <div className="h-px bg-background/40 w-20"></div>
          </div>
          
          
          
          <div className="space-y-12 mb-20">
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{ animationDelay: '0.2s' }}>
              Une expertise juridique pragmatique, stratégique et alignée sur vos enjeux concrets
            </p>
          </div>

          {/* Inspirational quote */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-12 mb-20 border border-border shadow-soft animate-scale-in max-w-4xl mx-auto hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <blockquote className="text-lg md:text-xl italic mb-6 text-primary leading-relaxed">
                « L'excellence n'est jamais le fruit du hasard, mais le choix d'une vision, d'une méthode et d'une exigence. »
              </blockquote>
              <cite className="text-base font-medium text-foreground">Inspirée de la pensée d'Aristote</cite>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </div>

          {/* CTA buttons */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary font-semibold px-12 py-6 text-xl"
              onClick={handleDiscoverApproach}
            >
              Découvrir Mon Approche
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-background animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
