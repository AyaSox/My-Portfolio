import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const sectionIds = ['home','about','skills','projects','experience','contact'];

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const preferLight = saved ? saved === 'light' : window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setIsLight(preferLight);
    document.body.classList.toggle('light', preferLight);
  }, []);

  // Toggle theme and persist
  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.body.classList.toggle('light', next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Active section highlight
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin: '0px 0px -60% 0px', threshold: 0.25 });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on outside click and Esc
  useEffect(() => {
    const onClick = (e) => {
      if (!isOpen) return;
      const menuEl = menuRef.current;
      const btnEl = buttonRef.current;
      if (menuEl && !menuEl.contains(e.target) && btnEl && !btnEl.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('click', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const navLinkClass = (id) => `nav-link transition-colors hover:opacity-80 ${activeId === id ? 'text-electric-400 font-semibold' : ''}`;

  return (
    <nav className="app-navbar fixed w-full backdrop-blur-sm z-50 border-b accent-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-electric-400 via-cyan-400 to-electric-400 bg-clip-text text-transparent">
            AS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {sectionIds.map(id => (
              <button key={id} onClick={() => scrollToSection(id)} className={`${navLinkClass(id)} bg-clip-text text-transparent bg-gradient-to-r from-electric-400 via-cyan-400 to-electric-400` } aria-current={activeId === id ? 'page' : undefined}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            {/* Theme toggle */}
            <button 
              onClick={toggleTheme} 
              className="theme-toggle ml-2 px-3 py-2 rounded-md border transition-all duration-200 hover:scale-105"
              aria-label="Toggle colour theme"
            >
              {isLight ? (
                <span className="inline-flex items-center gap-2 text-sm">
                  <Icon name="moon" className="w-4 h-4" />
                  Dark
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm">
                  <Icon name="sun" className="w-4 h-4" />
                  Light
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden nav-link"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            ref={buttonRef}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="mobile-menu" ref={menuRef} className="md:hidden pb-4 space-y-2">
            {sectionIds.map(id => (
              <button key={id} onClick={() => scrollToSection(id)} className={`block w-full text-left px-3 py-2 nav-link menu-surface rounded transition-colors ${activeId === id ? 'text-electric-400 font-semibold' : ''}`} aria-current={activeId === id ? 'page' : undefined}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            <button 
              onClick={toggleTheme} 
              className="w-full text-left px-3 py-2 menu-surface rounded theme-toggle border"
              aria-label="Toggle colour theme"
            >
              {isLight ? 'Switch to Dark' : 'Switch to Light'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
