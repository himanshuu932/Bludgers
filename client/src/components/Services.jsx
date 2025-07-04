import React, { useState } from 'react';
import { ExternalLink, Globe, Eye, Code, Calendar } from 'lucide-react';

const WebsiteShowcase = () => {
  const [websites] = useState([
    {
      id: 1,
      name: "Sewa Bharat Goraksh",
      url: "https://sewabharatigoraksh.org/",
      description: "Charity Website for promotion and collleting donations",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
      technologies: ["React", "CSS"],
      completedDate: "2025-01-15",
      category: "Charity"
    },
    {
      id: 2,
      name: "DAVPG College GKP",
      url: "https://davpgcollegegkp.ac.in",
      description: "Official website for DAVPG College Gorakhpur, providing information about courses, faculty, and admissions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      technologies: ["React.js", "CSS", "Tailwind"," Node.js", "Express.js", "MongoDB"],
      completedDate: "2025-03-28",
      category: "Education"
    },
    {
      id: 3,
      name: "Peek PDF",
      url: "https://peek-pdf.netlify.app/",
      description: "Document management system for uploading, viewing, and sharing PDF files with AI-powered search",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop",
      technologies:  ["React.js", "CSS", "GenAI"," Node.js", "Express.js", "MongoDB"],
      completedDate: "2025-02-10",
      category: "Business"
    },
    {
      id: 4,
      name: "DOG Registration Portal",
      url: "https://dog-registration.vercel.app/",
      description: "Online portal for dog registration and management, including vaccination records and owner details for Nagar Nigam Gorakhpur",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      technologies: ["Vue.js", "Firebase", "Express"],
      completedDate: "2025-06-05",
      category: "Government Services"
    },
    {
      id: 5,
      name: "Educational Platform",
      url: "https://example-education.com",
      description: "Interactive learning platform with course management and progress tracking",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
      technologies: ["React", "Redux", "PostgreSQL"],
      completedDate: "2024-05-20",
      category: "Education"
    },
    {
      id: 6,
      name: "Real Estate Portal",
      url: "https://example-realestate.com",
      description: "Advanced real estate platform with property listings and virtual tours",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop",
      technologies: ["Angular", "NestJS", "MySQL"],
      completedDate: "2024-06-15",
      category: "Real Estate"
    }
  ]);

  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [previewError, setPreviewError] = useState(new Set());

  const handlePreviewError = (websiteId) => {
    setPreviewError(prev => new Set([...prev, websiteId]));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'E-Commerce': '#60a5fa',
      'Corporate': '#a78bfa',
      'Portfolio': '#5eead4',
      'Healthcare': '#34d399',
      'Education': '#f59e0b',
      'Real Estate': '#ef4444'
    };
    return colors[category] || '#60a5fa';
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundColor: '#000',
      color: '#e0e0e0',
      fontFamily: 'Montserrat, Poppins, sans-serif'
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #0a0f1a 0%, #000 80%)'
        }}></div>
        
        {/* Animated Stars */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${3.5 + Math.random() * 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
        
        {/* Glowing Orbs */}
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: '400px',
            height: '400px',
            background: '#60a5fa',
            top: '15%',
            left: '8%',
            filter: 'blur(150px)',
            animation: 'float 8s infinite ease-in-out alternate'
          }}
        ></div>
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: '500px',
            height: '500px',
            background: '#a78bfa',
            bottom: '10%',
            right: '12%',
            filter: 'blur(150px)',
            animation: 'float 8s infinite ease-in-out alternate',
            animationDelay: '-3s'
          }}
        ></div>
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '350px',
            height: '350px',
            background: '#5eead4',
            top: '45%',
            right: '30%',
            filter: 'blur(150px)',
            animation: 'float 8s infinite ease-in-out alternate',
            animationDelay: '-5s'
          }}
        ></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa, #5eead4)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Our  Portfolio
          </h1>
          <div 
            className="w-20 h-1 mx-auto mb-6 rounded-full"
            style={{
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa, #5eead4)'
            }}
          ></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our collection of innovative websites and digital solutions crafted with cutting-edge technologies
          </p>
        </div>

        {/* Website Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website) => (
            <div
              key={website.id}
              className="relative group cursor-pointer"
              style={{
                background: 'rgba(15, 25, 45, 0.6)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3), 0 0 40px #60a5fa';
                e.currentTarget.style.borderColor = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
              }}
            >
              {/* Shine Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: 'skewX(-25deg)',
                  animation: 'shine 1s ease-in-out'
                }}
              ></div>

              {/* Preview/Image Container */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                {!previewError.has(website.id) ? (
                  <iframe
                    src={website.url}
                    className="w-full h-full scale-50 origin-top-left"
                    style={{ width: '200%', height: '200%' }}
                    onError={() => handlePreviewError(website.id)}
                    title={`Preview of ${website.name}`}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={website.image}
                      alt={website.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 items-center justify-center">
                      <Globe className="w-16 h-16 text-blue-400 opacity-50" />
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div 
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                  style={{
                    background: `${getCategoryColor(website.category)}20`,
                    border: `1px solid ${getCategoryColor(website.category)}40`,
                    color: getCategoryColor(website.category)
                  }}
                >
                  Live
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                    <button
                      onClick={() => setSelectedWebsite(website)}
                      className="p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{website.name}</h3>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex-shrink-0"
                    style={{
                      background: `${getCategoryColor(website.category)}20`,
                      border: `1px solid ${getCategoryColor(website.category)}40`,
                      color: getCategoryColor(website.category)
                    }}
                  >
                    {website.category}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{website.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {website.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        background: 'rgba(96, 165, 250, 0.1)',
                        border: '1px solid rgba(96, 165, 250, 0.3)',
                        color: '#60a5fa'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(website.completedDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Code className="w-4 h-4" />
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedWebsite && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div 
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            style={{
              background: 'rgba(15, 25, 45, 0.95)',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedWebsite.name}</h2>
                  <p className="text-gray-300">{selectedWebsite.description}</p>
                </div>
                <button
                  onClick={() => setSelectedWebsite(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Large Preview */}
              <div className="mb-6">
                <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
                  {!previewError.has(selectedWebsite.id) ? (
                    <iframe
                      src={selectedWebsite.url}
                      className="w-full h-full scale-75 origin-top-left"
                      style={{ width: '133%', height: '133%' }}
                      title={`Large preview of ${selectedWebsite.name}`}
                    />
                  ) : (
                    <img
                      src={selectedWebsite.image}
                      alt={selectedWebsite.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedWebsite.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{
                          background: 'rgba(96, 165, 250, 0.1)',
                          border: '1px solid rgba(96, 165, 250, 0.3)',
                          color: '#60a5fa'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Project Details</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Category:</span>
                      <span style={{ color: getCategoryColor(selectedWebsite.category) }}>
                        {selectedWebsite.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed:</span>
                      <span>{formatDate(selectedWebsite.completedDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-green-400">Live</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <a
                  href={selectedWebsite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
                  style={{
                    background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
                    color: 'white'
                  }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Visit Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-10px, 10px) scale(0.9); }
          50% { transform: translate(10px, -10px) scale(1.1); }
        }
        
        @keyframes shine {
          0% { left: -75%; }
          100% { left: 125%; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(0.9); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default WebsiteShowcase;