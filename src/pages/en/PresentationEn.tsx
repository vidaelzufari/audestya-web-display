import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import DomainsSection from '@/components/DomainsSection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Seo from '@/components/Seo';
import { Briefcase, Wrench, Handshake, Target, Lightbulb, Compass } from 'lucide-react';
import lawyerPortrait from '/lovable-uploads/f1f60b6e-da32-4ebb-a9c2-cf1d82139662.png';

const PresentationEn = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-accent">
      <Seo title="Identity & Approach | Audestya Avocat" description="A structured, pragmatic and trust-based legal approach to serve decisive business actions." canonical={`${window.location.origin}/en/presentation`} />
      <Navigation />

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              IDENTITY & APPROACH
            </h1>
          </div>
        </div>
      </section>

      <section id="mon-approche" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                My approach
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A structured approach built around three pillars.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden transition-all duration-500 relative group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                        <Briefcase className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Proven expertise
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>
                        My in-house career gave me a strong business culture, a deep understanding of operational realities and the ability to engage with executive teams as well as legal departments and operational teams.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden transition-all duration-500 relative lg:mt-8 group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                        <Wrench className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Pragmatic mindset
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg text-justify text-left">
                        I don’t just state legal rules — I place them in the context of your objectives and constraints to deliver concrete solutions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-background/90 backdrop-blur-sm shadow-elegant border-0 overflow-hidden transition-all duration-500 relative group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 flex justify-center">
                      <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center shadow-md group-hover:bg-primary transition-colors duration-300">
                        <Handshake className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        Trust-based relationship
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg text-justify text-left">
                        I am committed with loyalty, clarity and high standards. I am transparent when your needs fall outside my scope, and I strive to build a close relationship based on listening and anticipation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="presentation" className="py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-lg"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <div className="bg-background rounded-xl p-8 shadow-soft mb-12 border">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="flex-1 space-y-6 text-lg text-muted-foreground">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 text-left">
                    Bio
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-6"></div>
                  <p className="text-left leading-relaxed text-justify">
                    After more than fifteen years working in-house, first as a lawyer and then as General Counsel, I chose to practice independently to put my expertise at the service of businesses.
                  </p>
                  <div className="text-left leading-relaxed text-justify">
                    <p className="mb-3">This choice is based on:</p>
                    <ul className="space-y-2 ml-4 list-disc">
                      <li><strong>A strong conviction:</strong> law is a lever for structuring, securing and creating value when understood, applied well and aligned with the company’s operational reality;</li>
                      <li><strong>A clear ambition:</strong> to support companies differently, leveraging my knowledge of their internal challenges.</li>
                    </ul>
                  </div>
                  <p className="text-left leading-relaxed text-justify">
                    I have worked within growing or transforming mid-sized companies across sectors such as textiles, restaurants, cinema operations and fitness. This diversity developed a cross-functional and strategic legal vision and the ability to speak with executive teams as well as operational teams.
                  </p>
                </div>
                <div className="w-full md:w-80 h-96 rounded-lg overflow-hidden shadow-card flex-shrink-0">
                  <img 
                    src={lawyerPortrait} 
                    alt="Lawyer portrait" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optionally reuse DomainsSection in EN later or create an EN version */}
      <Footer />
    </div>
  );
};

export default PresentationEn;
