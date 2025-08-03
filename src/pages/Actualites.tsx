import { LinkedInFeed } from '@/components/LinkedInFeed';

const Actualites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Actualités
          </h1>
          <div className="bg-card rounded-lg shadow-lg p-6">
            <LinkedInFeed />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Actualites;