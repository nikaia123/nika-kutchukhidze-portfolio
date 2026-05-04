import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { usePageTitle } from '../hooks/usePageTitle';
import { projectsData } from '../data/projects';

export const Home: React.FC = () => {
  usePageTitle('Home');

  return (
    <div className="min-h-screen bg-primary text-text-main">
      
      <Hero
        title="ნიკა კუჭუხიძე"
        slogan="Frontend Web Developer | React & TypeScript"
        ctaText="ნახე ჩემი ნამუშევრები"
      />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      <Section id="projects" title="ბოლო პროექტები">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {projectsData.map((project) => (
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
      </Section>

    </div>
  );
};