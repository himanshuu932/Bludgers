import { useState, useRef } from 'react'; // Added useRef
import { Mail, Phone, MessageCircle, ChevronRight, Github, Linkedin, Instagram, Send, FilePenLine } from 'lucide-react'; // Added FilePenLine
import './styles/ContactUs.css';

// Data for contact cards - for easier management (same as before)
const contactMethodsData = [
  {
    id: 'email',
    icon: <Mail size={28} className="aex-icon-mail" />,
    title: 'Email Us',
    description: "We'll respond within 24 hours",
    link: 'mailto:bludger52@gmail.com',
    linkText: 'bludger52@gmail.com',
    ariaLabel: 'Send an email to bludger52@gmail.com'
  },
  {
    id: 'phone',
    icon: <Phone size={28} className="aex-icon-phone" />,
    title: 'Call Us',
    description: 'Mon-Fri from 9AM to 9PM',
    link: 'tel:+918601346652',
    linkText: '+91 8601346652',
    ariaLabel: 'Call us at +91 8601346652'
  },
  {
    id: 'whatsapp',
    icon: <MessageCircle size={28} className="aex-icon-whatsapp" />,
    title: 'WhatsApp',
    description: 'Quick chat support',
    link: 'https://wa.me/918601346652',
    linkText: '+91 8601346652',
    ariaLabel: 'Chat with us on WhatsApp at +91 8601346652'
  }
];

const socialLinksData = [
  { id: 'github', icon: <Github size={24} />, href: 'https://github.com/yourprofile', label: 'GitHub' },
  { id: 'linkedin', icon: <Linkedin size={24} />, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { id: 'instagram', icon: <Instagram size={24} />, href: 'https://instagram.com/yourprofile', label: 'Instagram' },
];


export default function FuturisticContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); // New state for form visibility
  const formSectionRef = useRef(null); // For scrolling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleForm = () => {
    setIsFormVisible(prev => !prev);
    if (!isFormVisible) {
      // Scroll to form section when it becomes visible, if needed
      // Add a slight delay to ensure the element is in the DOM and layout is calculated
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Optionally hide the form again after successful submission
      // setIsFormVisible(false); 
    }, 4000);
  };

  return (
    <div className="aex-contact-page-container">
      {/* Animated background (same as before) */}
 
      <div className="aex-contact-content-area">
        <div className="aex-contact-wrapper">
          <header className="aex-contact-header">
            <h1 className="aex-contact-main-title">
              Connect With Us
            </h1>
            <div className="aex-contact-title-divider"></div>
            <p className="aex-contact-header-description">
              Reach out for collaborations, inquiries, or to explore the digital universe together.
            </p>
          </header>

          <div className="aex-contact-grid">
          

            
            <section className="aex-contact-methods-section">
              <div className="aex-contact-cards-container">
                {contactMethodsData.map(method => (
                  <div key={method.id} className={`aex-contact-card aex-contact-card--${method.id}`}>
                    <div className="aex-contact-card-icon-wrapper">
                      {method.icon}
                    </div>
                    <div className="aex-contact-card-content">
                      <h3 className="aex-contact-card-title">{method.title}</h3>
                      <p className="aex-contact-card-desc">{method.description}</p>
                      <a href={method.link} className="aex-contact-card-link" target="_blank" rel="noopener noreferrer" aria-label={method.ariaLabel}>
                        {method.linkText}
                        <ChevronRight size={18} className="aex-contact-link-arrow" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

             
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}