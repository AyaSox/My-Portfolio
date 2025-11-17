import { useState } from 'react';
import { projects } from '../data/portfolioData';

function parseSummary(summary) {
  // Splits on 'Impact:' to render impact bullets separately
  const [desc, impactPart] = summary.split('Impact:');
  const impactItems = impactPart
    ? impactPart.split(',').map(s => s.trim()).filter(Boolean)
    : [];
  return { desc: desc?.trim(), impacts: impactItems };
}

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="section-container section-surface">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="text-center mb-6">
        <p className="text-themed-muted max-w-2xl mx-auto mb-3 text-sm md:text-base">
          A collection of real-world applications I have built, focusing on HR systems, 
          applicant tracking, resource management, and financial tools.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-600 text-xs font-semibold">
            {projects.filter(p => p.demo).length} Live Demos Available
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-4 mb-6">
        {displayedProjects.map((project) => {
          const { desc, impacts } = parseSummary(project.summary);
          return (
            <a 
              key={project.id} 
              className="card flex flex-col group hover:border-electric-500/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-electric-500"
              role="article"
              aria-labelledby={`proj-${project.id}-title`}
              tabIndex={0}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 id={`proj-${project.id}-title`} className="text-lg font-bold text-themed-primary group-hover:text-electric-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-1.5">
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                  {project.demo && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full animate-pulse">
                      Live Demo
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-themed-secondary mb-3 leading-relaxed text-base md:text-[15px]">
                {desc}
              </p>

              {impacts.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-themed-muted mb-1.5">Impact</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-themed-secondary">
                    {impacts.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mb-3">
                <h4 className="text-xs font-semibold text-themed-muted mb-1.5">Tech Stack:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-0.5 bg-electric-500/20 text-electric-600 rounded-md text-xs border border-electric-500/30 hover:bg-electric-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 pt-3 border-t border-[var(--border-color)]">
                <span 
                  className="flex-1 text-center px-3 py-2 bg-[var(--surface-bottom)] text-themed-primary rounded-lg hover:bg-[var(--surface-top)] transition-colors inline-flex items-center justify-center gap-1.5 group/btn border border-[var(--border-color)] hover:border-[var(--border-hover)] text-xs"
                >
                  <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </span>
                {project.demo ? (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-colors inline-flex items-center justify-center gap-1.5 group/btn shadow-md shadow-green-500/25 text-xs"
                  >
                    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <div className="flex-1 text-center px-3 py-2 bg-[var(--text-muted)] text-white rounded-lg cursor-not-allowed inline-flex items-center justify-center gap-1.5 opacity-60 text-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Private Use
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {!showAll && projects.length > displayedProjects.length && (
        <div className="text-center">
          <button 
            onClick={() => setShowAll(true)}
            className="btn-primary group focus-visible:outline-2 focus-visible:outline-electric-500"
          >
            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Show All Projects ({projects.length - displayedProjects.length} more)
          </button>
        </div>
      )}

      {showAll && (
        <div className="text-center">
          <button 
            onClick={() => setShowAll(false)}
            className="btn-secondary group focus-visible:outline-2 focus-visible:outline-electric-500"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            Show Less
          </button>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-10 pt-8 border-t border-[var(--border-color)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <div className="text-2xl font-bold text-electric-500 mb-1">{projects.length}</div>
            <div className="text-themed-muted text-xs">Total Projects</div>
          </div>
          <div className="p-3">
            <div className="text-2xl font-bold text-green-500 mb-1">{projects.filter(p => p.demo).length}</div>
            <div className="text-themed-muted text-xs">Live Demos</div>
          </div>
          <div className="p-3">
            <div className="text-2xl font-bold text-purple-500 mb-1">{projects.filter(p => p.featured).length}</div>
            <div className="text-themed-muted text-xs">Featured</div>
          </div>
          <div className="p-3">
            <div className="text-2xl font-bold text-cyan-500 mb-1">{projects.filter(p => !p.demo).length}</div>
            <div className="text-themed-muted text-xs">Private Use</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
