import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 leading-tight">
            Maître Céline
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              DUFOUR-GOMEZ
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Avocat en droit des affaires
            <br />
            <span className="text-primary font-medium">Distribution • Contrats • Consommation</span>
          </p>
          
          {/* Quote section with animations */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-2xl mb-12 max-w-4xl mx-auto hover:shadow-elegant hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl font-light text-primary italic leading-relaxed mb-6">
                « L'excellence n'est jamais le fruit du hasard, mais le choix d'une vision, d'une méthode et d'une exigence. »
              </blockquote>
              <cite className="text-lg text-muted-foreground font-medium">
                — Maître Céline DUFOUR-GOMEZ
              </cite>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/presentation" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-elegant"
            >
              Découvrir mon approche
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Prendre contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;