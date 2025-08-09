import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Seo title="News | Audestya Avocat" description="Legal news, insights and practical guidance in distribution, contracts and consumer law." canonical={`${window.location.origin}/en/news`} />
      <Navigation />

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              News
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-12 text-center">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p className="text-xl font-medium text-primary">
                    Legal updates coming soon
                  </p>
                  <p className="leading-relaxed max-w-3xl mx-auto">
                    This section will soon feature curated legal news, analysis of recent reforms and practical guidance in distribution, contracts and consumer law that may impact your business.
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

export default News;
