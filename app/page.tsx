import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import RespectSection from './components/RespectSection';
import FinalTribute from './components/FinalTribute';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <QuoteSection />
      <RespectSection />
      
      {/* Card Stack Container */}
      <div className="relative">
        <FinalTribute />
        <CallToAction />
      </div>
      
      <Footer />
    </main>
  );
}
