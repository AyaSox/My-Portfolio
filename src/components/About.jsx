import { about, education } from '../data/portfolioData';
import { useState } from 'react';

function About() {
  const [expanded, setExpanded] = useState({}); // { [id]: true }
  const toggleSubjects = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="about" className="section-container section-surface">
      <h2 className="section-title">About Me</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bio Section */}
          <div className="lg:col-span-2">
            <div className="card h-full">
              <h3 className="text-2xl font-semibold text-themed-primary mb-6">My Journey</h3>
              <div className="prose prose-invert max-w-none">
                {about.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-themed-secondary leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
                <h4 className="text-xl font-semibold text-themed-primary mb-4">What Drives Me</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-electric-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-themed-primary mb-2">Problem Solver</h5>
                    <p className="text-sm text-themed-muted">Finding elegant solutions to real HR and business challenges</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-themed-primary mb-2">Continuous Learner</h5>
                    <p className="text-sm text-themed-muted">From HR to full-stack development while working full-time</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-themed-primary mb-2">Domain Expert</h5>
                    <p className="text-sm text-themed-muted">Understanding business needs from years of HR experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certifications Section */}
          <div className="lg:col-span-1">
            <div className="card h-full">
              <h3 className="text-2xl font-semibold text-themed-primary mb-6">Education & Certifications</h3>
              <div className="space-y-6">
                {education.map((edu) => {
                  const isExpanded = !!expanded[edu.id];
                  const visibleSubjects = isExpanded ? edu.subjects : edu.subjects.slice(0, 3);
                  const remaining = edu.subjects.length - 3;

                  return (
                    <div key={edu.id} className="relative">
                      <div className="absolute -left-2 mt-2 w-4 h-4 bg-electric-500 rounded-full border-4 border-[var(--surface-top)]"></div>
                      <div className="ml-4 pb-6 border-l border-[var(--border-color)] last:border-l-0 pl-6 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm text-themed-muted">{edu.year}</span>
                        </div>
                        <h4 className="font-semibold text-themed-primary text-sm leading-tight mb-2">{edu.degree}</h4>
                        <p className="text-cyan-500 text-sm mb-2">{edu.institution}</p>
                        {edu.subjects.length > 0 && (
                          <div className="mb-2">
                            <p className="text-xs text-themed-muted mb-1">Key Subjects:</p>
                            <div className="flex flex-wrap gap-1">
                              {visibleSubjects.map((subject, sIndex) => (
                                <span key={sIndex} className="text-xs bg-[var(--surface-bottom)] text-themed-secondary px-2 py-1 rounded border border-[var(--border-color)]">{subject}</span>
                              ))}
                              {!isExpanded && remaining > 0 && (
                                <button
                                  type="button"
                                  onClick={() => toggleSubjects(edu.id)}
                                  className="text-xs px-2 py-1 rounded border border-dashed border-[var(--border-color)] text-electric-400 hover:text-electric-500 hover:border-electric-500/50 transition-colors"
                                >
                                  + {remaining} more
                                </button>
                              )}
                              {isExpanded && remaining > 0 && (
                                <button
                                  type="button"
                                  onClick={() => toggleSubjects(edu.id)}
                                  className="text-xs px-2 py-1 rounded border border-[var(--border-color)] text-themed-muted hover:text-themed-secondary transition-colors"
                                >
                                  Show less
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                        {edu.achievements.length > 0 && (
                          <div className="text-xs text-green-500">- {edu.achievements[0]}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Facts - NOW DYNAMIC */}
              <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                <h4 className="text-lg font-semibold text-themed-primary mb-4">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-themed-muted">Location:</span>
                    <span className="text-themed-secondary">{about.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-themed-muted">Languages:</span>
                    <span className="text-themed-secondary">{about.languages.join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-themed-muted">Availability:</span>
                    <span className="text-green-500">{about.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-themed-muted">Nationality:</span>
                    <span className="text-themed-secondary">{about.nationality}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
