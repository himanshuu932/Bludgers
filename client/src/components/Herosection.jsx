import { useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar1123 from './Navbar';
import './styles/HeroSection.css';

const Stars1123 = () => useMemo(() => (
  <>
    {[...Array(24)].map((_, i) => (
      <div
        key={`star-${i}`}
        className={`bld-star1123 ${i < 12 ? 'bld-star-left1123' : 'bld-star-right1123'}`}
        style={{
          top: `${Math.floor(Math.random() * 90) + 5}vh`,
          left: i < 12 ? `${Math.floor(Math.random() * 40) + 5}%` : 'auto',
          right: i >= 12 ? `${Math.floor(Math.random() * 40) + 5}%` : 'auto',
          animationDelay: `${i * 0.25}s`,
          backgroundColor: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a78bfa' : '#ffffff',
          width: i % 5 === 0 ? '3px' : '2px',
          height: i % 5 === 0 ? '3px' : '2px',
        }}
      />
    ))}
  </>
), []);

const Particles1123 = () => useMemo(() => (
  <div className="bld-particles-container1123">
    {[...Array(15)].map((_, i) => (
      <div
        key={`particle-${i}`}
        className="bld-particle1123"
        style={{
          left: `${Math.floor(Math.random() * 100)}%`,
          top: `${Math.floor(Math.random() * 100)}%`,
          animationDuration: `${Math.floor(Math.random() * 10) + 12}s`,
          animationDelay: `${Math.floor(Math.random() * 6)}s`
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

        <div className="bld-hero-orb1123"></div>
        <div className="bld-hero-ring1123 bld-ring-outer1123"></div>
        <div className="bld-hero-ring1123 bld-ring-inner1123"></div>
        <div className="bld-hero-ring1123 bld-ring-middle1123"></div>

        <Particles1123 />
      </div>
    </div>
  );
}
