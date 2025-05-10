import { Code, Smartphone, Cpu, Database } from 'lucide-react'; // Icons for domains
import './styles/Domain.css'; // Reusing existing styles

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
    <div className="aex-team-page-containerjnfkjd">
      {/* Animated Background */}
      <div className="aex-team-background-gradientjnfkjd">
        {[...Array(8)].map((_, i) => (
          <div
            key={`star-l-${i}`}
            className={`aex-team-starjnfkjd aex-team-star-${i + 1}jnfkjd`}
          ></div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`star-r-${i}`}
            className={`aex-team-starjnfkjd aex-team-star-right-${i + 1}jnfkjd`}
          ></div>
        ))}
      </div>
      <div className="aex-team-glowjnfkjd aex-team-glow-1jnfkjd"></div>
      <div className="aex-team-glowjnfkjd aex-team-glow-2jnfkjd"></div>
      <div className="aex-team-glowjnfkjd aex-team-glow-3jnfkjd"></div>

      {/* Page Content */}
      <div className="aex-team-content-areajnfkjd">
        <header className="aex-team-headerjnfkjd">
          <h1 className="aex-team-main-titlejnfkjd">Our Domains</h1>
          <div className="aex-team-title-dividerjnfkjd"></div>
          <p className="aex-team-header-introjnfkjd">
            Explore the realms where we excel, pushing the boundaries of technology to new frontiers.
          </p>
        </header>

        <main className="aex-team-gridjnfkjd">
          {domainsData.map(domain => (
            <div key={domain.id} className="aex-team-member-cardjnfkjd">
              <div className="aex-team-member-card-shinejnfkjd"></div>
              <div className="aex-team-member-image-wrapperjnfkjd">
                {domain.icon}
                <div className="aex-team-member-image-border-glowjnfkjd"></div>
              </div>
              <div className="aex-team-member-infojnfkjd">
                <h2 className="aex-team-member-namejnfkjd">{domain.name}</h2>
                <p className="aex-team-member-biojnfkjd">{domain.description}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}