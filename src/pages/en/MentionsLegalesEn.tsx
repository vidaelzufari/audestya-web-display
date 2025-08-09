import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Seo from '@/components/Seo';

const LegalNotices = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Seo title="Legal Notices | Audestya Avocat" description="Legal notices and information about the website publisher and hosting provider." canonical={`${window.location.origin}/en/legal-notices`} />
      <Navigation />

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Legal Notices
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  The website www.audestya-avocat.com is referred to below as the “Site”.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Site Publisher
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-primary">Name:</strong> Haia El Zufari</p>
                  <p><strong className="text-primary">Profession:</strong> Lawyer at the Paris Bar</p>
                  <p><strong className="text-primary">Status:</strong> Sole proprietor – Regulated liberal profession</p>
                  <p><strong className="text-primary">SIREN number:</strong> 943 937 789</p>
                  <p><strong className="text-primary">EU VAT number:</strong> FR 35 943 937 789</p>
                  <p><strong className="text-primary">Phone:</strong> +33 6 85 37 81 80</p>
                  <p><strong className="text-primary">Email:</strong> haia.elzufari@audestya-avocat.com</p>
                  <p><strong className="text-primary">Postal address:</strong> 2 rue de Poissy - 75005 Paris - France</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Hosting Provider
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-primary">Company:</strong> Ionos SARL</p>
                  <p><strong className="text-primary">RCS number:</strong> 431 303 775</p>
                  <p><strong className="text-primary">Postal address:</strong> 7, place de la Gare - BP 70109 - 57200 Sarreguemines – France</p>
                  <p><strong className="text-primary">Phone:</strong> +33 9 70 80 89 11</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Intellectual Property
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Site content (texts, images, logos, graphics, etc.) is protected by intellectual property law and is the exclusive property of Haia El Zufari, unless otherwise stated.
                  </p>
                  <p>
                    Any reproduction or use, in whole or in part, without prior written authorization is prohibited.
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

export default LegalNotices;
