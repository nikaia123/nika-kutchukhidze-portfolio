import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

export const Home: React.FC = () => {
  const projects = [
    {
      title: "The Apex Modular",
      image: "src/assets/atuka.webp",
      description: "ექსტრემალური სპორტის საათის პროტოტიპი მოდულური SOS სისტემით.",
      tags: ["UI/UX", "Product Design", "React"]
    },
    {
      title: "Mafia Game Web",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
      description: "მაფიის სათამაშო პლატფორმა 11 მოთამაშისთვის ავტომატური როლებით.",
      tags: ["TypeScript", "React", "Tailwind CSS"]
    },
    {
      title: "E-Commerce Store",
      image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=800&auto=format&fit=crop",
      description: "ონლაინ მაღაზიის ინტერფეისი FakeStoreAPI-ის ინტეგრაციით.",
      tags: ["React", "API", "Context API"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-indigo-500/30">
      
      <Hero 
        title="ნიკოლოზ კუჭუხიძე" 
        slogan="Frontend Web Developer | React & TypeScript" 
        ctaText="ნახე ჩემი ნამუშევრები" 
      />

      <Section id="projects" title="ბოლო პროექტები">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <Card 
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </Section>
      
    </div>
  );
};