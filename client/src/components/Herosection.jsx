import { useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar1123 from './Navbar';
import './styles/HeroSection.css';

const Stars1123 = () => useMemo(() => (
  <>
    {[...Array(40)].map((_, i) => ( // Increased number of stars
      <div
        key={`star-${i}`}
        className={`bld-star1123 ${i < 20 ? 'bld-star-left1123' : 'bld-star-right1123'}`} // Adjusted star distribution
        style={{
          top: `${Math.floor(Math.random() * 95) + 2.5}vh`, // Adjusted vertical range
          left: i < 20 ? `${Math.floor(Math.random() * 45) + 2.5}%` : 'auto', // Adjusted horizontal range
          right: i >= 20 ? `${Math.floor(Math.random() * 45) + 2.5}%` : 'auto', // Adjusted horizontal range
          animationDelay: `${i * 0.15}s`, // Slightly reduced animation delay
          backgroundColor: i % 3 === 0 ? '#90b8f8' : i % 3 === 1 ? '#c0a3ff' : '#ffffff', // Slightly adjusted star colors
          width: i % 5 === 0 ? '3px' : '2px',
          height: i % 5 === 0 ? '3px' : '2px',
        }}
      />
    ))}
  </>
), []);

const Particles1123 = () => useMemo(() => (
  <div className="bld-particles-container1123">
    {[...Array(25)].map((_, i) => ( // Increased number of particles
      <div
        key={`particle-${i}`}
        className="bld-particle1123"
        style={{
          left: `${Math.floor(Math.random() * 100)}%`,
          top: `${Math.floor(Math.random() * 100)}%`,
          animationDuration: `${Math.floor(Math.random() * 8) + 10}s`, // Adjusted animation duration
          animationDelay: `${Math.floor(Math.random() * 5)}s` // Adjusted animation delay
        }}
      ></div>
    ))}
  </div>
), []);

export default function BludgersHeroSection1123() {
  return (
    <div className="bld-container1123">
      {/* Animated background */}
      <div className="bld-background1123">
        <Stars1123 />
        <div className="bld-shooting-star1123 bld-shooting-11123"></div>
        <div className="bld-shooting-star1123 bld-shooting-21123"></div>
        <div className="bld-shooting-star1123 bld-shooting-31123"></div>
         <div className="bld-shooting-star1123 bld-shooting-41123"></div> {/* Added another shooting star */}
      </div>

      {/* Glow effects */}
      <div className="bld-glow1123 bld-glow-blue1123"></div>
      <div className="bld-glow1123 bld-glow-purple1123"></div>

      {/* Navbar */}


      {/* Hero Section */}
      <div className="bld-hero1123">
        <div className="bld-cosmos-elements1123">
          <div className="bld-planet1123 bld-planet-11123"></div>
          <div className="bld-planet1123 bld-planet-21123"></div>
           <div className="bld-planet1123 bld-planet-31123"></div> {/* Added another planet */}
          <div className="bld-meteor-belt1123"></div>
        </div>

        <div className="bld-hero-content1123">
          <h1 className="bld-hero-title1123">
            <span className="bld-hero-text1123">BLUDGERS</span>
          </h1>
          <div className="bld-hero-subtitle1123">Digital Innovation & Strategic Solutions</div>
          <div className="bld-tagline1123">Crafting tomorrow's digital masterpieces, today.</div>

          <div className="bld-hero-cta1123">
            <a href="/portfolio" className="bld-hero-button1123 bld-primary-btn1123">
              Explore Our Work
              <ChevronRight size={18} />
            </a>
            <a href="/contact" className="bld-hero-button1123 bld-secondary-btn1123">
              Connect With Us
            </a>
          </div>
        </div>

       
        <Particles1123 />
      </div>
    </div>
  );
}