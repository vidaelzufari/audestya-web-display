import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileText, Users, Target, Layers } from 'lucide-react';
import Seo from '@/components/Seo';

const DistributionNetworks = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Seo title="Distribution Networks | Audestya Avocat" description="Legal structuring and protection of your distribution network: model design, contracts, compliance and growth." canonical={`${window.location.origin}/en/distribution-networks`} />
      <Navigation />

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Distribution Networks
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-16">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                </div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                  Structuring your distribution network
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                <div className="space-y-4 max-w-4xl mx-auto text-left">
                  <p className="text-lg text-muted-foreground">
                    <strong>Creating a network is one thing. Structuring it to last, scale and embody the brand is another.</strong>
                  </p>
                  <p className="text-lg text-muted-foreground text-justify">
                    <strong>My role:</strong> to secure each step of your development and support your strategy.
                  </p>
                  <p className="text-lg text-muted-foreground text-justify">
                    <strong>Objective:</strong> lay solid legal foundations for a sustainable network model aligned with your growth ambitions and operational constraints.
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
                    B2B – Securing your network
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>
                  I assist you in designing, adjusting or optimizing your distribution model:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Choosing the legal framework adapted to your strategy: license, franchise, commission-affiliation, concession</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Checking trademark protection (with an IP attorney)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Framing the pre-contractual phase: risk prevention and building trust</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-justify">Strategic review of your operations manual: consistency and alignment with contracts</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Defining supply flows between the network head and members</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Legal support for expansion strategy (multi-sites, master franchise, …)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Training on model fundamentals for operational teams</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Preventing anti-competitive practices and significant imbalances</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-accent rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-6">Tailored support and drafting:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                        <p className="text-justify">Pre-contractual information document (DIP)</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                        <p className="text-justify">Contracts: reservation, franchise, trademark license, exclusive concession</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                        <p className="text-justify">General terms and conditions of sale (T&Cs) within the network</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                        <p className="text-justify">Supply, IT, logistics and partnership agreements</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                        <p className="text-justify">Prospecting materials and network recruitment documents</p>
                      </div>
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
                    B2C – Securing the client-consumer relationship
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>
                  Because the strength of your network also depends on the compliance of your offer towards consumers, I also intervene on:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Legal analysis of your commercial offers (products, services, subscriptions…)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Securing your e-commerce website (sales, delivery, after-sales service)</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Drafting or validation of your T&Cs, Terms of Use, privacy policy</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-justify">Legal validation of your marketing materials and promotional campaigns</p>
                    </div>
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
                  <h2 className="font-serif text-4xl font-bold mb-6">Methodology</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-white/30 to-white/60 mx-auto mb-6"></div>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    A collaborative approach for solutions adapted to your reality
                  </p>
                </div>

                <div className="relative">
                  <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-white/30 z-0"></div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    <div className="text-center group/item">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 group-hover/item:bg-primary transition-colors duration-300">
                        <Users className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Co-design workshops</h3>
                    </div>
                    <div className="text-center group/item">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 group-hover/item:bg-primary transition-colors duration-300">
                        <Target className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Identification of strategic focus points</h3>
                    </div>
                    <div className="text-center group/item">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 group-hover/item:bg-primary transition-colors duration-300">
                        <Users className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Interviews with operational teams</h3>
                    </div>
                    <div className="text-center group/item">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 group-hover/item:bg-primary transition-colors duration-300">
                        <FileText className="w-8 h-8 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Design of customized contract packages</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from white/30 via-white/60 to-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DistributionNetworks;
