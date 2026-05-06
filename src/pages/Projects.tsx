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
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          {['all', 'React', 'TypeScript', 'UI/UX'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded border border-accent font-sans uppercase text-[0.8rem] tracking-[0.1em] cursor-pointer transition-all duration-300 ${
                filter === f
                  ? 'bg-accent text-primary'
                  : 'bg-transparent text-accent hover:bg-accent hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {projectsData.filter(p => filter === 'all' || p.tags.includes(filter)).map((project, index) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
              link={project.link}
              priority={index < 3}
            />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="font-sans font-light text-2xl tracking-[0.2em] uppercase text-text-main text-center mb-8">
            ჩემი GitHub რეპოზიტორიები
          </h2>
          <GitHubRepo />
        </div>
      </Section>
    </div>
  );
};