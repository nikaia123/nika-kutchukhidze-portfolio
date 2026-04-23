import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { usePageTitle } from '../hooks/usePageTitle';
import { useProjects } from '../hooks/useProjects';
import { GitHubRepo } from '../components/GitHubRepo';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  usePageTitle('Projects');
  const { filter, setFilter } = useProjects('all');

  return (
    <div className="min-h-screen bg-primary text-text-main py-20">
      <Section title="ყველა პროექტი">
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['all', 'React', 'TypeScript', 'UI/UX'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? '#D4A843' : 'transparent',
                color: filter === f ? '#080808' : '#D4A843',
                border: '1px solid #D4A843',
                padding: '0.5rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease'
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {projectsData.filter(p => filter === 'all' || p.tags.includes(filter)).map((project) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>

        <div style={{ marginTop: '5rem' }}>
          <h2 style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontWeight: 300, 
            fontSize: '1.5rem', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            color: '#c8c8c8',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            ჩემი GitHub რეპოზიტორიები
          </h2>
          <GitHubRepo />
        </div>
      </Section>
    </div>
  );
};