import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary-foreground/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
              AUDESTYA
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground to-transparent flex-1 max-w-32"></div>
              <span className="text-secondary text-xl font-medium tracking-wider">AVOCAT</span>
              <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground to-transparent flex-1 max-w-32"></div>
            </div>
            <p className="text-2xl md:text-3xl font-light mb-8 opacity-90">
              Haia EL ZUFARI
            </p>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
              Avocat au Barreau de Paris
            </p>
          </div>

          {/* Specialization */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Distribution • Contrats • Consommation
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                Accompagnement juridique des entreprises dans leurs relations commerciales et leur développement
              </p>
            </div>
          </div>

          {/* Quote section with animations */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto group hover:shadow-elegant hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed mb-4">
                  « L'excellence n'est jamais le fruit du hasard, mais le choix d'une vision, d'une méthode et d'une exigence. »
                </blockquote>
                <cite className="text-lg opacity-80">— Haia EL ZUFARI</cite>
              </div>
              
              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 via-secondary to-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
              <a href="#contact">
                Prendre contact
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
              <a href="#domaines">
                Découvrir mes domaines
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;