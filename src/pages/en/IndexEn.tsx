import Navigation from '@/components/Navigation';
import HeroSectionEn from '@/components/HeroSectionEn';
import { Card, CardContent } from '@/components/ui/card';
import ContactSectionEn from '@/components/ContactSectionEn';
import Footer from '@/components/Footer';
import { Network } from 'lucide-react';
import Seo from '@/components/Seo';

const IndexEn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Audestya Avocat | Business-focused legal expertise" description="Pragmatic legal solutions in Distribution, Contracts & Consumer Law. Clear, methodical, and aligned with your business goals." canonical={`${window.location.origin}/en`} />
      <Navigation />
      <HeroSectionEn />

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 leading-tight">
                Structure, secure, and support your decisions
              </h2>
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-light text-primary leading-relaxed">
                      Legal solutions anchored in your business challenges
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
                <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-light text-primary leading-relaxed">
                      Clarity, method, and high standards at every step
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-medium italic">
                Law only has impact when it enlightens action.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
                  Two complementary areas of intervention
                </h3>
              </div>

              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-background to-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mr-6 group-hover:bg-primary transition-colors duration-300">
                        <Network className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                      <div className="text-center">
                        <h3 className="font-serif text-3xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                          Distribution - Contracts - Consumer
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 mb-2"></div>
                        <p className="text-muted-foreground italic mt-2 text-lg">
                          Structure action, prevent risk, support your activities.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Negotiation and securing of contracts, whether standard, complex or strategic
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Structuring and legal support for distribution networks
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Drafting legal tools (framework agreements, T&Cs, commercial policies, etc.)
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Contract audits tailored to your current priorities
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Advice on relationships with suppliers, distributors or partners
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Supervision of promotional practices and consumer protection
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </Card>

                <Card className="bg-gradient-to-br from-background to-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mr-6 group-hover:bg-primary transition-colors duration-300">
                        <svg className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <h3 className="font-serif text-3xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                          Externalized Legal Support
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 mb-2"></div>
                        <p className="text-muted-foreground italic mt-2 text-lg">
                          Targeted legal support for your projects, decisions and teams.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Legal project management for structural initiatives
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            Ad-hoc assignments
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </Card>
              </div>

              <div className="mt-16 text-center">
                <a 
                  href="/en/presentation" 
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-elegant text-lg"
                >
                  Learn more
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSectionEn />
      <Footer />
    </div>
  );
};

export default IndexEn;
