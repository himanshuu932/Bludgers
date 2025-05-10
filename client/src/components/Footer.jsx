 import { useState } from 'react';
import { ChevronRight, Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import './styles/Footer.css';

export default function Footer() {

return(
    <div className="footer-container-page">
  <div className="footer-bg-gradient" />
  {/* generate stars: */}
  {[...Array(24)].map((_,i) => (
    <div
      key={i}
      className={`ftr-star ${i<12?'ftr-star-left':'ftr-star-right'}`}
      style={{
        '--i': i,
        top: `${Math.random()*90+5}vh`,
        animationDelay: `${i*0.25}s`,
      }}
    />
  ))}
  <div className="ftr-shooting-star ftr-shooting-1" />
  <div className="ftr-shooting-star ftr-shooting-2" />
  <div className="ftr-shooting-star ftr-shooting-3" />
  <div className="ftr-glow ftr-glow-1" />
  <div className="ftr-glow ftr-glow-2" />
  <div className="ftr-glow ftr-glow-3" />
  <div className="ftr-particles-container">
    {[...Array(15)].map((_,i) => (
      <div
        key={i}
        className="ftr-particle"
        style={{
          top: `${Math.random()*100}%`,
          left: `${Math.random()*100}%`,
          animationDuration: `${Math.random()*10+10}s`,
          animationDelay: `${Math.random()*6}s`
        }}
      />
    ))}
  </div>

<footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo">
              <span className="footer-logo-text">BLUDGERS</span>
              <p className="footer-tagline">Pushing Boundaries in Digital Innovation</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-links-column">
                <h4 className="footer-links-title">Navigate</h4>
                <ul className="footer-links-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/works">Our Works</a></li>
                  <li><a href="/team">Team</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
              
              <div className="footer-links-column">
                <h4 className="footer-links-title">Connect</h4>
                <ul className="footer-links-list">
                  <li><a href="mailto:bludger52@gmail.com">Email</a></li>
                  <li><a href="tel:+918601346652">Phone</a></li>
                  <li><a href="https://wa.me/918601346652">WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} BLUDGERS. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://github.com" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
      );
}