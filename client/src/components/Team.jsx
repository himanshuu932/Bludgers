import React from 'react';
import Slider from "react-slick";
import { Linkedin, Github, Twitter } from 'lucide-react';
import './styles/Team.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Extended Team Member Data with 8 entries
const teamMembersData = [
  {
    id: 'eva-nova',
    name: 'Himanshu Upadhyay',
    role: 'Full Stack Developer',
    bio: 'Full stack developer with a passion for creating seamless user experiences and robust backend systems.',
    imageUrl: './him.jpg',
    socials: [
      { id: 'linkedin', icon: <Linkedin size={20} />, url: '#eva-linkedin', label: "Eva's LinkedIn" },
      { id: 'twitter', icon: <Twitter size={20} />, url: '#eva-twitter', label: "Eva's Twitter/X Profile" },
    ],
  },
  {
    id: 'jax-ryker',
    name: 'Jax "Cipher" Ryker',
    role: 'Lead Systems Engineer',
    bio: 'Jax is the master of complex systems, weaving intricate networks that power our digital constellations with unwavering reliability.',
    imageUrl: 'https://via.placeholder.com/250/ADD8E6/000000?Text=Jax+R.',
    socials: [
      { id: 'github', icon: <Github size={20} />, url: '#jax-github', label: "Jax's GitHub" },
      { id: 'linkedin', icon: <Linkedin size={20} />, url: '#jax-linkedin', label: "Jax's LinkedIn" },
    ],
  },
  {
    id: 'seraphina-lin',
    name: 'Seraphina Lin',
    role: 'Quantum UX Designer',
    bio: 'Seraphina crafts intuitive and mesmerizing user experiences, making interactions feel like a seamless journey through hyper-space.',
    imageUrl: 'https://via.placeholder.com/250/E6E6FA/000000?Text=Seraphina+L.',
    socials: [
      { id: 'linkedin', icon: <Linkedin size={20} />, url: '#sera-linkedin', label: "Seraphina's LinkedIn" },
      { id: 'twitter', icon: <Twitter size={20} />, url: '#sera-twitter', label: "Seraphina's Twitter/X Profile" },
    ],
  },
  {
    id: 'kael-orion',
    name: 'Kael Orion',
    role: 'Data Alchemist',
    bio: 'Kael transmutes raw data into celestial insights, uncovering patterns that guide our strategic voyages across the market nebulae.',
    imageUrl: 'https://via.placeholder.com/250/90EE90/000000?Text=Kael+O.',
    socials: [
      { id: 'github', icon: <Github size={20} />, url: '#kael-github', label: "Kael's GitHub" },
      { id: 'linkedin', icon: <Linkedin size={20} />, url: '#kael-linkedin', label: "Kael's LinkedIn" },
    ],
  }
 
];

export default function AetherialTeamCarousel() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="BLD-aex-team-page-container">
      {/* Background & Glows unchanged */}
      <div className="BLD-aex-team-background-gradient">
        {[...Array(8)].map((_, i) => <div key={`star-l-${i}`} className={`BLD-aex-team-star BLD-aex-team-star-${i + 1}`}></div>)}
        {[...Array(8)].map((_, i) => <div key={`star-r-${i}`} className={`BLD-aex-team-star BLD-aex-team-star-right-${i + 1}`}></div>)}
      </div>
      <div className="BLD-aex-team-glow BLD-aex-team-glow-1"></div>
      <div className="BLD-aex-team-glow BLD-aex-team-glow-2"></div>
      <div className="BLD-aex-team-glow BLD-aex-team-glow-3"></div>

      {/* Content Area */}
      <div className="BLD-aex-team-content-area">
        <header className="BLD-aex-team-header">
          <h1 className="BLD-aex-team-main-title">Meet Our Stellar Navigators</h1>
          <div className="BLD-aex-team-title-divider"></div>
          <p className="BLD-aex-team-header-intro">
            A constellation of brilliant minds dedicated to pioneering the future of digital experiences.
            Each member brings a unique spark, fueling our journey towards innovation and excellence.
          </p>
        </header>

        <Slider {...settings} className="BLD-aex-team-carousel">
          {teamMembersData.map(member => (
            <div key={member.id} className="BLD-aex-team-member-card">
              <div className="BLD-aex-team-member-card-shine"></div>
              <div className="BLD-aex-team-member-image-wrapper">
                <img src={member.imageUrl} alt={`Profile of ${member.name}`} className="BLD-aex-team-member-image" />
                <div className="BLD-aex-team-member-image-border-glow"></div>
              </div>
              <div className="BLD-aex-team-member-info">
                <h2 className="BLD-aex-team-member-name">{member.name}</h2>
                <p className="BLD-aex-team-member-role">{member.role}</p>
                <p className="BLD-aex-team-member-bio">{member.bio}</p>
                <div className="BLD-aex-team-member-socials">
                  {member.socials.map(social => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="BLD-aex-team-social-link"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}