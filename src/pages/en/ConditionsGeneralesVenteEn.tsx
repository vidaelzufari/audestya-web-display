import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Seo from '@/components/Seo';

const TermsOfSale = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Seo title="Terms of Sale | Audestya Avocat" description="General terms and conditions of sale (within the network) and related legal information." canonical={`${window.location.origin}/en/terms-of-sale`} />
      <Navigation />

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Terms of Sale
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6 text-center">
                  General Terms and Conditions of Sale (T&Cs)
                </h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Drafting and validation of T&Cs within a distribution network, ensuring compliance and clarity of the offer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfSale;
