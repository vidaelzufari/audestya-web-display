
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-aerial-view.jpg';

const HeroSection = () => {
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
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-12 mb-20 border border-border shadow-soft animate-scale-in max-w-4xl mx-auto" style={{ animationDelay: '0.4s' }}>
            <blockquote className="text-lg md:text-xl italic mb-6 text-primary leading-relaxed">
              « L'excellence n'est jamais le fruit du hasard, mais le choix d'une vision, d'une méthode et d'une exigence. »
            </blockquote>
            <cite className="text-base font-medium text-foreground">Inspirée de la pensée d'Aristote</cite>
          </div>

          {/* CTA buttons */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/presentation#mon-approche">
              <Button 
                variant="outline" 
                size="lg"
                className="border-background text-background hover:bg-background hover:text-primary font-semibold px-12 py-6 text-xl"
              >
                Découvrir Mon Approche
              </Button>
            </Link>
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
