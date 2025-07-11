import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-law-office.jpg';

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
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            AVOCATE INDÉPENDANTE
          </h1>
          
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Je vous accompagne en droit de la distribution, des contrats et de la consommation, 
              avec pragmatisme, méthode et clarté.
            </p>
          </div>

          {/* Inspirational quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12 border border-white/20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <blockquote className="text-lg md:text-xl italic mb-4 text-secondary-light">
              « L'excellence n'est jamais le fruit du hasard. Elle est toujours le résultat d'une intention noble, 
              d'un effort sincère et d'une exécution intelligente. Elle reflète un choix réfléchi parmi de nombreuses 
              possibilités – c'est le choix, et non le hasard, qui détermine votre destin. »
            </blockquote>
            <cite className="text-sm font-medium text-white">Inspirée de la pensée d'Aristote</cite>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-glow font-semibold px-8 py-4 text-lg"
            >
              Consultation Gratuite
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              Découvrir Mon Approche
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;