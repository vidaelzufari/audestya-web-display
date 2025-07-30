import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieSettings from '@/components/CookieSettings';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Politique des Cookies
            </h1>
            <p className="text-xl opacity-90">
              Gestion et paramétrage de vos préférences cookies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <CookieSettings />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;