import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Clock, Users, CheckCircle } from 'lucide-react';
import Seo from '@/components/Seo';

const Fees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Fees | Audestya Avocat" description="Transparent, tailored fee structures aligned with your stakes and needs." canonical={`${window.location.origin}/en/fees`} />
      <Navigation />

      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-8">
              Fees
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl font-semibold text-primary-foreground mb-4">
                Fees aligned with the reality of your stakes
              </p>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Terms of engagement and fees are defined upfront, with clarity and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="mb-16 border-0 shadow-lg group">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-xl text-foreground leading-relaxed">
                    Fees are set based on several criteria: nature and complexity of the case, workload, and professional practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mb-16">
              <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-12">
                Three billing methods may be proposed
              </h2>

              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                      <CreditCard className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Fixed fee
                    </h3>
                    <p className="text-muted-foreground">
                      (with or without success fee)
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:transform hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Clock className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Time spent
                    </h3>
                    <p className="text-muted-foreground">
                      based on an hourly rate
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:transform hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Users className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Retainer
                    </h3>
                    <p className="text-muted-foreground">
                      for regular support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <Card className="bg-gradient-primary border-0">
                <CardContent className="p-10">
                  <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-primary-foreground leading-relaxed">
                      Except in emergencies, terms are agreed at the start of the engagement via a fee agreement. Fees do not include external costs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fees;
