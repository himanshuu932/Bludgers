import React, { useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-400 tracking-wider">
            BLUDGERS
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-300 border-b-2 border-blue-400 pb-1">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Services
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Portfolio
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300 z-50"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-4 p-6">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-300 border-b border-blue-400 pb-2">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Services
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Portfolio
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Stars Component
const Stars = () => useMemo(() => (
  <>
    {[...Array(40)].map((_, i) => (
      <div
        key={`star-${i}`}
        className="absolute rounded-full animate-pulse"
        style={{
          top: `${Math.floor(Math.random() * 95) + 2.5}vh`,
          left: i < 20 ? `${Math.floor(Math.random() * 45) + 2.5}%` : 'auto',
          right: i >= 20 ? `${Math.floor(Math.random() * 45) + 2.5}%` : 'auto',
          animationDelay: `${i * 0.15}s`,
          backgroundColor: i % 3 === 0 ? '#90b8f8' : i % 3 === 1 ? '#c0a3ff' : '#ffffff',
          width: i % 5 === 0 ? '3px' : '2px',
          height: i % 5 === 0 ? '3px' : '2px',
        }}
      />
    ))}
  </>
), []);

// Particles Component
const Particles = () => useMemo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(25)].map((_, i) => (
      <div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"
        style={{
          left: `${Math.floor(Math.random() * 100)}%`,
          top: `${Math.floor(Math.random() * 100)}%`,
          animationDuration: `${Math.floor(Math.random() * 8) + 10}s`,
          animationDelay: `${Math.floor(Math.random() * 5)}s`
        }}
      />
    ))}
  </div>
), []);

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden" style={{
      fontFamily: "'Montserrat', 'Poppins', sans-serif",
      backgroundColor: '#0a0f1a',
      color: '#e0e0e0'
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Stars />
        
        {/* Shooting Stars */}
        <div className="absolute w-1 h-32 bg-gradient-to-b from-gray-200 to-transparent transform rotate-45 animate-pulse" 
             style={{
               top: '10%', 
               left: '20%', 
               animationDelay: '2s',
               filter: 'drop-shadow(0 0 8px rgba(200,200,255,0.8))'
             }} />
        <div className="absolute w-1 h-32 bg-gradient-to-b from-gray-200 to-transparent transform rotate-45 animate-pulse" 
             style={{
               top: '20%', 
               right: '10%', 
               animationDelay: '6s',
               filter: 'drop-shadow(0 0 8px rgba(200,200,255,0.8))'
             }} />
        <div className="absolute w-1 h-32 bg-gradient-to-b from-gray-200 to-transparent transform rotate-45 animate-pulse" 
             style={{
               bottom: '30%', 
               left: '70%', 
               animationDelay: '10s',
               filter: 'drop-shadow(0 0 8px rgba(200,200,255,0.8))'
             }} />
        <div className="absolute w-1 h-32 bg-gradient-to-b from-gray-200 to-transparent transform rotate-45 animate-pulse" 
             style={{
               top: '50%', 
               left: '30%', 
               animationDelay: '4s',
               filter: 'drop-shadow(0 0 8px rgba(200,200,255,0.8))'
             }} />
      </div>

      {/* Glow Effects */}
      <div className="absolute w-80 h-80 rounded-full opacity-15 animate-pulse" 
           style={{
             top: '15%', 
             left: '8%', 
             background: '#3b82f6',
             filter: 'blur(220px)',
             animationDuration: '4s'
           }} />
      <div className="absolute w-80 h-80 rounded-full opacity-15 animate-pulse" 
           style={{
             bottom: '15%', 
             right: '8%', 
             background: '#8b5cf6',
             filter: 'blur(220px)',
             animationDuration: '4s',
             animationDelay: '1.5s'
           }} />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen pt-32 pb-10 px-5">
        {/* Cosmos Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Planets */}
          <div className="absolute w-36 h-36 rounded-full opacity-30 animate-pulse" 
               style={{
                 top: '10%', 
                 right: '10%', 
                 background: 'radial-gradient(circle at 30% 40%, #c0a3ff, #6a2a9a)',
                 animationDuration: '25s'
               }} />
          <div className="absolute w-28 h-28 rounded-full opacity-30 animate-pulse" 
               style={{
                 bottom: '10%', 
                 left: '8%', 
                 background: 'radial-gradient(circle at 70% 30%, #80bfff, #3a60b0)',
                 animationDuration: '20s'
               }} />
          <div className="absolute w-20 h-20 rounded-full opacity-40 animate-pulse" 
               style={{
                 top: '40%', 
                 right: '5%', 
                 background: 'radial-gradient(circle at 50% 50%, #ffcc66, #ff6600)',
                 animationDuration: '16s'
               }} />
          
          {/* Meteor Belt */}
          <div className="absolute w-96 h-32 rounded-full opacity-20 transform rotate-12" 
               style={{
                 top: '70%', 
                 left: '50%', 
                 transform: 'translate(-50%, -50%) rotate(-30deg)',
                 background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0.06) 85%, transparent)',
                 filter: 'blur(3px)'
               }} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
            <span className="text-white" style={{
              textShadow: '0 1px 0 #ccc, 0 2px 0 #aaa, 0 3px 30px rgba(96,165,250,0.8), 0 0 10px rgba(255,255,255,0.7)',
              transform: 'perspective(600px) rotateX(3deg)'
            }}>
              BLUDGERS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 tracking-widest uppercase mb-5 opacity-90" style={{
            color: '#b0b0d0',
            letterSpacing: '4px'
          }}>
            Digital Innovation & Strategic Solutions
          </p>
          
          <p className="text-base md:text-lg text-indigo-300 mb-12 opacity-95" style={{
            color: '#a5b4fc'
          }}>
            Crafting tomorrow's digital masterpieces, today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/portfolio" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50" 
               style={{
                 boxShadow: '0 8px 25px -5px rgba(96,165,250,0.5)',
                 transform: 'translateY(0)'
               }}
               onMouseEnter={(e) => {
                 e.target.style.transform = 'translateY(-7px) scale(1.04)';
                 e.target.style.boxShadow = '0 15px 30px -5px rgba(96,165,250,0.6)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.transform = 'translateY(0) scale(1)';
                 e.target.style.boxShadow = '0 8px 25px -5px rgba(96,165,250,0.5)';
               }}>
              Explore Our Work
              <ChevronRight size={18} />
            </a>
            
            <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-blue-400 text-gray-200 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-400/20 hover:border-blue-400"
               style={{
                 borderColor: 'rgba(96,165,250,0.8)'
               }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = 'rgba(96,165,250,0.2)';
                 e.target.style.borderColor = 'rgba(96,165,250,1)';
                 e.target.style.transform = 'translateY(-3px)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'transparent';
                 e.target.style.borderColor = 'rgba(96,165,250,0.8)';
                 e.target.style.transform = 'translateY(0)';
               }}>
              Connect With Us
            </a>
          </div>
        </div>

        {/* Central Orb */}
        <div className="absolute w-44 h-44 rounded-full opacity-30 animate-pulse" 
             style={{
               top: '50%', 
               left: '50%', 
               transform: 'translate(-50%, -50%)',
               background: 'radial-gradient(circle at 30% 30%, #80bfff, #4d90f0, #2c50c0)',
               filter: 'blur(15px)',
               animationDuration: '8s',
               zIndex: 1
             }} />

        <Particles />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatPlanet {
          0% { transform: translateY(0) translateX(0) rotate(0); }
          25% { transform: translateY(-20px) translateX(15px) rotate(7deg); }
          50% { transform: translateY(-40px) translateX(0) rotate(0); }
          75% { transform: translateY(-20px) translateX(-15px) rotate(-7deg); }
          100% { transform: translateY(0) translateX(0) rotate(0); }
        }
        
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
          5% { opacity: 1; }
          20% { transform: translateX(400px) translateY(400px) rotate(-45deg); opacity: 0; }
          100% { opacity: 0; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite alternate;
        }
        
        .animate-float-planet {
          animation: floatPlanet 25s ease-in-out infinite alternate;
        }
        
        .animate-shooting-star {
          animation: shootingStar 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">

      <HeroSection />
    </div>
  );
};

export default App;