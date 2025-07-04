import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Navigation links
const navLinks = [
  { href: '/', label: 'Home', active: true },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar1123() {
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