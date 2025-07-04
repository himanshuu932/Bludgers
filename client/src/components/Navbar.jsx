import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar1123() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveLink(section);
          break;
        }
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setActiveLink(location.pathname.substring(1));
    }
  }, [location.pathname]);

  const navLinks = [
    { to: '/#home', label: 'Home' },
    { to: '/#about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/#team', label: 'Team' },
    { to: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-400 tracking-wider">
            BLUDGERS
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`transition-colors duration-300 ${
                  activeLink === link.label.toLowerCase()
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300 z-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-300 ${
                  activeLink === link.label.toLowerCase()
                    ? 'text-blue-400 border-b border-blue-400 pb-2'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}