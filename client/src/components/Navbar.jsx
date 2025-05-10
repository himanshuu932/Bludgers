import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import './styles/Navbar.css';

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
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bld-navbar1123" aria-label="Main navigation">
      <div className="bld-navbar-container1123">
        <a href="/" className="bld-logo1123">
          <span className="bld-logo-text1123">BLUDGERS</span>
        </a>

        <button
          className="bld-navbar-toggle1123"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul
          id="main-menu"
          className={`bld-navbar-menu1123 ${isMenuOpen ? 'bld-menu-active1123' : ''}`}
        >
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`bld-navbar-item1123 ${link.active ? 'bld-active1123' : ''}`}
            >
              <a href={link.href} aria-current={link.active ? 'page' : undefined}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
