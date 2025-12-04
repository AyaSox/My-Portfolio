import { about, projects } from '../data/portfolioData';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const liveDemoCount = projects.filter(p => p.demo).length;

  return (
    <section id="home" className="section-container section-surface accent-top min-h-screen flex items-center justify-center pt-16 hero-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-electric-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-[var(--surface-top)] flex items-center justify-center overflow-hidden">
                <svg className="w-20 h-20 text-[color:var(--text-muted)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full border-4 border-[var(--app-bg)] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-themed-primary">
          {about.name}
        </h1>
        
        <h2 className="text-lg md:text-xl font-semibold mb-4 bg-gradient-to-r from-electric-400 to-cyan-400 bg-clip-text text-transparent">
          {about.title}
        </h2>
        
        <p className="text-base text-themed-secondary mb-3 font-mono">
          {about.subtitle}
        </p>

        <p className="text-sm text-themed-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
          Bridging the gap between HR expertise and modern software development. 
          Building real-world solutions that solve business problems and improve organisational efficiency.
        </p>

        {/* Live Demo Highlight */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
            <div className="flex -space-x-2" aria-hidden="true">
              {[...Array(liveDemoCount)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[var(--app-bg)] animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
            <span className="text-green-600 font-semibold text-xs flex items-center gap-2">
              <span>{liveDemoCount} Live Applications</span>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
              <span>Actively Maintained</span>
            </span>
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" aria-hidden="true"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>View Live Demos</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-secondary group"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-xl font-bold text-electric-500">{projects.length}</div>
            <div className="text-xs text-themed-muted">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-500">{liveDemoCount}</div>
            <div className="text-xs text-themed-muted">Live Demos</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-purple-500">{new Date().getFullYear() - about.careerStartYear}+</div>
            <div className="text-xs text-themed-muted">Years HR Exp</div>
          </div>
        </div>

        <div className="mt-12 animate-bounce">
          <svg className="w-5 h-5 mx-auto text-themed-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
