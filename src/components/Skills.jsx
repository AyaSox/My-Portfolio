import { skills } from '../data/portfolioData';

function Skills() {
  const skillCategories = [
    { 
      title: 'Backend Development', 
      items: skills.backend,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Frontend Development', 
      items: skills.frontend,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-cyan-500 to-cyan-600'
    },
    { 
      title: 'Databases', 
      items: skills.databases,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    { 
      title: 'Tools & Technologies', 
      items: skills.tools,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    { 
      title: 'Specialisations', 
      items: skills.specialisations,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="section-container section-surface-alt">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="card group">
            <div className={`w-12 h-12 mb-3 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
              {category.icon}
            </div>
            
            <h3 className="text-lg font-semibold text-themed-primary mb-3">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-2.5 py-1 bg-[var(--surface-bottom)] text-themed-secondary rounded-full text-xs hover:bg-[var(--surface-top)] transition-colors border border-[var(--border-color)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-themed-muted max-w-2xl mx-auto text-sm">
          I am constantly learning and expanding my technical toolkit.
        </p>
      </div>
    </section>
  );
}

export default Skills;
