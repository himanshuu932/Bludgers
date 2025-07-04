"use client"

import { useMemo, useState, useEffect } from "react"
import { ChevronRight, Play, ArrowDown, Sparkles, Code, Globe, Users, Award, Star, Zap, Target, CheckCircle } from "lucide-react"

// Enhanced Stars Component with better animation
const Stars = () =>
  useMemo(
    () => (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 4 === 0 ? 'w-1 h-1 bg-blue-400' : 
              i % 4 === 1 ? 'w-0.5 h-0.5 bg-purple-400' : 
              i % 4 === 2 ? 'w-px h-px bg-cyan-400' :
              'w-px h-px bg-white'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    ),
    [],
  )

// Floating Elements Component
const FloatingElements = () => {
  const elements = [
    { icon: Code, position: { top: '10%', left: '8%' }, delay: 0, color: 'text-blue-400' },
    { icon: Globe, position: { top: '20%', right: '12%' }, delay: 1, color: 'text-purple-400' },
    { icon: Users, position: { bottom: '25%', left: '10%' }, delay: 2, color: 'text-cyan-400' },
    { icon: Award, position: { bottom: '15%', right: '8%' }, delay: 3, color: 'text-green-400' },
    { icon: Star, position: { top: '35%', left: '15%' }, delay: 4, color: 'text-yellow-400' },
    { icon: Zap, position: { top: '45%', right: '15%' }, delay: 5, color: 'text-pink-400' },
    { icon: Target, position: { bottom: '35%', right: '18%' }, delay: 6, color: 'text-indigo-400' },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.color} opacity-20 hover:opacity-40 transition-opacity duration-300`}
          style={{
            ...element.position,
            animation: `float ${6 + index}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
          }}
        >
          <element.icon size={32} className="animate-pulse" />
        </div>
      ))}
    </div>
  )
}

// Animated Counter
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return (
    <span className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

// Enhanced Stats Card
const StatsCard = ({ number, suffix, label, delay = 0, icon: Icon }) => (
  <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-center hover:bg-slate-900/60 transition-all duration-300 group hover:scale-105 hover:border-blue-500/30">
    <div className="flex items-center justify-center mb-3">
      <Icon size={24} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
    </div>
    <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
      <AnimatedCounter end={number} suffix={suffix} duration={2000 + delay} />
    </div>
    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{label}</div>
  </div>
)

// Action Button Component
const ActionButton = ({ children, primary = false, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`
      group relative overflow-hidden px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95
      ${primary 
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40' 
        : 'border-2 border-slate-700 text-gray-300 hover:border-blue-500 hover:text-white backdrop-blur-sm bg-slate-900/30'
      }
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
    {primary && (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    )}
  </button>
)

// Trust Indicators
const TrustIndicators = () => {
  const indicators = [
    { icon: CheckCircle, text: "ISO 27001 Certified", color: "text-green-400" },
    { icon: Award, text: "Industry Leader", color: "text-yellow-400" },
    { icon: Users, text: "500+ Happy Clients", color: "text-blue-400" },
    { icon: Star, text: "4.9/5 Rating", color: "text-purple-400" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
      {indicators.map((indicator, index) => (
        <div key={index} className="flex items-center gap-2 group hover:text-white transition-colors duration-300">
          <indicator.icon size={16} className={`${indicator.color} group-hover:scale-110 transition-transform duration-300`} />
          <span>{indicator.text}</span>
        </div>
      ))}
    </div>
  )
}

// Corner Decorations
const CornerDecorations = () => (
  <>
    {/* Top Left Corner */}
    <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400 rounded-tl-lg"></div>
      <div className="absolute top-8 left-8 w-4 h-4 border-l-2 border-t-2 border-purple-400 rounded-tl-lg"></div>
    </div>
    
    {/* Top Right Corner */}
    <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400 rounded-tr-lg"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border-r-2 border-t-2 border-pink-400 rounded-tr-lg"></div>
    </div>
    
    {/* Bottom Left Corner */}
    <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400 rounded-bl-lg"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg"></div>
    </div>
    
    {/* Bottom Right Corner */}
    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-indigo-400 rounded-br-lg"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r-2 border-b-2 border-rose-400 rounded-br-lg"></div>
    </div>
  </>
)

// Main Enhanced Hero Section
const EnhancedHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <Stars />
        <FloatingElements />
        <CornerDecorations />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-black/80"></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-8">
            <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800/50 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for new projects</span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-none tracking-tight mb-4">
                BLUDGERS
              </h1>
              
              <p className="text-lg text-gray-300 font-light leading-relaxed max-w-md mx-auto mb-6">
                We craft digital experiences that captivate, convert, and scale with precision.
              </p>
                        {/* Stats Grid */}
            <div className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <StatsCard number={5} suffix="+" label="Projects" delay={0} icon={Code} />
              <StatsCard number={2} suffix="+" label="Years" delay={200} icon={Award} />
              <StatsCard number={100} suffix="%" label="Success" delay={400} icon={Target} />
              <StatsCard number={24} suffix="/7" label="Support" delay={600} icon={Users} />
            </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
               <ActionButton onClick={() => window.location.href = '/services'} primary>
                  <Play size={20} /> View Portfolio
                </ActionButton>
                <ActionButton  onClick={()=>window.location.href='/#contact'}>
                  <Globe size={20}/> Free Consultation
                </ActionButton>
              </div>
            </div>

  

        
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="text-center mb-16">
              {/* Status Badge */}
              <div className={`inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-800/50 mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Available for new projects • Response within 24 hours</span>
              </div>

              {/* Main Title */}
              <h1 className={`text-8xl xl:text-[9rem] font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-none tracking-tight mb-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                BLUDGERS
              </h1>

              {/* Subtitle */}
              <p className={`text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed mb-12 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                We craft digital experiences that captivate, convert, and scale with precision. 
                From concept to launch, we build products that matter and deliver results.
              </p>

              {/* Action Buttons */}
              <div className={`flex flex-wrap justify-center gap-6 mb-16 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
                <ActionButton onClick={() => window.location.href = '/services'} primary>
                  <Play size={20} /> View Portfolio
                </ActionButton>
                <ActionButton  onClick={()=>window.location.href='/#contact'}>
                  <Globe size={20}/> Free Consultation
                </ActionButton>
              </div>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-4 gap-6 max-w-6xl mx-auto mb-12 transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <StatsCard number={5} suffix="+" label="Projects Delivered" delay={0} icon={Code} />
              <StatsCard number={2} suffix="+" label="Years Experience" delay={200} icon={Award} />
              <StatsCard number={100} suffix="%" label="Success Rate" delay={400} icon={Target} />
              <StatsCard number={24} suffix="/7" label="Support Available" delay={600} icon={Users} />
            </div>

            {/* Scroll Indicator */}
            <div className={`flex justify-center mt-16 transform transition-all duration-1000 delay-800 ${isLoaded ? 'translate-y-[-50] opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex flex-col items-center  text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="text-sm">Explore More</span>
                <ArrowDown size={20} className="animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedHeroSection