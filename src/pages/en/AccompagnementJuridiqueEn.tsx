import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Target, Users, Handshake, FileText, Building2 } from 'lucide-react';
import Seo from '@/components/Seo';

const ExternalLegalSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Seo title="Externalized Legal Support | Audestya Avocat" description="Agile and structuring legal support: project steering, ad-hoc missions, cross-functional assistance." canonical={`${window.location.origin}/en/external-legal-support`} />
      <Navigation />

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Externalized Legal Support
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
                  Agile, structuring legal collaboration
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed text-justify mb-8">
                  Tailored legal support embedded in your operations to accelerate decisions and secure execution.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
                  Areas of intervention
                </h2>
                <div className="space-y-8">
                  <div className="p-6 bg-gradient-accent rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">Project steering</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">for structuring initiatives</p>
                  </div>
                  <div className="p-6 bg-gradient-accent rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">Ad-hoc support</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">targeted assignments</p>
                  </div>
                  <div className="p-6 bg-gradient-accent rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">Cross-functional assistance</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">ongoing legal support for teams</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
                  <p className="text-lg">
                    Except in emergencies, terms are agreed at the start of the engagement via a fee agreement.
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">Fees do not include external costs.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExternalLegalSupport;
