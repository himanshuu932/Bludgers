 import { useState } from 'react';
import { ChevronRight, Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {

return(
    <div className="footer-container-page">
    
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