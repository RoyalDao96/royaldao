import './App.css';
import FAQs from './compontents/FAQs';
import Footer from './compontents/Footer';
import FooterBanner from './compontents/FooterBanner';
import Game from './compontents/Peek';
import Hero from './compontents/Hero';
import HowToRedeem from './compontents/HowToRedeem';
import Hub from './compontents/Hub';
import Hub2 from './compontents/Hub2';
import Hub3 from './compontents/Hub3';
import Milestone from './compontents/Milestone';
import Milestone2 from './compontents/Milestone2';
import Navbar from './compontents/Navbar';
import Packages from './compontents/Packages';
import Process from './compontents/Process';
import ProductDetails from './compontents/ProjectDetailSectors/ProductDetails';
import ProjectValue from './compontents/ProjectValue';
import PumpingCycle from './compontents/PumpingCycle';
import RedemptionMakeUsWorthy from './compontents/RedemptionMakeUsWorthy';
import Roadmap from './compontents/Roadmap';
import Strategy from './compontents/Strategy';
import TokenContract from './compontents/TokenContract';
import Tokenomic from './compontents/Tokenomic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Peek from './compontents/Peek';
import ManyMarkup from './compontents/Manymarkup';
import Utility from './compontents/Utility';
import Pillar from './compontents/Pillar';
import About from './compontents/About';
import RubyPackages from './compontents/RubyPackages';
import RubyProductDetails from './compontents/ProjectDetailSectors/RubyProductDetails';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            {/* <Milestone /> */}
            {/* <Milestone2 /> */}
            <Peek />
            <ManyMarkup />
            {/* <Hub />
            <Hub2 />
            <Hub3 /> */}
            <About />
            <Pillar />
            <Utility />
            <Packages />
            <RubyPackages />
            {/* <Roadmap /> */}
            <Process />
            <ProjectValue />
            {/* <Strategy /> */}
            {/* <RedemptionMakeUsWorthy /> */}
            <HowToRedeem />
            <RedemptionMakeUsWorthy />
            {/* <PumpingCycle /> */}
            {/* <Tokenomic /> */}
            <TokenContract />
            <FAQs />
            <FooterBanner />
            <Footer />
          </>
        } />

        <Route path="/details" element={
          <>
            <Navbar />
            <ProductDetails />
          </>
        } />

        <Route path="/details_ruby" element={
          <>
            <Navbar />
            <RubyProductDetails />
          </>
        } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
