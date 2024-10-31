import NewsSection from '@/components/NewsSection';
import StocksSection from '@/components/StocksSection';
import SportsSection from '@/components/SportsSection';

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
        <NewsSection />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Market Overview</h2>
        <StocksSection />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Sports Updates</h2>
        <SportsSection />
      </section>
    </main>
  );
}