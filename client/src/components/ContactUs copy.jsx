import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, ChevronRight } from 'lucide-react';
import './ContactUs.css'; // Import external CSS file

export default function FuturisticContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="container-page">
      {/* Animated background */}
      <div className="background-gradient">
        {/* Simulated stars with fixed divs */}
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        
        {/* More stars for the right side */}
        <div className="star star-right-1"></div>
        <div className="star star-right-2"></div>
        <div className="star star-right-3"></div>
        <div className="star star-right-4"></div>
        <div className="star star-right-5"></div>
        <div className="star star-right-6"></div>
      </div>

      {/* Glow effects */}
      <div className="glow-effect glow-effect-1"></div>
      <div className="glow-effect glow-effect-2"></div>

      <div className="content-container">
        <div className="content-wrapper">
          {/* Header */}
          <div className="header">
            <h1 className="header-title">
              Connect With Us
            </h1>
            <div className="header-divider"></div>
            <p className="header-description">
              We're just a message away. Reach out to us for any questions, collaborations, or tech discussions.
            </p>
          </div>

          <div className="content-grid">
            {/* Contact Methods */}
            <div className="contact-methods">
              <div className="contact-cards">
                {/* Email Card */}
                <div className="contact-card card-email">
                  <div className="card-icon">
                    <Mail size={24} className="icon-mail" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Email Us</h3>
                    <p className="card-description">We'll respond within 24 hours</p>
                    <a href="mailto:hello@futurecoders.tech" className="card-link link-email">
                      hello@futurecoders.tech
                      <ChevronRight size={16} className="link-arrow" />
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="contact-card card-phone">
                  <div className="card-icon">
                    <Phone size={24} className="icon-phone" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Call Us</h3>
                    <p className="card-description">Mon-Fri from 9AM to 6PM</p>
                    <a href="tel:+15551234567" className="card-link link-phone">
                      +1 (555) 123-4567
                      <ChevronRight size={16} className="link-arrow" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="contact-card card-whatsapp">
                  <div className="card-icon">
                    <MessageCircle size={24} className="icon-whatsapp" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">WhatsApp</h3>
                    <p className="card-description">Quick chat support</p>
                    <a href="https://wa.me/15551234567" className="card-link link-whatsapp">
                      +1 (555) 123-4567
                      <ChevronRight size={16} className="link-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            
          </div>

          {/* Location Section 
          <div className="location-section">
            <h2 className="location-title">Find Us</h2>
            <div className="location-container">
              
              <div className="map-glow"></div>
              
              <div className="map-container">
                <img src="/api/placeholder/1200/400" alt="Office location map" className="map-image" />
              </div>
              <div className="location-info">
                <p className="location-name">FutureCoders HQ</p>
                <p className="location-address">123 Innovation Drive, Tech Valley, CA 94103</p>
              </div>
            </div>
          </div>*/
}
        </div>
      </div>

      {/* Footer line */}
      <div className="footer">
        <div className="footer-divider"></div>
        <p className="footer-text">© {new Date().getFullYear()} FutureCoders. All rights reserved.</p>
      </div>
    </div>
  );
}