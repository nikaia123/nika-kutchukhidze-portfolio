import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

export const Projects: React.FC = () => {
  const projectsData = [
    {
      title: "The Apex Modular",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop",
      description: "ექსტრემალური სპორტის საათის პროტოტიპი მოდულური SOS სისტემით. კორპუსი დამზადებულია Forged Carbon-ისგან.",
      tags: ["UI/UX", "Product Design", "React"]
    },
    {
      title: "Mafia Game Web",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
      description: "მაფიის სათამაშო პლატფორმა 11 მოთამაშისთვის. როლების ავტომატური განაწილების სისტემით.",
      tags: ["TypeScript", "React", "Tailwind CSS"]
    },
    {
      title: "E-Commerce Store",
      image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=800&auto=format&fit=crop",
      description: "ონლაინ მაღაზიის ინტერფეისი FakeStoreAPI-ის ინტეგრაციით და პროდუქტების მართვით.",
      tags: ["React", "API", "Context API"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <Section title="ყველა პროექტი">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projectsData.map((project) => (
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