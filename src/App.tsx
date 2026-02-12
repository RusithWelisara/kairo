
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ParticleBackground from './components/ui/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ParticleBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/team" element={<Team />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;