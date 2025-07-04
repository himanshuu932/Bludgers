import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar1123 from './components/Navbar';
import BludgersHeroSection from './components/Herosection';
import AetherialDomainsPage from './components/Domain';
import AetherialTeamCarousel from './components/Team';
import ContactPage from './components/ContactUs';
import Footer from './components/Footer';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar1123 />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <BludgersHeroSection />
              </div>
              <div id="about">
                <AetherialDomainsPage />
              </div>
              <div id="team">
                <AetherialTeamCarousel />
              </div>
              <div id="contact">
                <ContactPage />
              </div>
            </>
          }
        />
        <Route path="/services" element={<Services />} />
      </Routes>
      {!isServicesPage && <Footer />}
    </div>
  );
};

export default App;