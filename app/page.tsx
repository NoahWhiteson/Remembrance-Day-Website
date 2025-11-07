import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import RespectSection from './components/RespectSection';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <QuoteSection />
      <RespectSection />
    </main>
  );
}
