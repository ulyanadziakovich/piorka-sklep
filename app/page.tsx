import Navigation from './components/Navigation';
import Produkty from './components/Sprzedaz';
import Kontakt from './components/Kontakt';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="h-[72px] sm:h-[80px] md:h-[88px]"></div>
      <Produkty />
      <Kontakt />

    </div>
  );
}
