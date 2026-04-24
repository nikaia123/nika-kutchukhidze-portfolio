import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { usePageTitle } from '../hooks/usePageTitle';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  usePageTitle(project ? `Project: ${project.title}` : 'Project Not Found');

  if (!project) {
    return (
      <div className="min-h-[80vh] bg-primary text-text-main flex items-center justify-center">
        <Section title="404">
          <div className="text-center flex flex-col items-center gap-8">
            <h2 className="font-serif font-light text-[2rem] text-accent tracking-widest uppercase">
              პროექტი ვერ მოიძებნა
            </h2>
            <Link to="/projects" className="no-underline">
              <Button variant="primary">პროექტებში დაბრუნება</Button>
            </Link>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-text-main py-20">
      <Section title={project.title}>
        <div className="max-w-[900px] mx-auto bg-secondary border border-white/5 p-12 relative">
          
          {/* Corner ornaments */}
          <div className="absolute top-[-1px] left-[-1px] w-[20px] h-[20px] border-t border-l border-accent/40" />
          <div className="absolute top-[-1px] right-[-1px] w-[20px] h-[20px] border-t border-r border-accent/40" />
          <div className="absolute bottom-[-1px] left-[-1px] w-[20px] h-[20px] border-b border-l border-accent/40" />
          <div className="absolute bottom-[-1px] right-[-1px] w-[20px] h-[20px] border-b border-r border-accent/40" />

          {/* Project Image */}
          <div className="w-full h-[400px] overflow-hidden mb-10 border border-white/5 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10" />
             <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale-[20%]" loading="lazy" decoding="async" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {project.tags.map(tag => <Badge key={tag} label={tag} />)}
          </div>

          {/* Full Text */}
          <div className="font-sans font-light text-[1rem] leading-[2] text-[#888] mb-12 text-justify">
            {project.fullText}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-10" />

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Link to="/projects" className="no-underline">
              <Button variant="primary">უკან დაბრუნება</Button>
            </Link>
            
            <a href={project.link} target="_blank" rel="noreferrer" className="no-underline">
              <Button variant="secondary">პროექტის ლინკი</Button>
            </a>
          </div>

        </div>
      </Section>
    </div>
  );
};
