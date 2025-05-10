import { Code, Smartphone, Cpu, Database } from 'lucide-react'; // Icons for domains
import './Domain.css'; // Reusing existing styles

// Sample Domains Data
const domainsData = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Building responsive and scalable web applications using modern frameworks.',
    icon: <Code size={60} />,
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Applications',
    description: 'Crafting intuitive and high-performance mobile experiences across platforms.',
    icon: <Smartphone size={60} />,
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    description: 'Implementing cutting-edge AI & ML solutions to drive smart automation.',
    icon: <Cpu size={60} />,
  }
];

export default function AetherialDomainsPage() {
  return (
    <div className="aex-team-page-container">
      {/* Animated Background */}
      <div className="aex-team-background-gradient">
        {[...Array(8)].map((_, i) => <div key={`star-l-${i}`} className={`aex-team-star aex-team-star-${i + 1}`}></div>)}
        {[...Array(8)].map((_, i) => <div key={`star-r-${i}`} className={`aex-team-star aex-team-star-right-${i + 1}`}></div>)}
      </div>
      <div className="aex-team-glow aex-team-glow-1"></div>
      <div className="aex-team-glow aex-team-glow-2"></div>
      <div className="aex-team-glow aex-team-glow-3"></div>

      {/* Page Content */}
      <div className="aex-team-content-area">
        <header className="aex-team-header">
          <h1 className="aex-team-main-title">Our Domains</h1>
          <div className="aex-team-title-divider"></div>
          <p className="aex-team-header-intro">
            Explore the realms where we excel, pushing the boundaries of technology to new frontiers.
          </p>
        </header>

        <main className="aex-team-grid">
          {domainsData.map(domain => (
            <div key={domain.id} className="aex-team-member-card">
              <div className="aex-team-member-card-shine"></div>
              <div className="aex-team-member-image-wrapper">
                {domain.icon}
                <div className="aex-team-member-image-border-glow"></div>
              </div>
              <div className="aex-team-member-info">
                <h2 className="aex-team-member-name">{domain.name}</h2>
                <p className="aex-team-member-bio">{domain.description}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
