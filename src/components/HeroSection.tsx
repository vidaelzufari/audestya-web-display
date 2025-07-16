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
        <div className="max-w-4xl mx-auto text-center text-background">
          {/* Modern badge-style header */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px bg-background/40 w-12"></div>
            <span className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 text-sm font-medium tracking-wider">
              AVOCATE INDIVIDUELLE
            </span>
            <div className="h-px bg-background/40 w-12"></div>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Expertise juridique dédiée<br />
            <span className="text-2xl md:text-3xl font-light opacity-90">aux entreprises</span>
          </h1>
          
          <div className="space-y-6 mb-12">
            <p className="text-lg md:text-xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Je vous accompagne en droit de la distribution, des contrats et de la consommation, 
              avec pragmatisme, méthode et clarté.
            </p>
          </div>

          {/* Inspirational quote */}
          <div className="bg-background/95 backdrop-blur-sm rounded-xl p-8 mb-12 border border-border shadow-soft animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <blockquote className="text-base md:text-lg italic mb-4 text-primary">
              « L'excellence n'est jamais le fruit du hasard. Elle est toujours le résultat d'une intention noble, 
              d'un effort sincère et d'une exécution intelligente. Elle reflète un choix réfléchi parmi de nombreuses 
              possibilités – c'est le choix, et non le hasard, qui détermine votre destin. »
            </blockquote>
            <cite className="text-sm font-medium text-foreground">Inspirée de la pensée d'Aristote</cite>
          </div>

          {/* CTA buttons */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary font-semibold px-8 py-4 text-lg"
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