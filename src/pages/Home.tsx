import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { usePageTitle } from '../hooks/usePageTitle';

export const Home: React.FC = () => {
  usePageTitle('Home');
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
    <div style={{ minHeight: '100vh', background: '#080808', color: '#c8c8c8' }}>
      
      <Hero
        title="ნიკოლოზ კუჭუხიძე"
        slogan="Frontend Web Developer | React & TypeScript"
        ctaText="ნახე ჩემი ნამუშევრები"
      />

      {/* Divider */}
      <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.1), transparent)' }} />

      <Section id="projects" title="ბოლო პროექტები">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          justifyItems: 'center',
        }}>
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