import { experience } from '../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="section-container section-surface">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent"></div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={job.id} className={`relative ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'} md:w-1/2`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-full md:mr-[-1.125rem] transform md:translate-x-0 w-4 h-4 bg-blue-500 rounded-full border-4 z-10" style={{ borderColor: 'var(--section-bg)' }}></div>
                
                <div className="ml-8 md:ml-0 md:mr-8 card">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-themed-primary">
                      {job.title}
                    </h3>
                    <span className="text-sm text-themed-muted whitespace-nowrap ml-4">
                      {job.period}
                    </span>
                  </div>
                  
                  <h4 className="text-cyan-500 font-semibold mb-3">
                    {job.company}
                  </h4>
                  
                  <p className="text-themed-secondary mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-themed-muted">Key Highlights:</h5>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-themed-secondary text-sm">
                          <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-themed-primary font-semibold">Open to New Opportunities</p>
                <p className="text-themed-muted text-sm">Full-time roles in software development or HR tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
