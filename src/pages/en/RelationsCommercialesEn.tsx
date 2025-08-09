import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Layers, Target, Users, FileText, Building } from 'lucide-react';
import Seo from '@/components/Seo';

const CommercialRelations = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Seo title="Commercial Relations | Audestya Avocat" description="B2B and B2C contract structuring, risk prevention and compliance for resilient commercial relationships." canonical={`${window.location.origin}/en/commercial-relations`} />
      <Navigation />

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Commercial Relations & Practices
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-12">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                </div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                  Securing your B2B and B2C relationships and practices
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                <div className="space-y-4 max-w-4xl mx-auto text-left">
                  <p className="text-lg text-muted-foreground text-justify">
                    <strong>In a fast-changing environment, the strength of your commercial relationships determines performance, resilience and brand image.</strong>
                  </p>
                  <p className="text-lg text-muted-foreground text-justify">
                    <strong>My role:</strong> to secure, structure and reinforce your high-stakes relationships at every stage of your business.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-background shadow-soft border-0 mb-12 hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-12 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Shield className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    B2B – Contractual framework and risk prevention
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
                </div>

                <p className="text-lg text-primary mb-8 text-justify">
                  Your commercial relationships structure your business model. I intervene to frame your strategic contracts, secure your practices and anticipate risky situations.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Contract structuring</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">T&Cs, T&As, purchase or sales contracts, single agreement, service, referencing or subcontracting contracts, complex partnerships, etc.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Distribution contracts: franchise, concession, exclusive or selective distribution, commercial agents, commission agents, e-commerce, platforms, etc.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Support in negotiating commercial leases</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Prevention of commercial risks</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Anticipation of risks related to the termination of established commercial relationships</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Audit of your commercial practices: pricing policy, payment terms</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Prevention of restrictive competition practices and significant imbalances</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            <Card className="group bg-background shadow-soft border-0 mb-12 hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-12 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Shield className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    B2C – Securing offers, materials and campaigns
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
                </div>

                <p className="text-lg mb-8 text-justify text-primary">
                  In a context of increased scrutiny on consumer rights and transparency, any poorly framed offer, imprecise material or non-compliant campaign may expose your brand to legal or reputational risk.
                </p>
                <p className="text-lg mb-8 text-justify text-primary">
                  I secure your client relationship, protect your image and make your commercial actions reliable.
                </p>

                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-justify">Drafting or validation of your T&Cs, Terms of Use, privacy policies to ensure compliance and clarity</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-justify">Securing pre-contractual information materials throughout the customer journey: product sheets, subscription terms, quotes, etc.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-justify">Legal audit and framing of your campaigns, including messages, materials and promotional mechanics (advertising, sweepstakes, gifts, etc.) to prevent misleading or unfair practices and reputational risk</p>
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant mb-12 group hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Layers className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-white mb-6">A tailored approach</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-white/30 to-white/60 mx-auto mb-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-secondary-foreground font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Needs analysis</h3>
                        <p className="text-white/80 text-justify">Thorough understanding of your activity and commercial challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-secondary-foreground font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Legal audit</h3>
                        <p className="text-white/80 text-justify">Assessment of current practices and risk identification</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-secondary-foreground font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Customized solutions</h3>
                        <p className="text-white/80 text-justify">Drafting and negotiation tailored to your industry</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-accent p-8 rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-6">Industries</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div><p>Retail and consumer goods</p></div>
                      <div className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div><p>E-commerce and marketplaces</p></div>
                      <div className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div><p>Franchises and organized networks</p></div>
                      <div className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div><p>Business services</p></div>
                      <div className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div><p>Industry and manufacturing</p></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 via-white/60 to-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialRelations;
