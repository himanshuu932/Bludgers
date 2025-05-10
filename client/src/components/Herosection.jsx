import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

// Navigation links
const navLinks = [
  { href: '/', label: 'Home', active: true },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function BludgersHeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bld-container">
      {/* Animated background */}
      <div className="bld-background">
        {/* Stars */}
        {[...Array(24)].map((_, i) => (
          <div
            key={`star-${i}`}
            className={`bld-star ${i < 12 ? 'bld-star-left' : 'bld-star-right'}`}
            style={{
              top: `${Math.floor(Math.random() * 90) + 5}vh`,
              left: i < 12 ? `${Math.floor(Math.random() * 40) + 5}%` : 'auto',
              right: i >= 12 ? `${Math.floor(Math.random() * 40) + 5}%` : 'auto',
              animationDelay: `${(i * 0.25)}s`,
              backgroundColor: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a78bfa' : '#ffffff',
              width: i % 5 === 0 ? '3px' : '2px',
              height: i % 5 === 0 ? '3px' : '2px',
            }}
          />
        ))}

        {/* Shooting stars */}
        <div className="bld-shooting-star bld-shooting-1"></div>
        <div className="bld-shooting-star bld-shooting-2"></div>
        <div className="bld-shooting-star bld-shooting-3"></div>
      </div>

      {/* Glow effects */}
      <div className="bld-glow bld-glow-blue"></div>
      <div className="bld-glow bld-glow-purple"></div>

      {/* Navbar */}
      <nav className="bld-navbar">
        <div className="bld-navbar-container">
          <div className="bld-logo">
            <span className="bld-logo-text">BLUDGERS</span>
          </div>

          <div
            className="bld-navbar-toggle"
            onClick={toggleMenu}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
            role="button"
            tabIndex={0}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          <ul className={`bld-navbar-menu ${isMenuOpen ? 'bld-menu-active' : ''}`}>
            {navLinks.map(link => (
              <li key={link.href} className={`bld-navbar-item ${link.active ? 'bld-active' : ''}`}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bld-hero">
        <div className="bld-cosmos-elements">
          {/* Planets */}
          <div className="bld-planet bld-planet-1"></div>
          <div className="bld-planet bld-planet-2"></div>

          {/* Meteor belt */}
          <div className="bld-meteor-belt"></div>
        </div>

        <div className="bld-hero-content">
          <h1 className="bld-hero-title">
            <span className="bld-hero-text">BLUDGERS</span>
          </h1>
          <div className="bld-hero-subtitle">Digital Innovation & Strategic Solutions</div>
          <div className="bld-tagline">Crafting tomorrow's digital masterpieces, today.</div>

          <div className="bld-hero-cta">
            <a href="/portfolio" className="bld-hero-button bld-primary-btn">
              Explore Our Work
              <ChevronRight size={18} />
            </a>
            <a href="/contact" className="bld-hero-button bld-secondary-btn">
              Connect With Us
            </a>
          </div>
        </div>

        {/* Animated elements */}
        <div className="bld-hero-orb"></div>
        <div className="bld-hero-ring bld-ring-outer"></div>
        <div className="bld-hero-ring bld-ring-inner"></div>
        <div className="bld-hero-ring bld-ring-middle"></div>

        {/* Particle system */}
        <div className="bld-particles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="bld-particle"
              style={{
                left: `${Math.floor(Math.random() * 100)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
                animationDuration: `${Math.floor(Math.random() * 10) + 12}s`,
                animationDelay: `${Math.floor(Math.random() * 6)}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Base styles */
        .bld-container {
          font-family: 'Montserrat', 'Poppins', sans-serif;
          min-height: 100vh;
          background-color: #000000;
          color: #e0e0e0;
          position: relative;
          overflow: hidden;
        }

        /* Background */
        .bld-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, #0a0f1a, #000000);
          z-index: 0;
        }

        /* Stars */
        .bld-star {
          position: absolute;
          border-radius: 50%;
          animation: bldPulse 3.5s infinite ease-in-out;
          will-change: opacity;
        }

        /* Glow effects */
        .bld-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(190px);
          opacity: 0.12;
          animation: bldPulse 4.5s infinite ease-in-out;
          will-change: opacity, filter;
        }

        .bld-glow-blue {
          top: 20%;
          left: 10%;
          background-color: #3b82f6;
        }

        .bld-glow-purple {
          bottom: 20%;
          right: 10%;
          background-color: #8b5cf6;
          animation-delay: 1.5s;
        }

        /* Navbar */
        .bld-navbar {
          position: relative;
          z-index: 1000;
          padding: 24px 0;
          background-color: rgba(10, 15, 26, 0.6);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(40, 50, 70, 0.7);
        }

        .bld-navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bld-logo-text {
          font-size: 1.75rem;
          font-weight: 900;
          background: linear-gradient(45deg, #60a5fa, #a78bfa, #5eead4);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 1.5px;
          animation: bldGradientText 5s ease infinite;
        }

        .bld-navbar-menu {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 36px;
        }

        .bld-navbar-item a {
          color: #c0c0c0;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 10px 0;
          position: relative;
          transition: color 0.3s ease;
        }

        .bld-navbar-item a:hover,
        .bld-active a {
          color: #ffffff;
        }

        .bld-navbar-item a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2.5px;
          bottom: 0;
          left: 0;
          background: linear-gradient(to right, #60a5fa, #a78bfa);
          transition: width 0.35s ease-out;
        }

        .bld-navbar-item a:hover::after,
        .bld-active a::after {
          width: 100%;
        }

        .bld-navbar-toggle {
          display: none;
          cursor: pointer;
          color: #ffffff;
          padding: 8px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }
        
        .bld-navbar-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* Hero Section */
        .bld-hero {
          min-height: calc(100vh - 150px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          padding-top: 80px;
        }

        .bld-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
        }

        .bld-hero-title {
          font-size: clamp(3rem, 10vw, 7.5rem);
          font-weight: 900;
          position: relative;
          z-index: 1;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .bld-hero-text {
          display: block;
          color: #ffffff;
          text-shadow: 
            0 1px 0 #cccccc, 
            0 2px 0 #aaaaaa,
            0 3px 30px rgba(96, 165, 250, 0.8),
            0 0 10px rgba(255, 255, 255, 0.7);
          transform-style: preserve-3d;
          transform: perspective(600px) rotateX(4deg);
          position: relative;
          z-index: 5;
        }
        
        .bld-hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: #b0b0d0;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          margin-top: 8px;
          opacity: 0.85;
        }
        
        .bld-tagline {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          color: #a5b4fc;
          margin-top: 16px;
          font-weight: 400;
        }

        .bld-hero-cta {
          margin-top: 48px;
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .bld-hero-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.35s ease-out;
          border: none;
          cursor: pointer;
          font-size: 0.95rem;
          will-change: transform, box-shadow;
        }

        .bld-primary-btn {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          color: #ffffff;
          box-shadow: 0 6px 20px -5px rgba(96, 165, 250, 0.4);
        }
        
        .bld-primary-btn:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 12px 25px -5px rgba(96, 165, 250, 0.5);
        }

        .bld-secondary-btn {
          background: transparent;
          border: 2px solid rgba(96, 165, 250, 0.6);
          color: #e0e0e0;
        }

        .bld-secondary-btn:hover {
          background: rgba(96, 165, 250, 0.15);
          border-color: rgba(96, 165, 250, 0.9);
          transform: translateY(-3px);
        }

        /* Animated elements */
        .bld-hero-orb {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6, #1e40af);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.2;
          filter: blur(10px);
          animation: bldFloat 7s ease-in-out infinite alternate;
          will-change: transform, opacity, filter;
          z-index: 1;
        }

        .bld-hero-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid transparent;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          will-change: transform, border-color;
          z-index: 0;
        }

        .bld-ring-outer {
          width: 520px;
          height: 520px;
          border-top: 2px solid #60a5fa;
          border-right: 2px solid #a78bfa;
          opacity: 0.15;
          animation: bldSpin 16s linear infinite;
        }

        .bld-ring-inner {
          width: 320px;
          height: 320px;
          border-bottom: 2px solid #60a5fa;
          border-left: 2px solid #a78bfa;
          opacity: 0.35;
          animation: bldSpin 11s linear infinite reverse;
        }
        
        .bld-ring-middle {
          width: 420px;
          height: 420px;
          border-left: 1.5px solid rgba(96, 165, 250, 0.25);
          border-right: 1.5px solid rgba(167, 139, 250, 0.25);
          opacity: 0.25;
          animation: bldSpin 22s linear infinite;
        }

        /* Cosmos elements */
        .bld-cosmos-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .bld-planet {
          position: absolute;
          border-radius: 50%;
          opacity: 0.25;
          will-change: transform;
        }

        .bld-planet-1 {
          width: 130px;
          height: 130px;
          background: radial-gradient(circle at 30% 40%, #a78bfa, #581c87);
          top: 12%;
          right: 8%;
          animation: bldFloatPlanet 22s ease-in-out infinite alternate;
        }

        .bld-planet-2 {
          width: 90px;
          height: 90px;
          background: radial-gradient(circle at 70% 30%, #60a5fa, #1e3a8a);
          bottom: 12%;
          left: 6%;
          animation: bldFloatPlanet 18s ease-in-out infinite alternate-reverse;
        }

        .bld-meteor-belt {
          position: absolute;
          width: clamp(300px, 70vw, 800px);
          height: 100px;
          top: 75%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-25deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04) 15%, rgba(255,255,255,0.04) 85%, transparent);
          border-radius: 50px;
          filter: blur(2.5px);
          overflow: hidden;
        }

        .bld-meteor-belt::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1.5px);
          background-size: 12px 12px;
          opacity: 0.35;
          animation: bldPanBelt 30s linear infinite;
        }
        
        .bld-particles-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .bld-particle {
          position: absolute;
          width: 2.5px;
          height: 2.5px;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: bldParticle 25s linear infinite;
          will-change: transform, opacity;
        }

        .bld-shooting-star {
          position: absolute;
          width: 2.5px;
          height: 90px;
          background: linear-gradient(to bottom, rgba(229, 231, 235, 0.8), transparent);
          transform: rotate(-45deg);
          animation: bldShootingStar 12s linear infinite;
          opacity: 0;
          will-change: transform, opacity;
          filter: drop-shadow(0 0 6px rgba(200, 200, 255, 0.7));
        }

        .bld-shooting-1 {
          top: 10%; left: 25%; animation-delay: 1.5s;
        }
        
        .bld-shooting-2 {
          top: 25%; right: 15%; animation-delay: 5s;
        }
        
        .bld-shooting-3 {
          bottom: 35%; left: 65%; animation-delay: 9s;
        }

        /* Animations */
        @keyframes bldPulse {
          0%, 100% { opacity: 0.4; transform: scale(0.98); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }

        @keyframes bldFloat {
          0% { transform: translate(-50%, -50%) translateY(0px); }
          100% { transform: translate(-50%, -50%) translateY(-25px); }
        }
        
        @keyframes bldFloatPlanet {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(-30px) translateX(0px) rotate(0deg); }
          75% { transform: translateY(-15px) translateX(-10px) rotate(-5deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }

        @keyframes bldSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes bldGradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bldParticle {
          0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
          20% { opacity: 0.8; transform: scale(1); }
          80% { opacity: 0.5; }
          100% { transform: translate(40px, 40px) scale(0.5); opacity: 0; }
        }

        @keyframes bldShootingStar {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
          5% { opacity: 1; }
          25% { transform: translateX(350px) translateY(350px) rotate(-45deg); opacity: 0; }
          100% { opacity: 0; }
        }
        
        @keyframes bldPanBelt {
          from { background-position-x: 0px; }
          to { background-position-x: -100px; }
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .bld-navbar-menu {
            position: fixed;
            top: 78px;
            left: 0;
            width: 100%;
            background-color: rgba(5, 8, 15, 0.95);
            backdrop-filter: blur(15px);
            flex-direction: column;
            align-items: center;
            padding: 30px 0;
            gap: 28px;
            transform: translateY(-120%);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.35s ease-out, opacity 0.35s ease-out;
            z-index: 999;
            border-bottom: 1px solid rgba(40, 50, 70, 0.7);
          }

          .bld-menu-active {
            transform: translateY(0) !important;
            opacity: 1 !important;
            pointer-events: auto !important;
          }

          .bld-navbar-toggle {
            display: block;
            z-index: 1000;
          }

          .bld-ring-outer { width: 320px; height: 320px; }
          .bld-ring-inner { width: 200px; height: 200px; }
          .bld-ring-middle { width: 260px; height: 260px; }

          .bld-hero-cta {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          
          .bld-hero-button {
            width: clamp(200px, 60%, 280px);
            justify-content: center;
          }

          .bld-planet-1 { width: 90px; height: 90px; top: 10%; right: 5%; }
          .bld-planet-2 { width: 70px; height: 70px; bottom: 10%; left: 3%; }
        }

        @media (max-width: 480px) {
          .bld-navbar { padding: 20px 0; }
          .bld-navbar-container { padding: 0 16px; }
          .bld-navbar-menu { top: 70px; }
          .bld-logo-text { font-size: 1.5rem; }
          
          .bld-hero-orb { width: 120px; height: 120px; }
          .bld-ring-outer { width: 220px; height: 220px; }
          .bld-ring-inner { width: 140px; height: 140px; }
          .bld-ring-middle { width: 180px; height: 180px; }
          
          .bld-planet-1 { width: 70px; height: 70px; }
          .bld-planet-2 { width: 50px; height: 50px; }
          
          .bld-hero-button {
            padding: 12px 24px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}