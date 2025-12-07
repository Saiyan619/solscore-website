import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import MarketPreview from './components/MarketPreview/MarketPreview';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MarketPreview />
      <Features />
      <Footer />
    </div>
  )
}

export default App
